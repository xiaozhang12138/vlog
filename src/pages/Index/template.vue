<template>
  <div id="index">
    <section class="blog-posts item" v-for="data in data" :key="data.id" >
      <router-link :to="`/user/${data.user.id}`">
        <figure class="avatar">
          <img :src="data.user.avatar" :alt="data.user.username" />
          <figcaption>{{data.user.username}}</figcaption>
        </figure>
        </router-link>
        <router-link :to="`/detail/${data.id}`"  >
        <h3>
          {{data.title}}
          <span>{{friendlyDate(data.createdAt)}}</span>
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
