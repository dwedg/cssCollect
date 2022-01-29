<template>
    <div class="view-box">
        <div id="container">
            <input type="checkbox" id="read-more">
            <label for="read-more"></label>
            <div id="content">
                <!-- <div class="p-box"> -->
                <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
                <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
                <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
                <!-- <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p> -->
                <!-- <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
                <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p>
                <p>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
                转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。</p> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isChecked:false
        }
    }
}
</script>
<style scoped>
.view-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
}
#container{
    position: relative;
    width:500px;
    height:300px;
    /* margin: auto; */
    overflow:hidden;
    border-radius: 10px;
    overflow: auto;
}
#content{
    padding: 30px;
    background-color: #fff;
   height: auto;
    font-size:1.4rem;
    line-height:1.5rem;
    color:#333;
    overflow: hidden;
}
.p-box{
    height:400px;
    overflow:hidden;
}
p{
    margin:2px 20px;
}
#read-more{
    display: none;
}
/* input的ID为read-more紧接着的这个label */
#read-more + label{
    display: block;
    position: absolute;
    width: 100%;
    height: 150px;
    bottom:0;
    left:0;
    background-image: linear-gradient(to bottom,rgba(255,255,255,0) 0%,#fff 70% );
    pointer-events: none;
}
#read-more + label::after{
    content: '阅读更多';
    display:inline-block;
    position:absolute;
    bottom:20px;
    left:50%;
    transform: translateX(-50%);
    color: white;
    font-size:1.2rem;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2x 3px rgba(0, 0, 0, .2);
    background-color: #6acab7;
    cursor:pointer;
    pointer-events: auto;
}
#read-more+label:hover::after{
    background-color: #03c8a0;
}
#read-more:checked ~ #content{
    height:auto;
   overflow: auto;
}
#read-more:checked #read-more + label::after{
    display: none;
}
</style>