<template>
  <div>
    <p ref="name">
      当前姓名： <input v-model="thisName" placeholder="请输入姓名" />
    </p>
    <p ref="age">
      当前年龄： <input v-model="ageView" placeholder="请输入年龄" />
    </p>
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api';
export default {
  props: ['name', 'age'],
  setup(props) {
    const thisName = ref(props.name);
    const ageView = computed({
      get: () => props.age,
      set: (val) => {
          console.log(this)
        emit('update:age', val);
      },
    });
    return {
      thisName,
      ageView,
    };
  },
};
</script>
