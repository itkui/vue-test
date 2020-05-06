<template>
  <div class="home">
    <jsx>这里是一段slot插槽</jsx>
  </div>
</template>

<script>
// @ is an alias to /src
import Jsx from '@/components/Jsx'

export default {
  name: 'Home',
  components: {
    Jsx
  }
}
</script>
