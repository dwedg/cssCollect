<template>
  <div class="view-box">
    <div class="show-box">
        <div class="line-bar"></div>
        <div class="layer"></div>
      <h1>落霞与孤鹜齐飞</h1>
    </div>
  </div>
</template>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
}
.show-box {
  position: relative;
  width: 650px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Nunito", sans-serif;
  height: max-content;
  font-size: 5em;
  letter-spacing: 0.1em;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 0 10px #03c8a8, 0 0 20px #03c8a8, 0 0 40px #03c8a8,
    0 0 80px #03c8a8, 0 0 120px #03c8a8;
}
.line-bar{
    position: absolute;
    top:0;
    left:0;
    width: 10px;
    height: 100%;
    border-radius: 10px;
    background:#fff;
    z-index:2;
    box-shadow: 0 0 10px #03c8a8, 0 0 20px #03c8a8, 0 0 40px #03c8a8,
    0 0 80px #03c8a8, 0 0 120px #03c8a8;
    animation: line 5s linear infinite;
}
@keyframes line {
    0%,5%{
        transform:scaleY(0) translateX(0);
    }
    10%{
        transform:scaleY(1) translateX(0);
    }
    90%{
        transform:scaleY(1) translateX(calc(650px - 10px));
    }
    95%,100%{
        transform:scaleY(0) translateX(calc(650px - 10px));
    }
}
.layer{
    position: absolute;
    left:0;
    top:0;
    width: 650px;
    height:100%;
    background:#000;
    animation: line 5s linear infinite;
}
@keyframes layer {
    0%,5%{
        transform:translateX(0);
    }
    10%{
        transform:translateX(0);
    }
    90%{
        transform:translateX(650px);
    }
    95%,100%{
        transform:translateX(650px);
    }
}
</style>