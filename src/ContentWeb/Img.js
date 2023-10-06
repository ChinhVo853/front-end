import { NavLink } from "react-router-dom";
function IMG(Anh,id)
{
    return(
    <>
    <NavLink to="/ChiTiet" className="Nav-Link active" class="menu"> <img class="AnhSP" src={Anh.url}/></NavLink>
        
    </>
    )
}

export default IMG;