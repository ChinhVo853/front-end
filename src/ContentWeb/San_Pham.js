import Price from "./Price";
import NAME from "./Name";
import IMG from "./Img";
function San_Pham(truyen)
{
    return(
        <>
          <div class="col-sm-3">
            <div class="SanPham">
                <div class="TopSP">
                    <IMG url={truyen.data.img} />
                </div>

                <div class="Center1SP">
                    <NAME nm={truyen.data.name} />
                </div>
            
                <div class="Center2SP">
                    <Price pr={truyen.data.price}/>
                </div>
                <div class="BottomSP">
                    <button type="Submit" class="NutBuy">BUY</button>
                </div>
            
            </div>
        </div>
        </>
    )
}

export default San_Pham;