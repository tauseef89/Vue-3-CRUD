<template>
 <Nav />
  <div class="wrraper">
    <div class="left-content">
      <SideBar />
    </div>
    <div class="right-content">
      <router-view />
   </div>               
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import SideBar from '@/components/SideBar'
export default {
  name: 'Admin',
  components: {Nav, SideBar}
}
</script>

<style>

</style>