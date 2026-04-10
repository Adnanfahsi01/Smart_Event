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
       Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nom_complet');
            $table->string('email')->unique();
            $table->string('mot_de_passe'); // Laravel utilise 'password' par défaut, mais gardons ton nom
            $table->enum('role', ['participant', 'organisateur', 'admin'])->default('participant');
            $table->string('langue_choisie', 10)->default('fr');
            $table->enum('theme_choisi', ['light', 'dark'])->default('light');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
