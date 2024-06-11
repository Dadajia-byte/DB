import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login";
import Layout from "../page/layout";
import Tushu from "../page/tushu";
import Jieshu from "../page/jieshu";
export default createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Tushu></Tushu>
            },
            {
                path: '/jieshu',
                element: <Jieshu></Jieshu>
            }
        ]
    }
])