import { NavLink } from "react-router-dom";
function CenterFoot()
{
    return(
        <>
        <div class="col-sm-3">
            <h3>LAZADA VIỆT NAM</h3>
            <NavLink to="/LienHe" className="Nav-Link active">tất cả Danh mục</NavLink><br/>
            <NavLink to="/LienHe" className="Nav-Link active">báo chí</NavLink><br/>
            <NavLink to="/LienHe" className="Nav-Link active">tuyển dụng</NavLink>
        </div>
        </>
    )
}

export default CenterFoot;