import IndexJeadWebLogin from "../HeadWeb/IndexJeadWebLogin";
import IMG from "../ContentWeb/Img";
import NAME from "../ContentWeb/Name";
import Price from "../ContentWeb/Price";
import IndexFootWeb from "../FootWeb/IndexFootWeb";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Gio_Hang()
{
    const [dsLoai_San_Pham, setDSLoai_San_Pham]= useState([]);
    useEffect(()=>{
      fetch('http://localhost:9000/get-data.php')
      .then(Response => Response.json())//->đọc nội dung chuyển thành một đối tượng javascrip, được phản hồi là 1 chuỗi json
      .then(json => setDSLoai_San_Pham(json))//là 1 callback
    }, []);
      if (dsLoai_San_Pham.length === 0) {
    return (
      <>
        <IndexJeadWebLogin />
        <div>
          <p>Đang tải dữ liệu...</p>
        </div>
      </>
    );
  }
    return (
        <>
            <IndexJeadWebLogin />
            <h1>Giỏ hàng</h1>
            <div class="GioSP">
            <div class="row">
           
                <div class="col-sm-3">
                    <IMG url={dsLoai_San_Pham[1].ds_san_pham[0].img} />
                </div>
                <div class="col-sm-9">
                    <h1><NAME nm={dsLoai_San_Pham[1].ds_san_pham[0].name} /></h1>
                    <h3 class="GHGia"><Price pr={dsLoai_San_Pham[1].ds_san_pham[0].price}/></h3>
                    <div class="row">
                        <div class="col-sm-2">
                            <h4>số lượng:</h4>
                            <input type="number" class="soluongGio" value="3"/>
                        </div>
                        <div class="col-sm-8">
                            <h4>Thành Tiền:</h4>
                            <input type="number" class="soluongGio" value="150000"/>
                        </div>
                        <div class="col-sm-2">
                            <button class="GioXoa">Xoá</button><br></br>
                            <button class="GioSua">Sửa</button>
                        </div>
                    </div>
                   
                </div>
            </div>
            </div>
            <div class="GioSP">
            <div class="row">
            
                
                <div class="col-sm-3">
                    <IMG url={dsLoai_San_Pham[1].ds_san_pham[1].img} />
                </div>
                <div class="col-sm-9">
                    <h1><NAME nm={dsLoai_San_Pham[1].ds_san_pham[1].name} /></h1>
                    <h3 class="GHGia"><Price pr={dsLoai_San_Pham[1].ds_san_pham[1].price}/></h3>
                    <div class="row">
                        <div class="col-sm-2">
                            <h4>số lượng:</h4>
                            <input type="number" class="soluongGio" value="3"/>
                        </div>
                        <div class="col-sm-8">
                            <h4>Thành Tiền:</h4>
                            <input type="number" class="soluongGio" value="120000"/>
                        </div>
                        <div class="col-sm-2">
                            <button class="GioXoa">Xoá</button><br></br>
                            <button class="GioSua">Sửa</button>
                        </div>
                    </div>
                   
                </div>
            </div>
            
            </div>
            <h1>Tổng tiền: 270000đ</h1>
            <div class="row">
                <div class="col-sm-3">
                    <button class="GioTV">mua thêm hàng</button>
                </div>
                <div class="col-sm-6">
                    
                </div>
                <div class="col-sm-3">
                <NavLink to="/ThanhToan" className="Nav-Link active" ><button class="GioTT">Thanh Toán</button></NavLink>
                </div>
            </div>
            <IndexFootWeb/>
        </>
    )
}
export default Gio_Hang;