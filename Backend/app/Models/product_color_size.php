<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_color_size extends Model
{
    use HasFactory;
    protected $fillable =['id', 'product_size_id', 'product_color_id', 'quantite', 'price_two', 'discount', 'status', 'created_at', 'updated_at'];
    protected $table ='products_colors_sizes';

    public function productColor(){
        return $this->belongsTo(product_color::class);
    }
    public function productSize(){
        return $this->belongsTo(product_size::class);
    }
   
}
