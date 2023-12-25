<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_color extends Model
{
    use HasFactory;
    protected $fillable =['id', 'color', 'product_id', 'created_at', 'updated_at'];
    protected $table ='products_colors';

    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function productColorSize(){
        return $this->hasMany(product_color_size::class);
    }
}
