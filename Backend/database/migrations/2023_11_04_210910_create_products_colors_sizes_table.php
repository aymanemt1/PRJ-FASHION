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
        Schema::create('products_colors_sizes', function (Blueprint $table) {
            $table->id();
            $table->string('product_size_id')->references('id')->on('products_sizes');
            $table->string('product_color_id')->references('id')->on('products_colors');
            $table->integer('quantite');
            $table->decimal('price_two',10,2)->nullable();
            $table->decimal('discount',10,2)->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_colors_sizes');
    }
};
