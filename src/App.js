import './App.css';
import './bootstrap-5.2.3-dist/css/bootstrap.min.css';
import './bootstrap-5.2.3-dist/js/bootstrap.min.js';
import './bootstrap-5.2.3-dist/fontawesome/css/all.min.css';
import { Routes,Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Trang_Chinh from './IndexWeb/Trang_Chinh';
import Trang_Chi_Tiet from './IndexWeb/Trang_Chi_Tiet';
import DS_Loai_SP from './IndexWeb/DS_Loai_SP';
import Context from './LoaiSanPham/context';
import Gio_Hang from './GioHang/Gio_hang';
import ThanhToan from './GioHang/ThanhToan';
import Loginform from './Account/login';
import DangKyform from './Account/DangKy';
import QLTK from './Account/QuanLyTK';
import QuanLyDonHang from './Account/DonHang';
import Trang_ChinhLogin from './IndexWeb/Trang_ChinhLogin';
function App() {
  return(<>
    <Routes>
   
      <Route path="/" element={<Trang_Chinh/>}/>;
      <Route path="/LoginTC" element={<Trang_ChinhLogin/>}/>;
      <Route path="/ChiTiet" element={<Trang_Chi_Tiet/>}/>;
      <Route path='/Loai' element={<Context/>}/>;
      <Route path='/Gio' element={<Gio_Hang/>}/>;
      <Route path='/ThanhToan' element={<ThanhToan/>}/>;
      <Route path='/Login' element={<Loginform/>}/>;
      <Route path='/DangKy' element={<DangKyform/>}/>;
      <Route path='/QLTK' element={<QLTK/>}/>;
      <Route path='/ĐonHang' element={<QuanLyDonHang/>}/>;
    </Routes>
  </>
  )
}

export default App;
