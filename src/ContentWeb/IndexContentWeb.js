import Loai_San_Pham from "./Loai_San_Pham";
import HeaderLoai from "./HeaderLoai";
import { useEffect, useState } from "react";
/*
const SP=[
    {
      'ten': 'Loai 1',
      'ds_san_pham': [
        {
        'img': 'anh_1.jpg',
        'name': 'San Pham 1',
        'price': 50000
        },
        {
        'img': 'anh_1.jpg',
        'name': 'San Pham 2',
        'price': 40000
        },
        {
          'img': 'anh_1.jpg',
          'name': 'San Pham 3',
          'price': 40000
        },
      ]
    },
    {
      'ten': 'Loai 2',
      'ds_san_pham': [
        {
        'img': 'anh_1.jpg',
        'name': 'San Pham 11',
        'price': 50000
        },
        {
        'img': 'anh_1.jpg',
        'name': 'San Pham 12',
        'price': 40000
        },
      ]
    },
  ];
*/
function IndexContentWeb()
{
  /*
    
*/

const [dsLoai_San_Pham, setDSLoai_San_Pham]= useState([])
useEffect(()=>{
  fetch('http://localhost:9000/get-data.php')
  .then(Response => Response.json())//->đọc nội dung chuyển thành một đối tượng javascrip, được phản hồi là 1 chuỗi json
  .then(json => setDSLoai_San_Pham(json))//là 1 callback
}, [])
const ListSP = dsLoai_San_Pham.map(function(item){
  return (
    <Loai_San_Pham data={item}/>
);
});
      return(
        <>
        <div class='row'> {ListSP}</div>
        </>
      )
}

export default IndexContentWeb;