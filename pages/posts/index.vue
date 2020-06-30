<template>
    <PostList/>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default { 
    components:{
        PostList
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