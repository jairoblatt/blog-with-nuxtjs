<template>
  <PostList :posts="loadedposts" />
</template>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedposts: [
          {
            id: "1",
            title: "This is my first post",
            text: "This is my first text",
            thumbnail:
              "https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
          },
          {
            id: "2",
            title: "This is my second post",
            text: "This is my second text",
            thumbnail:
              "https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
          }
        ]
      });
    }, 1500);
  },
  created(){
      this.$store.dispatch('setPosts', this.loadedposts)
      console.log(this.$store.getters.loadedposts)
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>