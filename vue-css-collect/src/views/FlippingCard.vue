<template>
    <div class="view-box">
        <div class="card" id="one_card">
            <div class="cover"></div>
            <div class="back"></div>
        </div>
        <div class="card" id="two_card">
<div class="cover"></div>
            <div class="back"></div>
        </div>
    </div>
</template>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card{
    position: relative;
    width:350px;
    height: 450px;
    perspective: 1000px;
}
.cover,.back{
    position: absolute;
    width: 100%;
    height: 100%;
    /* 翻转是隐藏背面 */
    backface-visibility: hidden; 
    transition:transform 0.3s ease-in-out;
}
#one_card .cover{
    background-image: url('../assets/images/flipping_card/1.jpeg');
    transform: rotatey(0deg);
}
#one_card:hover .cover{
    transform: rotatey(180deg);
}
#one_card .back{
    background-image: url('../assets/images/flipping_card/2.jpeg');
    transform: rotatey(-180deg);
}
#one_card:hover .back{
    transform: rotatey(0deg);
}
#two_card .cover{
    background-image: url('../assets/images/flipping_card/4.jpeg');
    transform: rotatey(0deg);
    background-size:cover;
}
#two_card:hover .cover{
    transform: rotatey(180deg);
}
#two_card .back{
    background-image: url('../assets/images/flipping_card/3.jpeg');
    transform: rotatey(-180deg);
    background-size:cover;
}
#two_card:hover .back{
    transform: rotatey(0deg);
}
</style>