<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedpost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">Las updatade on {{loadedpost.updatedDate}}</div>
        <div class="post-detail">Writeen by {{loadedpost.author}}</div>
      </div>
      <p class="post-content">{{loadedpost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:feedback@my-awesome-domain.com"
        ></a>feedback@my-awesome-domain.com
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedpost: {
          id: "1",
          title: "This is my first post (ID: "+ context.router.params.id +")",
          text: "This is my first text",
          author: 'Maximilian',
          updatedDate: new Date(),
          content:'Some dummby text which is definitely not the preview',
          thumbnail:
            "https://organizacoespower.com.br/static/img/hero-right.00e12ba.webp"
        }
      });
    }, 1000);
  }
};
</script>
<style scoped>
posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>