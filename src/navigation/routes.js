import ErrorPage from "../pages/Error"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Menus from "../pages/Menus"
import News from "../pages/News"
import Order from "../pages/Order"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/menus",
        element: <Menus />,
    },
    {
        path: "/accounts/login",
        element: <Login />,
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/large-orders",
        element: <Order />,
    },
]

export default routes