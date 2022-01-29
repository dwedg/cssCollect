<template>
  <div class="view-box">
    <div class="show">
      <div class="water"></div>
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
.show {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid rgb(246, 247, 248);
  box-shadow: 0 0 0 3px rgb(14, 223, 188);
}
.water {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(3, 200, 168);
  border-radius: 50%;
  overflow: hidden;
}
.water::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 40%;
  background-color: rgb(240, 228, 228);
  animation: one 5s linear infinite;
}
@keyframes one {
  0% {
    transform: translate(-50%, -65%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -65%) rotate(360deg);
  }
}
.water::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 20%;
  background-color: rgb(240, 228, 228, 0.2);
  animation: two 5s linear infinite;
}
@keyframes two {
  0% {
    transform: translate(-50%, -65%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -65%) rotate(360deg);
  }
}
</style>