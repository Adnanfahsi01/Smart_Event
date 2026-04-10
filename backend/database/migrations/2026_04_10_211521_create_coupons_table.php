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
        Schema::create('coupons', function (Blueprint $table) {
                $table->id();
                $table->string('code', 50)->unique();
                $table->enum('type_reduction', ['pourcentage', 'montant_fixe']);
                $table->decimal('valeur', 10, 2);
                $table->dateTime('date_debut')->nullable();
                $table->dateTime('date_expiration')->nullable();
                $table->integer('limite_utilisation')->nullable();
                $table->integer('utilisations_actuelles')->default(0);
                
                $table->foreignId('organisation_id')->nullable()->constrained('organisations')->cascadeOnDelete();
                $table->foreignId('event_id')->nullable()->constrained('events')->cascadeOnDelete();
                
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coupons');
    }
};
