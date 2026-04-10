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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('event_id')->constrained('events')->cascadeOnDelete();
            $table->foreignId('coupon_id')->nullable()->constrained('coupons')->nullOnDelete();
            
            $table->integer('quantite')->default(1);
            $table->decimal('sous_total', 10, 2);
            $table->decimal('montant_remise', 10, 2)->default(0.00);
            $table->decimal('montant_total', 10, 2);
            $table->enum('statut_reservation', ['en_attente', 'confirmee', 'annulee'])->default('en_attente');
            
            // date_reservation est géré par $table->timestamps() (created_at)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
