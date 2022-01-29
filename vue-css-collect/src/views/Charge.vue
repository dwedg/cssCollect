<template>
  <div class="view-box">
    <div class="box">
      <div class="droplet"></div>
      <div class="droplet"></div>
      <div class="droplet"></div>
      <div class="cirle"></div>
      <span>99%</span>
    </div>
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
.box {
  position: relative;
  width: 150px;
  height: 150px;
  /* text-align: center; */
  /* line-height: 150px; */
  font-size: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* filter: contrast(30); */
}
.droplet {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #03c8a8;
  /* filter: blur(2px); */
  animation: fall 3s linear infinite;
  filter: blur(2px);
  opacity: 0;
}
.cirle {
  animation: box 3s linear infinite;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #03c8a8;
  filter: blur(2px);
  font-weight:bold;
}
.droplet:nth-of-type(1) {
  /* animation-delay: .5s; */
}
.droplet:nth-of-type(2) {
  animation-delay: 1.5s;
}
.drop:nth-of-type(3) {
  animation-delay: 1.8s;
}
@keyframes fall {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-300%);
  }
  30% {
    opacity:1;
    transform: scale(0.6) translateY(-200%);
  }
  60% {
    opacity:1;
    transform: scale(0.5) translateY(-100%);
  }
  100% {
    transform: scale(0.3) translateY(0px);
  }
}
@keyframes box {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
    height: 11S0px;
    border-top-left-radius: 45%;
    border-bottom-left-radius: 48%;
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
.box span {
  position: absolute;
  display: inline-block;
}
</style>