
import blog from '@/api/blog.js'


export default {
  data() {
    return {
      data: [],
      page:1,
      total:0,
      pagesize:0
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1 ;
    blog.getIndexBlogs({page: this.page})
      .then(res => {console.log(res.totalPage)
        this.data = res.data
        this.total = res.total
        this.page = res.page
        this.pagesize = res.data.length
        this.$router.push({ path: `/`,query:{ page: this.page}})
      })
  },
  methods: {
    onPageChang(newPage){
      blog.getIndexBlogs({page :newPage})
      .then(res => {
        this.data = res.data
        this.total = res.total
        this.page = res.page
        this.pagesize = res.data.length
        this.$router.push({ path: `/`,query:{ page: newPage}})
      })
    }
  }
}