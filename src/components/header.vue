<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <!--引入isLogin 通过 v-if 判断是否显示。-->
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>避坑博客学习历程</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">Let's share</router-link></h1>
      <router-link to="/create">
      <i class="edit el-icon-plus"></i>
      </router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username" />
        <ul>
          <li>
             <router-link to="/">回到首页</router-link>
          </li>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          
          <li>
            <a @click="onLogout">注销</a>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>

//注册这些组件
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    //header 需要判断 isLogin 的值
    return {};
  },
  computed: {
    //这里引入并注册 isLogin
    ...mapGetters(["isLogin", "user"]),
  },
//组件生命周期：做什么事情，发送请求拉取数据，组件数据拿到的时候，做的一些处理判断，比如放到data里面
  created() {
    this.checkLogin();
  },

  methods: {
    //在异步操作中，把这两个方法拿过来
    ...mapActions(["checkLogin", "logout"]),

    onLogout() {
      this.logout().then(()=>{
        this.$router.push('/')
      })
      
    }
  }
};
</script>


<style lang="less">
//引入背景色以及通用颜色
@import "../assets/base.less";
@import "../assets/common.less";
//未登录状态的css
header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}
//登陆状态的css
header.login {
  display: flex;
  align-items: center;
  background: @bgColor;

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;

    a{
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;
      width: 80px;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;
        width: 100%;

        &:hover {
          background-color: #eaeaea;
        }
      }
      
    }
&:hover ul{
      display: block;
    }
  }
}
</style>