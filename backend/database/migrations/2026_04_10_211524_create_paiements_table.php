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
        Schema::create('paiements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_id')->constrained('reservations')->cascadeOnDelete();
            $table->decimal('montant', 10, 2);
            $table->enum('methode_paiement', ['carte_bancaire', 'virement', 'cash', 'cmi']);
            $table->string('reference_transaction', 100)->nullable();
            $table->enum('statut_paiement', ['en_attente', 'reussi', 'echoue', 'rembourse'])->default('en_attente');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiements');
    }
};
