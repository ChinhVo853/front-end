import { NavLink } from "react-router-dom";
function LeftFoot()
{
    return(
        <>
            <div class="col-sm-3">
                <h3>Liên Hệ Chúng tôi</h3>
                <NavLink to="/LienHe" className="Nav-Link active">hotline</NavLink><br/>
                <NavLink to="/LienHe" className="Nav-Link active">Trung tâm hổ trợ</NavLink><br/>
                <NavLink to="/LienHe" className="Nav-Link active">chính sách</NavLink>
            </div>
        </>
    )
}

export default LeftFoot;