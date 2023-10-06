import IndexJeadWebLogin from '../HeadWeb/IndexJeadWebLogin';
import IndexFootWeb from '../FootWeb/IndexFootWeb';
import IndexContentWeb from '../ContentWeb/IndexContentWeb';
import Banner from './Banner';
function Trang_ChinhLogin() {
  return(<>
    <IndexJeadWebLogin/>
    <Banner/>
    <IndexContentWeb/>
    <IndexFootWeb/>
  </>
  )
}

export default Trang_ChinhLogin;