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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->text('description')->nullable();
            $table->dateTime('date_debut');
            $table->dateTime('date_fin');
            $table->string('lieu');
            $table->integer('capacite_max');
            $table->decimal('prix', 10, 2)->default(0.00);
            $table->string('image_url')->nullable();
            $table->enum('statut', ['brouillon', 'publie', 'annule', 'termine'])->default('brouillon');
            
            // Clés étrangères
            $table->foreignId('ville_id')->constrained('villes')->restrictOnDelete();
            $table->foreignId('organisation_id')->constrained('organisations')->cascadeOnDelete();
            $table->foreignId('categorie_id')->nullable()->constrained('categories')->nullOnDelete();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
