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
        // Schema::create('adresses', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreign('user_adress')->references('id')->on('users');
        //     $table->string('city');
        //     $table->string('state');
        //     $table->string('country');
        //     $table->string('postale_code');
        //     $table->string('phone');
        //     $table->string('email');
        //     $table->string('name');
        //     $table->softDeletes();
            

        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adresses');
    }
};
