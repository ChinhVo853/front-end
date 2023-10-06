import IndexHeadWeb from "../HeadWeb/IndexHeadWeb";
import IMG from "../ContentWeb/Img";
import Price from "../ContentWeb/Price";
import NAME from "../ContentWeb/Name";
import IndexFootWeb from "../FootWeb/IndexFootWeb";
import Loai_San_Pham from "../ContentWeb/Loai_San_Pham";
import { useEffect, useState } from "react";
function Context()
{
    const [dsLoai_San_Pham, setDSLoai_San_Pham]= useState([]);
    useEffect(()=>{
      fetch('http://localhost:9000/get-data.php')
      .then(Response => Response.json())//->đọc nội dung chuyển thành một đối tượng javascrip, được phản hồi là 1 chuỗi json
      .then(json => setDSLoai_San_Pham(json))//là 1 callback
    }, []);
      if (dsLoai_San_Pham.length === 0) {
    return (
      <>
        <IndexHeadWeb />
        <div>
          <p>Đang tải dữ liệu...</p>
        </div>
      </>
    );
  }
     // Chỉ mục của loại sản phẩm và sản phẩm bạn muốn lấy

  // Lấy giá trị img từ vị trí cụ thể
  
  const Loai = dsLoai_San_Pham[1].ten;
  return (
    <>
      <IndexHeadWeb />
      <h1>{Loai}</h1>
      <div class="row">
        <div class="col-sm-4">
        <div class="SanPham">
                <div class="TopSP">
                    <IMG url={dsLoai_San_Pham[1].ds_san_pham[0].img} />
                </div>

                <div class="Center1SP">
                    <NAME nm={dsLoai_San_Pham[1].ds_san_pham[0].name} />
                </div>
            
                <div class="Center2SP">
                    <Price pr={dsLoai_San_Pham[1].ds_san_pham[0].price}/>
                </div>
                <div class="BottomSP">
                    <button type="Submit" class="NutBuy">BUY</button>
                </div>
            
            </div>
        </div>
        <div class="col-sm-4">
        <div class="SanPham">
                <div class="TopSP">
                    <IMG url={dsLoai_San_Pham[1].ds_san_pham[1].img} />
                </div>

                <div class="Center1SP">
                    <NAME nm={dsLoai_San_Pham[1].ds_san_pham[1].name} />
                </div>
            
                <div class="Center2SP">
                    <Price pr={dsLoai_San_Pham[1].ds_san_pham[1].price}/>
                </div>
                <div class="BottomSP">
                    <button type="Submit" class="NutBuy">BUY</button>
                </div>
            
            </div>
        </div>
        <div class="col-sm-4">
        <div class="SanPham">
                <div class="TopSP">
                    <IMG url={dsLoai_San_Pham[1].ds_san_pham[2].img} />
                </div>

                <div class="Center1SP">
                    <NAME nm={dsLoai_San_Pham[1].ds_san_pham[2].name} />
                </div>
            
                <div class="Center2SP">
                    <Price pr={dsLoai_San_Pham[1].ds_san_pham[2].price}/>
                </div>
                <div class="BottomSP">
                    <button type="Submit" class="NutBuy">BUY</button>
                </div>
            
            </div>
        </div>
      </div>
      <IndexFootWeb/>
    </>
  );

}
export default Context;