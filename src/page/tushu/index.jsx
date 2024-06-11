import { Button, Popup, Form, Input } from "antd-mobile"
import { useState } from "react"


const addBook = (
    <>
        <Form>
            <Form.Header>添加图书</Form.Header>
            <Form.Item name='id' label='图书编号'>
                <Input placeholder='请输入...' />
            </Form.Item>
            <Form.Item name='name' label='图书名'>
                <Input placeholder='请输入...' />
            </Form.Item>
            <Form.Item name='publish' label='出版日期'>
                <Input placeholder='请输入...' />
            </Form.Item>
            <Form.Item name='author' label='作者'>
                <Input placeholder='请输入...' />
            </Form.Item>

        </Form>
        <Button>确定添加</Button>
    </>
)


const tushu = () => {
    const tushu = [
        {
            id: 1,
            title: '三国演义',
            author: '罗贯中',
        },
        {
            id: 2,
            title: '西游记',
            author: '吴承恩',
        },
        {
            id: 3,
            title: '三国演义',
            author: '罗贯中',
        },
        {
            id: 4,
            title: '西游记',
            author: '吴承恩',
        },
        {
            id: 5,
            title: '三国演义',
            author: '罗贯中',
        },
        {
            id: 6,
            title: '西游记',
            author: '吴承恩',
        },
        {
            id: 7,
            title: '三国演义',
            author: '罗贯中',
        },
        {
            id: 8,
            title: '西游记',
            author: '吴承恩',
        },
        {
            id: 9,
            title: '三国演义',
            author: '罗贯中',
        },
        {
            id: 10,
            title: '西游记',
            author: '吴承恩',
        },
    ]
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <h1>图书管理系统</h1>
            <Button color='primary' size='small' onClick={() => {
                setVisible(true)
            }}>添加图书</Button>
            <Popup
                visible={visible}
                onMaskClick={() => {
                    setVisible(false)
                }}
                onClose={() => {
                    setVisible(false)
                }}
                bodyStyle={{ height: '70vh' }}
            >
                {addBook}
            </Popup>
            <table className='table'>
                <tr>
                    <th >书名</th>
                    <th >作者</th>
                    <th>操作</th>
                    <th>生产日期</th>
                </tr>
                {tushu.map(item => {
                    return <tr key={item.id} >
                        <td >{item.title}</td>
                        <td >作者：{item.author}</td>
                        <td><Button size='mini' color='danger'>删除</Button></td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default tushu