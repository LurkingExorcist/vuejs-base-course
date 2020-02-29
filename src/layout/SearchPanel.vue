<template>
  <sui-form class="search-panel" :warning="errors.length > 0">
    <sui-form-fields fields="two">
      <sui-form-field>
        <input
          v-model="form.artist"
          type="text"
          placeholder="Исполнитель"
        />
      </sui-form-field>
      <sui-form-field>
        <input
          v-model="form.track"
          type="text"
          placeholder="Композиция"
        />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-fields fields="two">
      <sui-form-field>
        <input
          v-model="form.album"
          type="text"
          placeholder="Альбом"
        />
      </sui-form-field>
      <sui-form-field>
        <input
          v-model="form.label"
          type="text"
          placeholder="Лейбл"
        />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-fields fields="four">
      <sui-form-field>
        <input
          v-model="form.dur_min"
          type="text"
          placeholder="Мин. длина"
        />
      </sui-form-field>
      <sui-form-field>
        <input
          v-model="form.dur_max"
          type="text"
          placeholder="Макс. длина"
        />
      </sui-form-field>
      <sui-form-field>
        <input
          v-model="form.bpm_min"
          type="text"
          placeholder="Мин. bpm"
        />
      </sui-form-field>
      <sui-form-field>
        <input
          v-model="form.bpm_max"
          type="text"
          placeholder="Макс. bpm"
        />
      </sui-form-field>
    </sui-form-fields>
    <sui-message warning>
      <sui-message-header>
        {{
          errors.length === 1
            ? 'Проблемка!'
            : 'Проверьте корректность введенных данных'
        }}
      </sui-message-header>
      <sui-message-list>
        <sui-message-item
          v-for="(err, i) in errors"
          :key="i"
        >
          {{ err }}
        </sui-message-item>
      </sui-message-list>
    </sui-message>
    <sui-button id="submit-button" @click="search">Искать</sui-button>
  </sui-form>
</template>

<script>
import { maxLength, minValue, integer } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';

const minNatValue = (min) => (val) => val === '' || (integer(val) && minValue(0)(val));

export default {
  name: 'SearchPanel',
  data() {
    return {
      form: {
        artist: '',
        album: '',
        track: '',
        label: '',
        dur_min: '',
        dur_max: '',
        bpm_min: '',
        bpm_max: '',
      },

      errors: []
    }
  },
  validations: {
    form: {
      artist: {
        maxLength: maxLength(128)
      },
      album: {
        maxLength: maxLength(128)
      },
      track: {
        maxLength: maxLength(128)
      },
      label: {
        maxLength: maxLength(128)
      },
      dur_min: {
        minNatValue: minNatValue(0)
      },
      dur_max: {
        minNatValue: minNatValue(0)
      },
      bpm_min: {
        minNatValue: minNatValue(0)
      },
      bpm_max: {
        minNatValue: minNatValue(0)
      },
    }
  },
  created() {
    this.clearItems();
  },
  methods: {
    ...mapActions(['searchItems', 'clearItems']),
    async search() {
      this.clearItems();
      this.errors = [];
      
      const filledKeys = Object
        .keys(this.form)
        .filter(k => this.form[k].length > 0);

      if (filledKeys.length === 0) {
        this.errors.push('Должно быть заполнено как минимум одно поле')
      }

      this.$v.$touch()

      if (this.$v.$invalid) {
        if (!this.$v.form.artist.maxLength) {
          this.errors.push('Название исполнителя не должно превышать 128 символов');
        }
        if (!this.$v.form.album.maxLength) {
          this.errors.push('Название альбома не должно превышать 128 символов');
        }
        if (!this.$v.form.track.maxLength) {
          this.errors.push('Название трека не должно превышать 128 символов');
        }
        if (!this.$v.form.label.maxLength) {
          this.errors.push('Название лейбла не должно превышать 128 символов');
        }
        if (!this.$v.form.dur_min.minNatValue) {
          this.errors.push('Мин. длина композиции должна быть положительным целым числом');
        }
        if (!this.$v.form.dur_max.minNatValue) {
          this.errors.push('Макс. длина композиции должна быть положительным целым числом');
        }
        if (!this.$v.form.bpm_min.minNatValue) {
          this.errors.push('Мин. bpm композиции должен быть положительным целым числом');
        }
        if (!this.$v.form.bpm_max.minNatValue) {
          this.errors.push('Макс. bpm композиции должен быть положительным целым числом');
        }
      }

      const query = filledKeys
        .map(k => `${k}:${
          isNaN(+this.form[k])
            ? `"${this.form[k]}"`
            : this.form[k]
        }`)
        .join(' ');

      await this.searchItems(query);
    }
  }
}
</script>

<style >
#submit-button {
  width: 100%;
}
</style>