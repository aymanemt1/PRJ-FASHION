<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\order_details;
use Illuminate\Http\Request;
use App\Http\Requests\requestAddTocart;

class CartController extends Controller
{
    public function AddToCart(Request $request){
        $idProd = order_details::where('prod_id', $request->id)->first();
       
        if ($idProd) {
            $idProd->quantity += $request->input('quantity');
            $idProd->save();
            return response()->json(['msgSuccess' => 'Item quantity has been updated in your bag']);
        } else {
            order_details::create([
                'prod_id' => $request->id,
                'quantity' => $request->input('quantity'),
                'price' => $request->price,
                'discount' => $request->discount_price,
                'size' => $request->input('size'),
            ]);
            return response()->json(['msgSuccess' => 'Item has been added to your bag']);
        }
    }
    

    
        
        public function ShowCart(){
            $productDetails = Product::select('products.name','products.image', 'order_details.quantity',
            'order_details.id','order_details.prod_id', 'order_details.size', 'order_details.price')
            ->join('order_details', 'products.id', '=', 'order_details.prod_id')
            ->get();
            $totalPrice=0;
           $countCart =order_details::count();
            
            foreach($productDetails as $cardDetail){
                $productsTotal=$cardDetail->price* $cardDetail->quantity;
                $totalPrice+=$productsTotal;
            }
        
            return response()->json([
                'productDetails' => $productDetails,
                'totalPrice' => $totalPrice,
                'countCart' => $countCart,
            ]);
        }
        
        
        public function DeleteCart($id){
        $idProd = order_details::where('id', $id)->first();

            if($idProd){
                order_details::destroy($id);
                $idProd->save();
            }
            }
      
               
}
