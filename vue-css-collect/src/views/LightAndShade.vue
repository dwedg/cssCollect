<template>
    <div class="view-box" style="--slide:500">
        <div class="compare-box">
            <input type="range" class="slider" min="1" max="1000" value="500"
            oninput="this.parentNode.style.setProperty('--slide',`${this.value}`)">
        </div>
    </div>
</template>
<style scoped>
    .view-box{
        width: 100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .compare-box{
        position: relative;
        width: 600px;
        height:400px;
        overflow: hidden;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, .15);
        border-radius: 5px;
    }
    .compare-box::before,
    .compare-box::after{
        content: '';
        position: absolute;
        left:0;
        top:0px;
        display:block;
        width: inherit;
        height: inherit;
        background:url("../assets/images/meigui.jpeg");
        background-size: cover;
    }
    .compare-box::before{
        /* 设置滤镜 */
        filter: grayscale(100%);
    }
    .compare-box::after{
        /* 裁剪矩形 */
        -webkit-clip-path:inset(0 0 0 calc(var(--slide)/10*1%));
        clip-path: inset(0 0 0 calc(var(--slide)/10*1%));
    }
    .slider{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background:transparent;
        /* 去除默认样式 */
        -webkit-appearance: none;
        appearance: none;
        outline:none;
        z-index:2;
    }
    /* 设置滑块样式 */
    .slider::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 400px;
        background:#03c8a8;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
        border-radius: 2px;
        cursor: ew-resize;
    }
</style>