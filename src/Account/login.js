import { NavLink } from "react-router-dom";
function Loginform()
{
    return (<>
    <div class="body">
     <div id="wrapper">
        <form action="DangNhap" id="form-login">
            <h1 class="form-heading">Form đăng nhập</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="TenTK" placeholder="Tên đăng nhập"/>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="MK" placeholder="Mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <NavLink to="/LoginTC" className="Nav-Link active" ><input type="submit" value="Đăng nhập" class="form-submit"/></NavLink>
            <NavLink to="/DangKy" className="Nav-Link active" ><a>Đăng ký tài khoản</a></NavLink>
            
        </form>
    </div>
    </div>
    </>)
}
export default Loginform;