<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
$SP = [
    [
      'ten'=> 'Loai 1',
      'ds_san_pham'=> [
        [
        'img'=> 'anh_1.jpg',
        'name'=> 'San Pham 1',
        'price'=> 50000
        ],
        [
        'img'=> 'anh_1.jpg',
        'name'=> 'San Pham 2',
        'price'=> 40000
        ],
        [
          'img'=> 'anh_1.jpg',
          'name'=> 'San Pham 3',
          'price'=> 40000
        ],
      ]
    ],
    [
      'ten'=> 'Loai 2',
      'ds_san_pham'=> [
        [
        'img'=> 'anh_1.jpg',
        'name'=> 'San Pham 11',
        'price'=> 50000
        ],
        [
        'img'=> 'anh_1.jpg',
        'name'=> 'San Pham 12',
        'price'=> 40000
        ],
        [
          'img'=> 'anh_1.jpg',
          'name'=> 'San Pham 12',
          'price'=> 40000
          ],
      ]
    ],
  ];

  echo json_encode($SP);
  
  ?>