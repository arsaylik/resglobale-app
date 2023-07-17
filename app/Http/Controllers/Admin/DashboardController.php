<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;

class  DashboardController extends Controller{

    public function registered(){
        $users = User::all();
        return view('admin.register')->with('users',$users);
    }
}
?>