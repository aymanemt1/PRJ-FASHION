<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class setting extends Model
{
    use HasFactory;
    protected $fillable =[ 'id', 'name', 'description', 'phone', 'adress', 'logo', 'favicon', 'instagram', 'facebook', 'created_at', 'updated_at' ];
    protected $table ='settings';
}
