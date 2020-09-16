import blog from '@/api/blog.js'

export default {
  data() {
    return {
      page: 1,
      total: 1,
      blogs: [],
      user: {},
      total:0,
      pagesize: 10
    }
  },
  created() {
    this.userId = this.$route.params.blogId
    this.page = parseInt(this.$route.query.page) || 1 ;
    blog.getBlogsByUserId(this.userId, { page: this.page })
      .then(res => {
        console.log(res)
        this.total = res.total;
        this.blogs = res.data;
        this.pagesize = res.data.length
        if (res.data.length > 0) {
          this.user = res.data[0].user
        }
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
      blog.getBlogsByUserId(this.userId, { page: newPage })
        .then(res => {
          this.total = res.total;
          this.blogs = res.data;
          if (res.data.length > 0) {
            this.user = res.data[0].user
          }
          this.$router.push({ path: `/user${this.userId}`,query:{ page: newPage}})
        })
    }
  }
}