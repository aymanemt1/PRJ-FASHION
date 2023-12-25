<?php

namespace App\Http\Controllers;

use App\Models\categorie;
use App\Models\product;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
  public function CategoryShow(){
    $productCount = Product::count(); 
    $categories = categorie::all();
    $products = Product::inRandomOrder()->paginate($productCount);
        
    $products = product::all(); 
    return response()->json([
        'categories'=>$categories,
        'products'=>$products,
    ]);
  }
}
