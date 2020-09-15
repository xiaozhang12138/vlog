import blog from '@/api/blog'
export default {
  data() {
    return {
      value: false,
      title: '',
      description: '',
      content: ''
    }
  },
  methods: {
    onCreate() {
      blog.createBlog({ title: this.title, 
        content: this.content, description: this.description, atIndex: this.value })
      .then(res =>{
        this.$message.success(res.msg)
        this.$router.push({ path: `/detail/${res.data.id}`})
      })
    }


  }
}