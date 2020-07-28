import axios from 'axios'
import Vue from "vue";

import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

console.log("Vue cookie",Vue.$cookies.get('token') || undefined)
const axiosInstance = axios.create({
    baseURL:"https://ak11.herokuapp.com",
    headers: { authorization: Vue.$cookies.get('token') || undefined }
})


export default axiosInstance