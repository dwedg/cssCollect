<template>
    <div class="view-box">
        <div id="show_box" ref="showBox">
            <canvas id="myCanvas" ref="canvas" @mousemove="move" @mouseout="out"></canvas>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:66,//小球数量
            ball_arr:[],//小球数组
            ctx:null,//画布对象
            width:0,
            height:0,
            x:0,//x轴坐标
            y:0,//y/轴坐标
            active:false,//默认鼠标
        }
    },
    mounted(){
        let dom = this.$refs.canvas;
        this.ctx = dom.getContext('2d');
        this.width = this.$refs.showBox.clientWidth;
        this.height = this.$refs.showBox.clientHeight;
        dom.width = this.width;
        dom.height = this.height;
        this.init();
        // this.ctx.clearRect(0,0,this.width,this.height);
        // this.draw();
         setInterval(()=>{
              this.ctx.clearRect(0,0,this.width,this.height);
              this.draw();
              this.updates();
        },50)
    },
    methods:{
        init(){
            this.ball_arr = [];
            //x小球在画布的定位，dx==小球移动的距离，上下左右跳动
            for(let i=0;i<this.num;i++){
                this.ball_arr.push({
                    x:10+Math.random()*(this.width-20),
                    y:10+Math.random()*(this.height-20),
                    r:10,
                    dx:10*Math.random()-5,
                    dy:10*Math.random()-5,
                    color:'rgba(3,200,168,.6)'
                })
            }
        },
        resizeCanvas(){
            
        },
        draw(){
            for(let k=0;k<this.num;k++){
                let ball = this.ball_arr[k];
                this.ctx.beginPath();
                this.ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
                this.ctx.fillStyle = ball.color;
                this.ctx.fill();
                //如果这个小球在y轴或者x轴距离小于150的球连接起来
                for(let j=0;j<this.num;j++){
                    let temp_ball = this.ball_arr[j];
                    if(Math.abs(ball.x-temp_ball.x)<150&&Math.abs(ball.y-temp_ball.y)<150){
                        this.ctx.beginPath();
                        this.ctx.moveTo(ball.x,ball.y);
                        if(Math.abs(ball.x-this.x)<150&&Math.abs(ball.y-this.y)<150&&this.active){
                           this.ctx.lineTo(this.x,this.y);
                        }
                        this.ctx.lineTo(temp_ball.x,temp_ball.y); 
                        this.ctx.closePath();
                        let tm = Math.sqrt(Math.abs(ball.x-temp_ball.x)*Math.abs(ball.x-temp_ball.x) + Math.abs(ball.y-temp_ball.y)*Math.abs(ball.y-temp_ball.y)) / 212;
                        this.ctx.strokeStyle = `rgba(3, 200, 168,${1-tm})`;
                        // this.ctx.strokeStyle = `rgb(3, 200, 168)`;
                        this.ctx.stroke();
                       /*  ctx.fill(); */
                    }

                }
            }
        },
        updates(){
            var arr = this.ball_arr;
            var xZou = this.x;
            var yZou = this.y;
            for(let i=0;i<this.num;i++){
                if(Math.abs(arr[i].x-xZou)<150&&Math.abs(arr[i].y-yZou)<150&&this.temp){
                    arr[i].x += -(arr[i].x-xZou)/(10*Math.random()+20);
                    arr[i].y += -(arr[i].y-yZou)/(10*Math.random()+20);
                }
                else{
                arr[i].x += arr[i].dx; 
                arr[i].y += arr[i].dy; 
                }
                if(arr[i].x<=arr[i].r || arr[i].x >= (this.width - arr[i].r) ){
                    arr[i].dx = -arr[i].dx;
                }
                if(arr[i].y<=arr[i].r || arr[i].y >= (this.height - arr[i].r) ){
                    arr[i].dy = -arr[i].dy;
                }
            }
        },
        move(e){
            this.x = e.clientX-263;
            this.y = e.clientY-90;
            this.active = true;
        },
        out(){
            this.active = false;
        }
    }
}
</script>
<style scoped>
.view-box{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
#show_box{
    position:relative;
    width:100%;
    height:100%;
}
/* #myCanvas{
    width: 100%;
    height: 100%;
} */
</style>