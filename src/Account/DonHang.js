
import { NavLink } from "react-router-dom";
function QuanLyDonHang (){

  return (
    <>
    <div className="QuanLyDonHang">
      <h1>Quản lý đơn hàng</h1>
      <div class="DonHan">
        <h1>đơn hàng 1</h1>
        <h3>mã đơn hàng: xqk0090</h3>
        <h2>đang giao</h2>
        <button>xem chi tiết</button>
      </div>
      <div class="DonHan">
        <h1>đơn hàng 1</h1>
        <h3>mã đơn hàng: xqk0091</h3>
        <h2>đã giao</h2>
        <button>xem chi tiết</button>
      </div>
      <div class="DonHan">
        <h1>đơn hàng 1</h1>
        <h3>mã đơn hàng: xqk0092</h3>
        <h2>đang giao</h2>
        <button>xem chi tiết</button>
      </div>
     </div>
     <NavLink to="/LoginTC" className="Nav-Link active" class="LoginHead"><button class="DHTV">trở về</button></NavLink>
     </>
  )
}

export default QuanLyDonHang;
