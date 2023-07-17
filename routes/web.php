<?php

use App\Http\Controllers\LocalizationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomepagesFolder/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'isAuth' => Auth::guest(),
        'nedirBu' => 'test',
    ]);
});
Route::get('/abaout', function () {
    return Inertia::render('HomepagesFolder/Abaout', [
       
    ]);
});
Route::get('/Contact', function () {
    return Inertia::render('HomepagesFolder/Contact', [
        
    ]);
});
Route::get('/Services', function () {
    return Inertia::render('HomepagesFolder/Services', [
        
    ]);
});
Route::get('locale/{locale}',[LocalizationController::class,'setLang']);

   
        
    

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // TODO : Create admin middleware group inside of it and check if user role is admin 
    Route::prefix('admin')->group(function () {
        Route::resource('users', UserController::class);
    });
});

require __DIR__.'/auth.php';
