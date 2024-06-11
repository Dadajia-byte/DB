import { TabBar, Button } from 'antd-mobile'
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import {
    AppOutline,
    UnorderedListOutline,
} from 'antd-mobile-icons'



const layout = () => {
    const navigate = useNavigate()
    const tabs = [
        {
            key: '/',
            title: '图书管理',
            icon: <AppOutline />,
        },
        {
            key: '/jieshu',
            title: '借书管理',
            icon: <UnorderedListOutline />,

        }]
    const switchRoute = (path) => {
        navigate(path)
    }
    return (
        <>
            <div className="container">
                {/* 二级路由出口 */}
                <Outlet />
            </div>
            <TabBar onChange={switchRoute} className='tabbar'>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        title={item.title}
                        icon={item.icon}
                    ></TabBar.Item>
                ))}
            </TabBar>
        </>
    )
}

export default layout