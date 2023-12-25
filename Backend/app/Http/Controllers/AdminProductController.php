<?php

namespace App\Http\Controllers;

use App\Models\categorie;
use App\Models\product;
use Illuminate\Http\Request;

class AdminProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = categorie::all();
        
        return response()->json([
            'products' => $products,
            'categories' => $categories,
            
        ]);
    }
}
