import { Table } from "antd"

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'FullName',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Rut',
    dataIndex: 'rut',
    key: 'rut',
  },
  {
    title: '',
    dataIndex: '',
    key: 'x'
  }
];

const items = [
  {
    name: 'Andres',
    fullname: 'Andres Falcon Fuentes',
    rut: '12345677-6',
    email: 'andresfalcon@gmail.com', 
    key: 1
  },
  {
    name: 'Carla Falabella',
    fullname: 'Carla Patricia Cardenas Perez',
    rut: '19878890-9',
    email: 'carlacardenas@falabella.com',
    key: 2
  },
  {
    name: 'Disenador Freelancer',
    fullname: 'Pedro Pablo Lopez',
    rut: '12345677-6',
    email: 'pedro_lopez@gmail.com',
    key: 3
  },
  {
    name: 'Gasfiter Providencia',
    fullname: 'Luis Manrique Polanco',
    rut: '16345653-7',
    email: 'luismanrique@gmail.com',
    key: 4
  },
]

const TableComp = () => {
  return (
    <Table columns={columns} dataSource={items}></Table>
  )
}

export default TableComp