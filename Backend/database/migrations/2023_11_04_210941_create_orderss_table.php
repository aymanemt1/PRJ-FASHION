<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orderss', function (Blueprint $table) {
            $table->id();
            $table->string('user_id')->references('id')->on('users');
            $table->integer('status')->default(0);
            $table->string('payement_method');
            $table->string('payement_statu');
            $table->integer('payement_id');
            $table->string('total_price');
            $table->string('adress');
            $table->string('phone');
            $table->string('email');
            $table->string('name');
            $table->string('country');
            $table->string('city');
            $table->string('postale_code');
            $table->string('shipping_price');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orderss');
    }
};
