<template>
  <div>
    <h1>测试html2Canvas</h1>
    <button @click="getCanvas">生成canvas图片</button>
    <p>
      再来几张本地图片
      <img
        src="https://img.51nest.com/upload/201892456176302032019111153037.jpg!compress?_1300x1300_"
      />
    </p>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
  methods: {
    getCanvas() {
      let imgs = document.body.querySelectorAll('img');
      imgs.forEach((v) => {
        v.setAttribute('crossOrigin', 'Anonymous');
      });
      html2canvas(document.body).then(function(canvas) {
        let imgUrl = canvas.toDataURL();
        let imgBox = document.createElement('img');
        let styles = {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
        };
        for (const style in styles) {
          const element = styles[style];
          imgBox.style[style] = element;
        }
        imgBox.src = imgUrl;
        document.body.appendChild(imgBox);
      });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
