<template>
    <div class="view-box">
        <div class="wrapper">
            <ul class="roller">
                <li></li>
                <li></li>
                <li>LNG</li>
                <li>RNG</li>
                <li>V5</li>
                <li>WBG</li>
                <li>BLG</li>
                <li>JDG</li>
                <li>TES</li>
                <li>FPX</li>
                <li>OMG</li>
                <li>TT</li>
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
.wrapper {
  width: 500px;
  height: 340px;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(3, 200, 168, .3) 0%, rgba(3, 200, 168, 0) 25%, rgba(3, 200, 168, 0) 75%, rgba(3, 200, 168, .3) 100%);
  box-shadow: inset 0px 0px 12px rgba(3, 200, 168, .2);
  border-radius: 12px;
}

.wrapper::after {
  content: '';
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(to bottom, rgba(3, 200, 168, .7) 0%, rgba(3, 200, 168, .2) 40%, rgba(3, 200, 168, .3) 50%, rgba(3, 200, 168, .9) 100%);
  box-shadow: 0px 4px 12px rgba(3, 200, 168, .8);
  border-top: 1px solid rgba(3, 200, 168, .8);
  border-bottom: 1px solid rgba(3, 200, 168, .8);
  pointer-events: none;
}
.roller {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
}

.roller li {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(1, 20, 17);
  scroll-snap-align: start;
}
.roller li:last-child {
  margin-bottom: 160px;
}
</style>