<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.avatar" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for = "data in blogs" :key = 'data.id' :to="`/detail/${data.id}`">
        <div class="date">
          <span class="day">{{spliDate(data.createdAt).data}}</span>
          <span class="month">{{spliDate(data.createdAt).month}}月</span>
          <span class="year">{{spliDate(data.createdAt).year}}年</span>
        </div>
        <h3>{{data.title}}</h3>
        <p>{{data.description}}...</p>
      </router-link>
      <section class="navigation ">
      <el-pagination layout="prev, pager, next" :total="total" :page-size = "pagesize"
      @current-change="onPageChang"></el-pagination>
      </section>
    </section>
    
  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
<style src="./template.less" lang="less"></style>
