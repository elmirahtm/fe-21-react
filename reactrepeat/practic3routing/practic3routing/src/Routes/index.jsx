import Home from "../Pages/Home";
import AddUser from "../Pages/AddUser";
import EditUser from "../Pages/EditUser";
import DeletUser from "../Pages/DeletUser";
  const MyRoutes=[
    {  id:1, path:"/", element:<Home/>, title:"Home Page"  },
    {  id:2, path:"/AddUser", element:<AddUser/>, title:"Add User "  },
    {  id:3, path:"/EditUser", element:<EditUser/>, title:"Edit User "  },
    {  id:4, path:"/DeletUser", element:<DeletUser/>, title:"Delete User "  }
    
]
export default MyRoutes;