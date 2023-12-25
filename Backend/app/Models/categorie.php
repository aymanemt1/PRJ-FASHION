<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categorie extends Model
{
    use HasFactory;
    protected $filablle=['id','name','description'];
    protected $table ='categories';
    
    public function child(){
        return $this->hasMany(Categorie::class);
    }
    public function product(){
        return $this->hasMany(Product::class);
    }
}
