
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import { NavLink } from "react-router-dom";
function IndexJeadWebLogin()
{
    return(<>
      <header>
            <div class="headTop">
            <div class="row">
                
                <div class="col-md-10">
                    <Menu/>
                </div>
               
                <div class="col-md-2">
                    <NavLink to="/QLTK" className="Nav-Link active" ><a>Tài Khoản</a></NavLink>
                    <NavLink to="/Gio" className="Nav-Link active" class="LoginHead">Giỏ hàng</NavLink>
                    <NavLink to="/ĐonHang" className="Nav-Link active" class="LoginHead">Xem đơn hàng</NavLink>
                </div>
            
                
            </div>
            </div>

            <div class="headCenter">
                <div class="row">
                    <Logo/>
                    <div class="col-md-2">
          
                    </div>
                    <Search/>
                </div>
            </div>
            </header>
    </>)
}
export default IndexJeadWebLogin;