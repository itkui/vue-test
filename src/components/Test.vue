<template>
  <div>
    <h2>這裡是插槽Test</h2>
    <p v-myClick:green.bold="'yellow'">
      這裡是自定义指令测试入口，点击时会将当前段落替换
    </p>
    <p>{{ testData }}</p>
    <p>{{ testMethod() }}</p>
  </div>
</template>

<script>
export default {
  /* 依赖注入的使用inject */
  inject: ['testData', 'testMethod'],
  /* 自定义指令 */
  directives: {
    myClick: {
      bind(el, binding, vnode, oldVnode) {
        // dom 元素， property对象， 编译生成的VNode， 上一个VNode
        const { name, value, arg } = binding;
        let data = el.innerText;
        let isChange = false;
        el.addEventListener('click', function() {
          isChange = !isChange;
          if (isChange) {
            el.innerText = `你点击了自定义指令(${name})元素, 参数为${arg}，值为${value}`;
            el.style.color = value;
            el.style.background = arg;
          } else {
            el.innerText = data;
            el.style.color = 'inherit';
            el.style.background = 'inherit';
          }
        });
        console.log(el, binding, vnode, oldVnode);
      },
    },
  },
};
</script>
