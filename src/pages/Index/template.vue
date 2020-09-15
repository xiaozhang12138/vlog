<template>
  <div id="index">
    <section class="blog-posts">
      <router-link :to="`/detail/${data.id}`" class="item" v-for="data in data" :key="data.id">
        <figure class="avatar">
          <img :src="data.user.avatar" :alt="data.user.username" />
          <figcaption>{{data.user.username}}</figcaption>
        </figure>
        <h3>
          {{data.title}}
          <span>3天前</span>
        </h3>
        <p>{{data.description}}...</p>
      </router-link>
    </section>
    <section class="navigation ">
      <el-pagination layout="prev, pager, next" :total="total" :page-size = "pagesize"
      @current-change="onPageChang"></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
<style scoped lang="less" src="@/assets/common.less"></style>
