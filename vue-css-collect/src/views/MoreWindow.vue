<template>
    <div class="view-box">
        <div class="show-box">
            <ul>
                <li>
                    <img src="../assets/images/more_window/1.jpeg" alt="">
                </li>
                <li>
                    <img src="../assets/images/more_window/2.jpeg" alt="">
                </li>
                <li>
                    <img src="../assets/images/more_window/3.jpeg" alt="">
                </li>
                <li>
                    <img src="../assets/images/more_window/4.jpeg" alt="">
                </li>
                <li>
                    <img src="../assets/images/more_window/5.jpeg" alt="">
                </li>
            </ul>
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
.show-box {
  width: 550px;
  height: 700px;
  overflow: hidden;
  cursor: pointer;
}
ul {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
li {
  position: relative;
  float: left;
  width: 110px;
  height: 700px;
  list-style: none;
  transition: all 1s;
}
li::after {
  content: "Dan";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 450px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  color: rgb(243, 230, 230);
  background-color: rgba(48, 46, 46, 0.5);
}
img {
  height: 100%;
  width: 450px;
}
ul:hover li {
  width: 25px;
}
ul li:hover {
  width: 450px;
}
</style>