<template>
  <div id="app">
    <h1 class="page-title">样式收集</h1>
    <div class="nav">
      <ul class="nav-list">
        <li
          v-for="(item, index) in list_data"
          class="style-item"
          :class="{ selected:styleIsActive }"
          :key="index"
        >
          <router-link
            :to="item.css_path"
            active-class="link-active"
            class="link"
            >{{ item.style_name }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="show-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import NavList from "./views/NavList.vue";
import { get_css_list } from "./assets/js/css_list.js";
export default {
  name: "App",
  components: {
    // NavList
  },
  data() {
    return {
      list_data: [],
      styleIsActive:false
    };
  },
  created() {
    this.list_data = get_css_list();
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color: black;
  font-size:20px;
  width: 100%;
  height: 30px;
}
a{
  outline: none;
  text-decoration: none;
}
.nav{
  float:left;
  width: 20%;
  height: 85vh;
}
.show-area{
  width:70%;
  height: 85vh;
  border: 1px red solid;
  float:left;
  margin-left:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.nav-list {
  width: 100%;
  background-color: #f8f8f8;
  /* overflow: hidden; */
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.style-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: black;
  font-size: 25px;
  padding: 3px;
  margin-top: 5px;
}
.style-item.selected {
  border-left: 3px solid #03c8a8;
}
.link {
  display: block;
  width: 90%;
  height: 100%;
  text-align: left;
  border-left: 6px solid transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}
.link:hover {
  color: white;
  background-image: linear-gradient(315deg, #89d8d3, #03c8a8 74%);
  border-left: 6px solid #03c8a8;
}
/* 路由a标签激活样式 也就是列表选中样式*/
.link-active.link {
  color: black;
  border-left: 6px solid #03c8a8;
  border-radius: 2px;
}
.link-active.link:hover {
  color: white;
  border-left: 6px solid #03c8a8;
}
ul,li,h1,a{
  padding: 0px;
  margin: 0px;
}
a{
  list-style: none;
}
.nav-list::-webkit-scrollbar-thumb{
  background:#03c8a8;
  /* width: 10px; */
  border-radius:10px;
  /* background-image: linear-gradient(315deg, #89d8d3, #03c8a8 74%); */
}
</style>
