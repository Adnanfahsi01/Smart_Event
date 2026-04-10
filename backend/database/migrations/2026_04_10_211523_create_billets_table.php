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
        Schema::create('billets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_id')->constrained('reservations')->cascadeOnDelete();
            $table->enum('type_personne', ['acheteur_principal', 'accompagnateur']);
            $table->string('nom_complet');
            $table->string('cin', 20)->nullable();
            $table->string('email')->nullable();
            $table->string('code_billet', 50)->unique();
            $table->boolean('est_scanne')->default(false);
            $table->dateTime('date_scan')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('billets');
    }
};
