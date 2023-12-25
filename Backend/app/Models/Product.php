<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable=['id','id_categorie' ,'name', 'description', 
    'image', 'price', 'discount_price', 'status','size_id','created_at', 'updated_at', 'deleted_at'];
    protected $table ='products';

    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }
    public function productColorSize(){
        return $this->hasMany(product_color_size::class);
    }
    public function productColor(){
        return $this->hasMany(product_color::class);
    }
    public function orderDetails()
    {
        return $this->hasMany(order_details::class, 'prod_id', 'id');
    }


    public function size()
    {
        return $this->belongsTo(ProductSize::class, 'size_id');
    }

}
