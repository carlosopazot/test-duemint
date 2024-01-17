
import Navbar from './components/Navbar/Navbar'
import HeaderComp from './components/Header/HeaderComp';
import TableComp from './components/Table/TableComp';
import { Layout } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <Navbar/>
        <HeaderComp/>
        <TableComp/>
      </Layout>
    </div>
  );
}

export default App;
