<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
//     public function createTableAndInsertData()
// {
//     // Verileri mevcut veritabanından çekme
//     $veriler = DB::connection('mysql')->select('SELECT * FROM users');

//     // Yeni tabloyu oluşturma
//     DB::statement('CREATE TABLE yeni_tablo (sütun1 VARCHAR(255), sütun2 VARCHAR(255), sütun3 VARCHAR(255))');

//     // Verileri yeni tabloya ekleme
//     foreach ($veriler as $veri) {
//         DB::table('yeni_tablo')->insert([
//             'sütun1' => $veri->sütun1,
//             'sütun2' => $veri->sütun2,
//             'sütun3' => $veri->sütun3,
//         ]);
//     }

//     return "Veriler başarıyla tabloya eklendi.";
    
// }

}
