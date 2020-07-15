<template>
  <div>
    <van-checkbox @change="onChange" v-model="checked">复选框</van-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
  model: {
    prop: 'chooses',
    event: 'change',
  },
  props: ['chooses', 'index'],
  setup() {
    return {
      checked: ref(false),
      onChange: function(e) {
        let chooses = [...this.chooses];
        if (e) chooses = Array.from(new Set([...chooses, this.index]));
        else chooses = chooses.filter(v => v !== this.index)
        this.$emit('change', chooses);
      },
    };
  },
};
</script>
