
function ThanhToan()
{
    return (<>
    <h3>danh sách sản phẩm</h3>
    <br></br>
    <div class="row">
        <h4>sản phẩm 1</h4>
        <div class="col-sm-2">
            <img src="anh_4.jpg"/>
        </div>
        <div class="col-sm-2">
            
            <h5>tên sản phẩm: San Pham 11</h5>
        </div>
        <div class="col-sm-2">
            <h5>Đơn giá: 50000</h5>
        </div>
        <div class="col-sm-2">
            <h5>số lượng: 3</h5>
        </div>
        <div class="col-sm-4">
            <h5>Thành Tiền: 150000</h5>
        </div>
    </div>
   
    <hr></hr>
    <div class="row">
        <h4>sản phẩm 2</h4>
        <div class="col-sm-2">
            <img src="anh_4.jpg"/>
        </div>
        <div class="col-sm-2">
            
            <h5>tên sản phẩm: San Pham 12</h5>
        </div>
        <div class="col-sm-2">
            <h5>Đơn giá: 40000</h5>
        </div>
        <div class="col-sm-2">
            <h5>số lượng: 3</h5>
        </div>
        <div class="col-sm-4">
            <h5>Thành Tiền: 120000</h5>
        </div>
    </div>
    <hr></hr>
<br></br><br></br>
<div className="thanhToanNN">
    <h3>Thông tin người nhận hàng</h3>
    <div class="row">
        <div class="col-sm-6">
            <h4>thông tin người nhận</h4>
            <label for="ten">họ tên:</label>
            <input class="ten" type="text"/><br></br>

            <label for="DC">Địa chỉ:</label>
            <input class="DC" type="text"/><br></br>

            <label for="SDT">SĐT:</label>
            <input class="SDT" type="text"/>
        </div>
        <div class="col-sm-6">
            <h4>phương thức thanh toán</h4>
            <label for="TrucTiep">trực tiếp</label>
            <input type="checkbox" class="TrucTiep"/><br></br>
            <label for="NHang">chuyển qua ngân hàng</label>
            <input type="checkbox" class="NHang"/><br></br>
            <label for="MOMO">MOMO</label>
            <input type="checkbox" class="MOMO"/>
        </div>
    </div>
    </div>
    <div class="row">
        <div class="col-sm-9"></div>
        <div class="col-sm-2"><button class="GioTT">Thanh Toán</button></div>
        <div class="col-sm-1"></div>
    </div>
    </>)
}
export default ThanhToan;