<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm
      :post="loadedPost"
       />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm
  },
  data: () => ({
      loadedPost:{
          author: 'Maximilian',
          title: 'My awesome Post',
          content: 'Super amazing, thanks for that!',
          thumbnailLink: 'https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp'
      }
  })
};
</script>