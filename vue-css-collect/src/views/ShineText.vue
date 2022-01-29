<template>
  <div class="view-box">
    <h1>
      <span style="--i: 1">处</span>
      <span style="--i: 2">江</span>
      <span style="--i: 3">湖</span>
      <span style="--i: 4">之</span>
      <span style="--i: 5">远</span>
      <span style="--i: 6">则</span>
      <span style="--i: 7">忧</span>
      <span style="--i: 8">其</span>
      <span style="--i: 9">君</span>
    </h1>
  </div>
</template>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  display: flex;
  color: transparent;
  font-size: 7vw;
  width: 100%;
  height: max-content;
}
h1 span {
  animation: rainbow 3s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes rainbow {
  0% {
    color: #fff;
    filter: blur(2px) hue-rotate(0deg);
    text-shadow: 0 0 10px #03c8a8, 0 0 20px #03c8a8, 0 0 40px #03c8a8,
      0 0 80px #03c8a8, 0 0 120px #03c8a8, 0 0 200px #03c8a8, 0 0 300px #03c8a8,
      0 0 400px #03c8a8;
  }
  30%,
  70% {
    color: #fff;
    filter: blur(2px) hue-rotate(360deg);
    text-shadow: 0 0 10px #03c8a8, 0 0 20px #03c8a8, 0 0 40px #03c8a8,
      0 0 80px #03c8a8, 0 0 120px #03c8a8, 0 0 200px #03c8a8;
  }
  100% {
    color: transparent;
    filter: blur(2px) hue-rotate(0deg);
    text-shadow: none;
  }
}
</style>