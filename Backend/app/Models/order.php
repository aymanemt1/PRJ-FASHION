<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $fillable=['id', 'user_id', 'status', 'payement_method', 
    'payement_statu', 'payement_id', 'total_price', 'adress',
     'phone', 'email', 'name', 'country', 'city', 'postale_code', 'shipping_price'];
     protected $table ='orderss';

     public function user(){
        return $this->belongsTo(User::class);
    }
}
