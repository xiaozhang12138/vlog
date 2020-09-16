import blog from '@/api/blog'
export default {
  data() {
    return {
      blogId: null,
      value: false,
      title: '',
      description: '',
      content: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId:this.blogId }).then(res=>{
      console.log(res)
      this.title = res.data.title
      this.description = res.data.content
      this.content = res.data.content
      this.value = res.data.atIndex
    })
  },
  methods: {
    onEdit() {
      blog.updateBlog({blogId: this.blogId},{ title: this.title, 
        content: this.content, description: this.description, atIndex: this.value })
      .then(res =>{
        this.$message.success(res.msg)
        this.$router.push({ path: `/detail/${res.data.id}`})
      })
    }


  }
}