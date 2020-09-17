import blog from '@/api/blog.js'

import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      page: 1,
      total: 1,
      blogs: [],
      total:0,
      pagesize: 10
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1 ;
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        this.total = res.total;
        this.blogs = res.data;
        this.pagesize = res.data.length
        
      })
  },
  methods: {
    spliDate(dataStr) {
      let dataObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        data: dataObj.getDate(),
        month: dataObj.getMonth() + 1,
        year: dataObj.getFullYear()
      }
    },
    onPageChang(newPage){
      blog.getBlogsByUserId(this.user.id, { page: newPage })
        .then(res => {
          this.total = res.total;
          this.blogs = res.data;
          this.$router.push({ path: `/my`,query:{ page: newPage}})
        })
    },
   async onDelete(blogId){
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
           })
      await blog.deleteBlog({blogId})
      this.$message.success( '删除成功!');
      this.blogs = this.blogs.filter(blog => blog.id != blogId)
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}