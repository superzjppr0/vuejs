<template>
  <nav class="categories-menu">
    <ul class="categories-list">
      <li v-for="category in categories" :key="category.id" class="category-item">
        <a :href="`/category/${category.attributes.slug}`">{{ category.attributes.Title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getCategories } from '@/services/api';

export default {
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    const response = await getCategories();
    this.categories = response.data.data;
  },
};
</script>

<style scoped>
.categories-menu {
  background-color: #800000; /* Dark red color similar to VNExpress */
  padding: 10px 0;
}

.categories-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  margin: 0 15px;
}

.category-item a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.category-item a:hover {
  text-decoration: underline;
}
</style>
