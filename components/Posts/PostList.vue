<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="This is a teste"
      text="This is my text for the new post"
      thumbnail="https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="This is my second post"
      text="This is my second text for the new post"
      thumbnail="https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="This is my trhe post"
      text="This is my text for the new and i don't know post"
      thumbnail="https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
    />
  </section>
</template>

<script>
import PostPreview from "./PostPreview";
export default {
    components:{
      PostPreview
    },

    props:{
      isAdmin:{
        type: Boolean,
        default: false
      }
    }
}
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