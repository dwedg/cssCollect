<template>
    <section class="text-area">
        <p class="text">
            <span v-for="(item,index) in list_text" @mouseover="addActive"  :key='index'>{{item}}</span>
        </p>
        <!-- <p class="text">You are beautiful, but you are empty. One could not die for you. To be sure, an ordinary passer-by would think that my rose looked just like you – the rose that belongs to me. But in herself alone she is more important than all the hundreds of you other roses: because it is she that I have watered; because it is she that I have put under the glass globe; because it is she that I have sheltered behind the screen; because it is she that I have killed the caterpillars (except the two or three that we saved to become butterflies); because it is she that I have listened to, when she grumbled, or boasted, or even sometimes when she said nothing. Because she is my rose.</p> -->
    </section>
    <!-- <div class="tips"></div> -->
</template>
<script>
export default {
    data(){
        return{
            // text:"You are beautiful, but you are empty. One could not die for you. To be sure, an ordinary passer-by would think that my rose looked just like you – the rose that belongs to me. But in herself alone she is more important than all the hundreds of you other roses: because it is she that I have watered; because it is she that I have put under the glass globe; because it is she that I have sheltered behind the screen; because it is she that I have killed the caterpillars (except the two or three that we saved to become butterflies); because it is she that I have listened to, when she grumbled, or boasted, or even sometimes when she said nothing. Because she is my rose.",
            text:"鼠标移入该文字处，查看效果",
            list_text:[],
            isBlock:false,
        }
    },
    created(){
        let len = this.text.length;
        for(let i = 0;i<len;i++){
            this.list_text.push(this.text[i]);
        }
    },
    mounted(){
        // const textDom = document.querySelector(".text");
        // //每个非空的文本用span标签包裹起来
        // textDom.innerHTML = textDom.textContent.replace(/\S/g,"<span>$&</span>");
        // const letters = document.querySelectorAll('span');
        // for(let i=0;i<letters.length;i++){
        //     letters[i].addEventListener("mouseover",function(){
        //         letters[i].classList.add("active")
        //     })
        // }
        
    },
    methods:{
        addActive:function(e){
            let context = e.target.innerText;
            if(context!==" "){
                e.target.className ="active";
            }
        }
    }
    
}
</script>
<style scoped>
.text-area{
    position: relative;
    display: flex;
    justify-content: center;
    /* width: 600px; */
    align-items: center;
    min-height: 70vh;
    background: url("../assets/images/meigui.jpeg");
    background-size:cover;
    background-repeat: no-repeat;
    overflow: hidden;
}
.text-area .text{
    position: relative;
    color: #fff;
    margin: 30px;
    max-width:635px;
   /* 文本双击时，文本会被选取或者高亮显示*/ 
   -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size:3em;
}
.text-area .text span{
    position: relative;
    cursor: pointer;
    display: inline-block;
}
.text-area .text span.active{
    animation: smoke 2s linear forwards;
    transform-origin: bottom;
    /* display: inline-block; */
}
@keyframes smoke {
    0%
    {
        opacity: 1;
        filter:blur(0);
        transform: translateX(0) translateY(0) rotate(0deg) scale(1);
    }
    50%
    {
        opacity: 1;
        pointer-events: none;
    }
    100%
    {
        opacity: 0;
        filter:blur(20px);
        transform: translateX(300px) translateY(-300px) rotate(072deg) scale(4);
    }
}
</style>