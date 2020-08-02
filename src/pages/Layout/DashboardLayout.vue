<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-if="user === 'employee'" to="/superintendent">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link v-if="user !== 'employee'" to="/engineerDashboard">
        <md-icon>dashboard</md-icon>
        <p>Engineer Dashboard</p>
      </sidebar-link>
      <sidebar-link v-if="user === 'employee'" to="/dataWarehousing">
        <md-icon>house</md-icon>
        <p>Data Warehouse</p>
      </sidebar-link>
      <sidebar-link v-if="user === 'employee'" to="/searchingorders">
        <md-icon>search</md-icon>
        <p>Search Orders</p>
      </sidebar-link>
      <sidebar-link to="/monitor">
        <md-icon>monitor</md-icon>
        <p>Monitor</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <!--
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      -->
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from './TopNavbar.vue'
//import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

import Axios from '@/methods/axiosInstance.js'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  },
  data() {
    return {
      user: 'employee'
    }
  },
  async mounted() {
    this.usertype()
  },
  methods:{
    async usertype()  {
      const { data } = await Axios().get('/typeofuser')
      this.user = data.typeofUser
    }
  }
}
</script>
<style scoped>
.main-panel {
  min-height: 100vh;
}
p {
  color: white;
}
</style>
