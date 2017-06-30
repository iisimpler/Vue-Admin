import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import menuList from "../pages/sys/menu.vue";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";
import login from "../pages/login.vue";
import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
// Routes
const routes = [
  {path: '/login', component: login},
  {
    path: '', component: app, children: [
    {path: '/', component: dashboard},
    {path: '/index', component: dashboard},

    {path: '/staffManagement', component: NotFoundView},
    {path: '/staffManagement/staffInformatinManagement', component: NotFoundView},
    {path: '/staffManagement/notices', component: NotFoundView},

    {path: '/careManagement/careManagement', component: NotFoundView},

    {path: '/goodsManagement', component: NotFoundView},
    {path: '/goodsManagement/goodsSearch', component: NotFoundView},
    {path: '/goodsManagement/purchaseHistory', component: NotFoundView},
    {path: '/goodsManagement/storageHistory', component: NotFoundView},
    {path: '/goodsManagement/useHistory', component: NotFoundView},
    {path: '/goodsManagement/goodsMaintenance', component: NotFoundView},

    {path: '/serviceTypeManagement', component: NotFoundView},
    {path: '/serviceTypeManagement/serviceTypeManagement', component: NotFoundView},
    {path: '/serviceTypeManagement/purchaseHistory', component: NotFoundView},
    {path: '/serviceTypeManagement/storageHistory', component: NotFoundView},
    {path: '/serviceTypeManagement/useHistory', component: NotFoundView},

    {path: '/financialManagement', component: NotFoundView},
    {path: '/financialManagement/earningsRecord', component: NotFoundView},
    {path: '/financialManagement/expenditureRecord', component: NotFoundView},
    {path: '/financialManagement/financialStatements', component: NotFoundView},

    {path: '/homeService', component: NotFoundView},
    {path: '/homeService/orderList', component: NotFoundView},

    {path: '/resetPwd', component: resetPwd},
    {path: '/sys/menuList', component: menuList},
    {path: '/sys/roleList', component: role},
    {path: '/sys/userList', component: sysUser},
    {path: '/sys/userAdd', component: userAdd},
    {path: '/sys/resource', component: resource}
  ]
  },
  {path: '*', component: NotFoundView}
]


export default routes

