import { NavLink } from "react-router-dom";
function HeaderLoai(){
    return(
    <>
     <div class="headerLoai">
            <div class="row">
            <div class="col-sm-4"><p>Loại sản phẩm</p></div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4"><NavLink to="/Loai" className="Nav-Link active" class="xemAll">Xem Tất cả</NavLink></div>
        </div>
   </div>
    </>
    );
}

export default HeaderLoai;