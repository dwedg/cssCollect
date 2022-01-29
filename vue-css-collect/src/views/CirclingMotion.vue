<template>
  <div class="view-box">
    <div class="circle-box">
      <div class="box-one">
        <span class="circle"></span>
      </div>
    </div>
    <div class="circle-box">
      <div class="box-two">
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
        <span class="circle"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.circle-box {
  width: 250px;
  height: 250px;
}
.box-one,
.box-two {
  width: 100%;
  height: 100%;
}
.box-one {
  background: url("../assets/images/sun_bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
span {
  display: inline-block;
  border-radius: 50%;
}
.box-one span {
  width: 70px;
  height: 70px;
  background: url("../assets/images/global.png");
  background-size: contain;
  background-repeat: no-repeat;
  /* 以自己圆心，外部盒子的1/2宽为半径旋转一周 */
  transform-origin: 50% 125px;
  animation: rotate-one 3s ease-in-out infinite;
}
@keyframes rotate-one {
  to {
    transform: rotate(1turn);
  }
}
.box-two {
  display: flex;
  justify-content: center;
  background: rgb(193,9,66);
}
.box-two span {
  position: absolute;
  transform-origin: 50% 125px;
  background: #03c8a8;
  animation: rotate-one 3s ease-in-out infinite;
}
.box-two span:nth-child(1) {
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}
.box-two span:nth-child(2) {
  width: 70px;
  height: 70px;
  animation-delay: 0.2s;
}
.box-two span:nth-child(3) {
  width: 50px;
  height: 50px;
  animation-delay: 0.4s;
}
.box-two span:nth-child(4) {
  width: 40px;
  height: 40px;
  animation-delay: 0.6s;
}
</style>