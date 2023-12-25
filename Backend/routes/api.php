<?php

use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::controller(ProductsController::class)->group(function () {
    Route::get('products','index');
    
    Route::get('product-detail/{id}','show');
    Route::get('shop','shopping');
    Route::post('FiltredProducts','FiltredProducts');
  
});


Route::controller(CartController::class)->group(function () {
    
    Route::get('cart','ShowCart');
    Route::get('addtocart/{id}','AddToCart');
    Route::delete('DeleteCart/{id}','DeleteCart');
    
});

Route::controller(CategoriesController::class)->group(function () {
    
   Route::get('CategoryShow','CategoryShow');
});

Route::controller(UserController::class)->group(function () {
    
   Route::post('UserRegister','UserRegister');
   Route::post('UserLogin','UserLogin');
   Route::get('GetUsers','GetUsers');
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AdminProductController::class)->group(function () {
    Route::get('getproducts','index');
   
});