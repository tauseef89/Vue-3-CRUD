<template>
  <div class="sidebar">
    <ul class="side-menu">
        <li><router-link :to="{ name: 'Products'}">Products</router-link></li>
        <li><router-link :to="{ name: 'ProductCreate'}">Add Product</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>
