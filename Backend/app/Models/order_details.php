<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_details extends Model
{
    use HasFactory;
    protected $fillable= [
        'id', 'prod_id', 'quantity', 'price','discount','size', 'created_at', 'updated_at'
    ];
    protected $table ='order_details';

    public function orders(){
        return $this->belongsTo(Order::class);
    }

    public function productcolorsize(){
        return $this->belongsTo(Product_color_size::class);
    }
    public function product(){
        return $this->belongsTo(Product::class,'prod_id','id');
    }
}
