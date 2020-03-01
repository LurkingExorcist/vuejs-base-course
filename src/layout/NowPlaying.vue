<template>
  <div class="now-playing">
    <div class="now-plaing__section">
      Сейчас играет:
    </div>
    <div class="now-plyaing__section">
      <div class="now-plyaing__control">
        <Icon
          v-show="isPlaying && title !== '-'"
          class="control-icon"
          name="pause"
          @click="togglePlay()"
        />
        <Icon
          v-show="!isPlaying && title !== '-'"
          class="control-icon"
          name="play"
          @click="togglePlay()"
        />
      </div>
      <div class="now-plyaing__title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Icon from '../components/abstract/Icon.vue'

export default {
  node: 'NowPlaying',
  components: {
    Icon
  },
  computed: {
    ...mapState({
      title: ({ currentTrack }) => currentTrack
        ? `${currentTrack.artist} - ${currentTrack.title}`
        : '-',
      currentTrack: ({ currentTrack }) => currentTrack
    })
  },
  watch: {
    currentTrack(newTrack, prevTrack) {
      if (prevTrack) {
        prevTrack.removeEventListener('play', this.setPlay);
        prevTrack.removeEventListener('pause', this.setPause);
      }
    
      this.currentTrack.addEventListener('play', this.setPlay);
      this.currentTrack.addEventListener('pause', this.setPause);
    }
  },
  data() {
    return {
      isPlaying: this.currentTrack && !this.currentTrack.paused
    }
  },
  methods: {
    setPlay() {
      this.isPlaying = true;
    },
    setPause() {
      this.isPlaying = false;
    },
    togglePlay() {
      if (this.isPlaying) {
        this.currentTrack.pause();
      } else {
        this.currentTrack.play();
      }
    },
  }
}
</script>

<style scoped>
.now-plyaing__section {
  display: flex;
}

.now-plaing__section:not(:last-child) {
  margin-right: 16px;
}

.now-plyaing__control {
  margin-right: 8px;
}

.control-icon {
  cursor: pointer;
}

</style>