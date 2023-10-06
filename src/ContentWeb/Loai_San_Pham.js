import San_Pham from "./San_Pham";
import HeaderLoai from "./HeaderLoai";
function Loai_San_Pham(truyen)
{
    const ListSP = truyen.data.ds_san_pham.map(function(item){
        return(
            <San_Pham data={item}/>
        );
    });

    return (
        <>
        <HeaderLoai/>;
        <h1>{ truyen.data.ten}</h1>
        <div class="row">
            {ListSP}
            </div>
        </>
    );

}

export default Loai_San_Pham;