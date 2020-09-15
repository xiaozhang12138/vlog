import marked from 'marked'
import detail from '@/api/blog'


export default {
  data() {
    return {
      title: '',
      description: '',
      rawContent: '',
      user: {},
      createdAt: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    detail.getDetail({ blogId: this.blogId })
      .then(res => {
        console.log(res.data)
        this.title = res.data.title
        this.description = res.data.description
        this.rawContent = res.data.content
        this.user = res.data.user
        this.createdAt = res.data.createdAt

      })
  },
  computed: {
    mardkown() {
      return marked(this.rawContent)
    }
  }

}
