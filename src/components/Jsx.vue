<script>
export default {
  render(createElement) {
      console.log(createElement('div', this.$slots.default))
    return createElement('div', this.$slots.default);
  },
};
</script>
