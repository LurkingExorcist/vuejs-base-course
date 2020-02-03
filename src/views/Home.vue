<template>
  <div class="home">
    <HelloWorld :msg="text"/>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
      return {
          text: 'Идет загрузка...'
      }
  },
  mounted: function () {
    axios('/api', {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        this.text = response.data.text
    })
  }

}
</script>