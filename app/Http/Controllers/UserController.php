<?php

namespace App\Http\Controllers;

use App\Http\Resources\Api\V1\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all(); // Databasae deki tum verileri $user a aktardidk
        return Inertia::render('Users/Index', ['users' => $users]); // Users/Index Pages klasorune bakar. $user ida users keyine aktardik.
        
    }
}
