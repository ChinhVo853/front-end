
function QLTK()
{
    return (
        <>
        <div class="QLTK">
            <h1>
                QUẢN LÝ TÀI KHOẢN
            </h1>
        <div class="row">
            <div class="col-sm-4">
                <img class="anhTK" src="anh_2.png"/>
                <button>đổi ảnh</button>
            </div>
            <div class="col-sm-8">
                <label for="ten">tên: </label>
                <input class="ten" value="Nguyễn Văn A" /><br></br>
                <label for="Email">Email: </label>
                <input class="Email" value="abc@gmail.com"/><br></br>
                <label for="TenDN">Tên Đăng nhập: </label>
                <input class="TenDN" value="client" readOnly/><br></br>
                <label for="SoDT">điện thoại: </label>
                <input class="SoDT" value="098746473"/><br></br>
                <label for="DChi">địa chỉ:</label>
                <input type="text" class="DChi" value="abc.aiodhfa"/><br></br>
                <div class="row">
                <div class="col-sm-6">
                        <button>xem đơn hàng</button>
                    </div>
                    <div class="col-sm-6">
                        <button>thay đổi</button>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
       
        </>
    )
}
export default QLTK;