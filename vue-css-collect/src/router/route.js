import {createRouter,createWebHashHistory} from 'vue-router'
import Rain from '../views/Rain.vue'
import Smoke from '../views/Smoke.vue'
import PaoMaDeng from '../views/PaoMaDeng.vue'
import CirclingMotion from '../views/CirclingMotion.vue'
import ShineButton from '../views/ShineButton.vue'
import DrawCurve from '../views/DrawCurve.vue'
import LightAndShade from '../views/LightAndShade.vue'
import TextShow from '../views/TextShow.vue'
import BallCollide from '../views/BallCollide.vue'
import LoadWater from '../views/LoadWater.vue'
import Bubble from '../views/Bubble.vue'
import Charge from '../views/Charge.vue'
import ShineText from '../views/ShineText.vue'
import ReadMore from '../views/ReadMore.vue'
import MoreWindow from '../views/MoreWindow.vue'
import FlippingCard from '../views/FlippingCard.vue'
import ScrollSnap from '../views/ScrollSnap.vue'
const routes = [
    {
        path:"/",
        component:Smoke
    },
    {
        path:"/Smoke",
        component:Smoke
    },
    {
        path:"/PaoMaDeng",
        component:PaoMaDeng
    },
    {
        path:"/CirclingMotion",
        component:CirclingMotion
    },
    {
        path:"/ShineButton",
        component:ShineButton
    },
    {
        path:"/DrawCurve",
        component:DrawCurve
    },
    {
        path:"/Rain",
        component:Rain
    },
    {
        path:"/LightAndShade",
        component:LightAndShade
    },
    {
        path:"/TextShow",
        component:TextShow
    },
    {
        path:"/BallCollide",
        component:BallCollide
    },
    {
        path:"/LoadWater",
        component:LoadWater
    },
    {
        path:"/BallCollide",
        component:BallCollide
    },
    {
        path:"/Bubble",
        component:Bubble
    },
    {
        path:"/Charge",
        component:Charge
    },
    {
        path:"/ShineText",
        component:ShineText
    },
    {
        path:"/ReadMore",
        component:ReadMore
    },
    {
        path:"/MoreWindow",
        component:MoreWindow
    },
    {
        path:"/FlippingCard",
        component:FlippingCard
    },
    {
        path:"/ScrollSnap",
        component:ScrollSnap
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;