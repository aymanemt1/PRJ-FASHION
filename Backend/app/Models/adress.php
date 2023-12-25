<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class adress extends Model
{
    use HasFactory;
    protected $fillable=[
        'id', 'city', 'state', 'country', 'postale_code', 'phone', 'email', 'name', 'deleted_at', 'created_at', 'updated_at'
    ];
    protected $table ='adresses';

    public function user(){
        return $this->belongsTo(User::class);
    }
}
