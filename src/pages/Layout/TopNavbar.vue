<template>
  <Loader :background="true" v-if="loading" />
  <md-toolbar
    v-else
    md-elevation="0"
    class="md-transparent"
    style="background-color:#0d1b2a !important;"
  >
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title" style="color:white !important;">
          <span
            class="icon mr-1"
            v-if="
              this.$route.name == 'dashboard' ||
                this.$route.name == 'EmployeeDashboard'
            "
            ><img src="https://img.icons8.com/color/48/000000/hard-working.png"
          /></span>
          <span class="icon mr-2" v-else-if="this.$route.name == 'joblist'"
            ><img
              style="height:2em"
              src="https://img.icons8.com/color/48/000000/tasklist.png"
            />
          </span>
          <span
            class="icon mr-1"
            v-else-if="this.$route.name == 'Item description'"
            ><img
              src="https://img.icons8.com/color/48/000000/add-property-1.png"
          /></span>
          <span
            class="icon mr-1"
            v-else-if="this.$route.name == 'Compliance Form'"
          >
            <img src="https://img.icons8.com/color/48/000000/inspection.png" />
          </span>
          <span class="icon mr-1" v-else-if="this.$route.name == 'approval'"
            ><img
              src="https://img.icons8.com/color/48/000000/test-partial-passed.png"
          /></span>
          <span
            class="icon mr-1"
            v-else-if="this.$route.name == 'engineerDashboard'"
            ><img src="https://img.icons8.com/color/48/000000/engineer.png"
          /></span>
          <span
            class="icon mr-2"
            v-else-if="this.$route.name == 'DataWarehousing'"
            ><img src="https://img.icons8.com/color/48/000000/garage-closed.png"
          /></span>
          <span class="icon mr-2" v-else-if="this.$route.name == 'engineertask'"
            ><img src="https://img.icons8.com/color/48/000000/maintenance.png"
          /></span>
          <span
            class="icon mr-1"
            v-else-if="this.$route.name == 'searchingOrders'"
            ><img src="https://img.icons8.com/color/48/000000/search.png"
          /></span>

          {{ $route.name }}
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          
          <md-list>
            <md-list-item href="/">
              <i class="material-icons" style="color:white !important;"
                >dashboard</i
              >
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <!-- <md-list-item href="#/notifications" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="hidden-lg hidden-md">Notifications</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">Mike John responded to your email</a></li>
                  <li><a href="#">You have 5 new tasks</a></li>
                  <li><a href="#">You're now friend with Andrew</a></li>
                  <li><a href="#">Another Notification</a></li>
                  <li><a href="#">Another One</a></li>
                </ul>
              </drop-down>
            </md-list-item>-->

            <!-- <li class="md-list-item">
              <a
                href="#/notifications"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification">5</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li> -->

            <md-menu md-size="small" md-align-trigger>
              <button blue md-menu-trigger id="profile">
                <i class="material-icons">person</i>
                <p v-b-toggle.collapse-1 class="hidden-lg hidden-md">Profile</p>
              </button>

              <md-menu-content>
                <md-menu-item>Change Profile</md-menu-item>
                <md-menu-item>Change Password</md-menu-item>
                <md-menu-item @click="logout">Logout</md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import Axios from '@/methods/axiosInstance.js'

import Loader from '@/pages/Layout/Loader'

export default {
  data() {
    return {
      selectedEmployee: null,
      loading: false,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone'
      ]
    }
  },
  components: {
    Loader
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    async logout() {
      try {
        this.loading = true
        const res = await Axios().post('/logout')
        if (res.status === 200) {
          console.log('logged-out')
          this.$cookies.remove('token')
          this.$router.push({ name: 'login' })
        }
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.md-title {
  text-transform: capitalize;
}
#profile {
  padding: 12px 8px;
  background: transparent;
}
#profile .material-icons {
  color: seagreen;
}
</style>
