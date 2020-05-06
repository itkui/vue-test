<script>
export default {
  render(createElement) {
    return createElement(
      "div",
      {
        class: {
          foo: true,
          bar: false
        },
        style: {
          color: "red"
        },
        attrs: {
          id: "foo"
        },
        props: {
          myProp: {
            type: Array,
            default() {
              return [1, 2, 3];
            }
          }
        }
      },
      [
        `這裡是一段文字`,
        createElement(
          "h1",
          {
            class: {
              yellow: true,
              green: false
            }
          },
          "一则头条"
        ),
        this.$slots.test,
        this.$slots.default
      ]
    );
  }
};
</script>

<style scoped>
#foo {
  border: 1px dashed #252525;
}
.yellow {
  color: yellow;
}
.green {
  background: green;
}
</style>
