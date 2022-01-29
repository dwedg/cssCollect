<template>
  <div class="view-box">
    <div class="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      鼠标移入这里
    </div>
  </div>
</template>
<style scoped>
.view-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* width: 400px;
    height: 250px; */
  background: url("../assets/images/xingkong.png") no-repeat center;
}
.button {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 30px;
  overflow: hidden;
  transition: 0.2s;
  font: 600;
  /* border:1px solid white; */
}
.button:hover {
  color: white;
  background: #03c8a8;
  box-shadow: 0 0 10px #03c8a8, 0 0 40px #03c8a8, 0 0 80px #03c8a8;
  transition-delay: 1s;
}
.button span {
  position: absolute;
  display: block;
}
.button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, transparent, #03c8a8);
}
.button:hover span:nth-child(1) {
  left: 100%;
  transition: 1.3s;
  transition-delay: 0s;
}
.button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 5px;
  background: linear-gradient(270deg, transparent, #03c8a8);
}
.button:hover span:nth-child(3) {
  right: 100%;
  transition: 1.3s;
  transition-delay: 0.5s;
}
.button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03c8a8);
}
.button:hover span:nth-child(2) {
  top: 100%;
  transition: 1.3s;
  transition-delay: 0.25s;
}
.button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(90deg, transparent, #03c8a8);
}
.button:hover span:nth-child(4) {
  bottom: 100%;
  transition: 1.3s;
  transition-delay: 0.75s;
}
</style>