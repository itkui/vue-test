<script>
export default {
  render(createElement) {
    return createElement(
      'div',
      {
        class: {
          foo: true,
          bar: false,
        },
        style: {
          color: 'red',
        },
        attrs: {
          id: 'foo',
        },
        props: {
          myProp: {
            type: Array,
            default() {
              return [1, 2, 3];
            },
          },
        },
      },
      this.$slots.default,
    );
  },
};
</script>
