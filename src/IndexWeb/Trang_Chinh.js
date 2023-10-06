import IndexHeadWeb from '../HeadWeb/IndexHeadWeb';
import IndexFootWeb from '../FootWeb/IndexFootWeb';
import IndexContentWeb from '../ContentWeb/IndexContentWeb';
import Banner from './Banner';
function Trang_Chinh() {
  return(<>
    <IndexHeadWeb/>
    <Banner/>
    <IndexContentWeb/>
    <IndexFootWeb/>
  </>
  )
}

export default Trang_Chinh;