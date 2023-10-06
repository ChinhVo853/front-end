function DangKyform()
{
    return (<>
    <div class="body">
     <div id="wrapper">
        <form action="XLDangky" id="form-login" method="post">
            @csrf
            <h1 class="form-heading">Form đăng ký</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="Ten" placeholder="Tên"/>
            </div>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="email" placeholder="email"/>
            </div>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="TenTK" placeholder="Tên đăng nhập"/>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="MK" placeholder="Mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="XNMK" placeholder="Xác nhận mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <input type="submit" value="Đăng ký" class="form-submit"/>
            <a href="">Đăng nhập</a>
        </form>
    </div>
    </div>
    
    </>)
}
export default DangKyform;