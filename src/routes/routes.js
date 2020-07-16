
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Login from "@/pages/Login.vue"


// import Dashboard from "@/pages/Dashboard.vue";
import TableList from '@/pages/TableList.vue'
import itemDescription from '@/pages/itemDescription.vue'
import ComplianceForm from '@/pages/Complianceform.vue'
import ApprovalForm from '@/pages/ApprovalForm.vue'
import engineerDashboard from '@/pages/engineerDashboard.vue'
// import Typography from "@/pages/Typography.vue";
// import Icons from "@/pages/Icons.vue";
// import Maps from "@/pages/Maps.vue";
// import Notifications from "@/pages/Notifications.vue";
// import UserProfile from "@/pages/UserProfile.vue";

const routes = [{
  path:"/",
  component: Login,
  name:'login'
},{
  path: "/dashboard",
  name:"dashboard",
  component: DashboardLayout,
  redirect: "/joblist",

  children: [{
      path: '/joblist',
      name: 'joblist',
      component: TableList
    },
    {
      path: '/joblist/:id',
      name: 'Item description',
      component: itemDescription
    },
    {
      path: '/complianceform/:id',
      name: 'Compliance Form',
      component: ComplianceForm
    }, {
      path: '/approval/',
      name: 'approval',
      component:ApprovalForm
    },
    {
      path: '/engineerDashboard',
      name: 'engineerDashboard',
      component: engineerDashboard
    }
  ]
}]

export default routes