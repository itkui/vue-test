<script>
export default {
  methods: {
    pluginClick() {
      console.log(this);
      this.$alert('测试');
    },
  },
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
      [
        createElement(
          'button',
          {
            on: {
              click: this.pluginClick,
            },
          },
          '点击测试插件',
        ),
        this.$slots.test,
        this.$slots.default,
      ],
    );
  },
};
</script>
