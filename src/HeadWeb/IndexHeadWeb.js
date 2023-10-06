import Login from "./Login";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

function IndexHeadWeb()
{
    return (
        <>
             <header>
            <div class="headTop">
            <div class="row">
                <Menu/>
                <div class="col-md-3">
          
                </div>
                <Login/>
            </div>
            </div>

            <div class="headCenter">
                <div class="row">
                    <Logo/>
                    <div class="col-md-2">
          
                    </div>
                    <Search/>
                </div>
            </div>
            </header>

            
        </>
    )
}

export default IndexHeadWeb;