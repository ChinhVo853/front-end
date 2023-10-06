import { NavLink } from "react-router-dom";
function Login()
{
    return(
        <>
            <div class="col-md-3">
            
                <NavLink to="/Login" className="Nav-Link active" class="LoginHead">ĐĂNG KÝ</NavLink>
                <NavLink to="/Login" className="Nav-Link active" class="LoginHead">ĐĂNG NHẬP</NavLink>
            </div>
        </>
    )
}

export default Login;
