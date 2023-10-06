import { NavLink } from "react-router-dom";
function Menu()
{
    return(
        <>
            <div class="col-md-6">
                <div class="menuHeadChung">
                    <NavLink to="/Menu" className="Nav-Link active" class="menuHead">Trang chủ</NavLink>
                    <NavLink to="/Menu" className="Nav-Link active" class="menuHead">về chúng tôi</NavLink>
                    <NavLink to="/Menu" className="Nav-Link active" class="menuHead">sản phẩm</NavLink>
                    <NavLink to="/Menu" className="Nav-Link active" class="menuHead">Tin tức</NavLink>
                    <NavLink to="/Menu" className="Nav-Link active" class="menuHead">liên hệ</NavLink>
                </div>
            </div>
        </>
    )
}
export default Menu;