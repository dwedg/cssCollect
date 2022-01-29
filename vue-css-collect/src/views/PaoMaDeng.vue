<template>
  <div class="view-box">
    <div class="paomadeng-show-box">
      <span id="span_0"></span>
      <span id="span_1"></span>
      <span id="span_2"></span>
      <span id="span_3"></span>
      <div class="content">
        <h1>小王子</h1>
        <p>使沙漠显得美丽的，是它在什么地方藏着一口水井。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.view-box{
    width:100%;
    height: 100%;
    background:cadetblue;
    overflow: hidden;
}
.paomadeng-show-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  font-size: 2em;
  background: #001e2d;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}
.paomadeng-show-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  pointer-events: none;
}
.paomadeng-show-box:hover::before {
  left: -50%;
  transform: skewX(-5deg);
}
.paomadeng-show-box .content {
  position: absolute;
  top: 15px;
  right: 15px;
  left: 15px;
  bottom: 15px;
  border: 2px solid #ffeb3b;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
h1 {
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 20px;
  height: max-content;
}
.paomadeng-show-box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
.paomadeng-show-box span:nth-child(1) {
  transform: rotate(0deg);
  /* left:-50%; */
}
.paomadeng-show-box span:nth-child(2) {
  transform: rotate(90deg);
  /* top:-50%; */
}
.paomadeng-show-box span:nth-child(3) {
  transform: rotate(180deg);
  /* left:50%; */
}
.paomadeng-show-box span:nth-child(4) {
  transform: rotate(270deg);
  /* top:50%; */
}
.paomadeng-show-box span:nth-child(2)::before,
.paomadeng-show-box span:nth-child(4)::before {
  /* 左右延时2s执行 */
  animation-delay: -2s;
}
.paomadeng-show-box span::before {
  content: ' ';
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height: 2px;
  /* background: #03c8a8; */
  /* background: #0093ff; */
  background: white;
  animation: animate 4s linear infinite;
}
@keyframes animate {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1%{
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>