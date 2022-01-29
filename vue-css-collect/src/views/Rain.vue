<template>
    <div class="show-box" id="show_box">

    </div>
</template>
<script>
export default {
    data(){
        return{
            boxDom:null
        }
    },
    mounted(){
        this.boxDom = document.getElementById("show_box");
        setInterval(()=>{
           this.initRain();
        },100)
    },
    methods:{
        initRain:function(){
            let rain = document.createElement("div");
            rain.style.position= "absolute";
            rain.style.height = "60px";
            rain.style.width = "2px";
            rain.style.background="white";
            // rain.style.background="url(../assets/images/rain.png)";
            // rain.style.backgroundSize = "contain";
            rain.style.filter = "blur(1px)";
            rain.style.top = "0px";
            rain.style.left = Math.random()*850+"px";
            rain.style.opacity = parseInt(Math.random()*10)/10+"";
            this.boxDom.appendChild(rain);
            this.rainDown(rain);
        },
        rainDown:function(rain){
            let _rain = rain;
            let downTimer = setInterval(()=>{
                let height = parseInt(_rain.style.top);
                let k=1;
                k++;
                _rain.style.top = height+5*(k**2)+"px";

                if(parseInt(_rain.style.top)>=550){
                    clearInterval(downTimer);
                    this.boxDom.removeChild(_rain);
                }
            },30)
        }
    }
}
</script>
<style scoped>
    .show-box{
        width:850px;
        height:550px;
        background: url("../assets/images/rain_bg.jpeg");
        background-size:contain;
        overflow: hidden;
        position: relative;
        left: 0;
        top:0;
    }
</style>
