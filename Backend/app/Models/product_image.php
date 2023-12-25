<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_image extends Model
{
    use HasFactory;
    protected $fillable =['id', 'product_color_size_id', 'created_at', 'updated_at'];
    protected $table ='products_image';
  
    public function productColorSize(){
        return $this->belongsTo(product_color_size::class);
    }
}
