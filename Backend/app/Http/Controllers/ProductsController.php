<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\categorie;
use App\Models\ProductSize;
use Illuminate\Support\Facades\Auth;


class ProductsController extends Controller
{
    public function index()
    {
        $productCount = Product::count(); 
        $products = Product::inRandomOrder()->paginate($productCount);
        
        return response()->json([
            'products' => $products,
            'productCount' => $productCount
        ]);
    }
    
    
    // public function store() {
        //     $product = Product::create([
            //         'id_categorie' => "1",
            //         'name' => "shirt4",
            //         'description' => "shirt4 escription",
            //         'image' => "shirt4.jpg",
            //         'price' => "200",
    //         'discount_price' => "22",
    //     ]);
     
        
    // }
    
    public function show($id) {
        $product = Product::find($id);
    
        $productSize = ProductSize::all(); 

        $category = Categorie::find($product->id_categorie);
        $allProducts = Product::all();
        $count = $allProducts->count();
        $relatedProducts = Product::where('id_categorie', $category->id)
            ->where('id', '!=', $id) 
            ->inRandomOrder()
            ->paginate($count);
    
    
        return response()->json([
            'product' => $product,
            'related_products' => $relatedProducts,
            'allProducts' => $allProducts,
            'productSize' => $productSize,
        ]);
    }
    

    public function shopping(){
            $categories = Categorie::all();
            $productCount = Product::count(); 
            $productSize = ProductSize::all(); 
            $products = Product::inRandomOrder()->paginate($productCount);
    
        return response()->json([
            'products' => $products,
            'categories' => $categories,
            'productCount' => $productCount,
            'productSize' => $productSize,
        ]);
    }

    

    public function FiltredProducts(Request $request){

        if(request()->has('filtered')) {
            $priceFrom = $request->input('priceFrom');
            $priceTo = $request->input('priceTo');
            $nameProd = $request->input('nameProd');
            $sizeProd = $request->input('size');
            $catProd = $request->input('categorie');
        
            $productsQuery = Product::query();
        
            if ($priceFrom && $priceTo) {
                $productsQuery->whereBetween('price', [$priceFrom, $priceTo]);
            }
        
            if ($sizeProd) {
                $productsQuery->where('size', $sizeProd);
            }
        
            if ($nameProd) {
                $productsQuery->where('name', 'like', "%$nameProd%");
            }
        
            if ($catProd) {
                $productsQuery->where('id_categorie', $catProd);
            }
        
            $products = $productsQuery->get();
            $productCount = $products->count();
            $categories = Categorie::all();
        }
        
        return view('shop', compact('products', 'productCount',"categories"));
    }

}
