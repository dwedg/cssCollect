<template>
  <div class="view-box">
    <h1>红豆生南国 春来发几枝</h1>
    <div class="line">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="tick">
        <ellipse
          cx="10"
          cy="9"
          rx="187"
          ry="50"
          style="fill: transparent; stroke:#03c8a8; stroke-width: 10"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 40px;
  width: 250px;
  height: 100px;
  color: black;
  font-weight: bold;
}
.line {
  position: relative;
  left: 0px;
  top: -30px;
  width: 180px;
  height: 180px;
}
#tick{
    stroke-dasharray: 216px;
    stroke-dashoffset: 216px;
    animation: animate 3s ease-in-out infinite;
}
@keyframes animate {
    0%,50%{
        stroke-dashoffset:0px;
    }
    50%,100%{
        stroke-dashoffset:216px;
    }
}
</style>