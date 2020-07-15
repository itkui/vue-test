<template>
  <div class="home">
    <childCheckBox
      v-model="chooses"
      v-for="index in 4"
      :key="index"
      :index="index"
    ></childCheckBox>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api';
import childCheckBox from '@/components/childCheckBox';
export default {
  setup() {
    let chooses = ref([]);
    watchEffect(() => {
      console.log(chooses.value);
    });
    return {
      chooses,
    };
  },
  components: {
    childCheckBox,
  },
};
</script>
