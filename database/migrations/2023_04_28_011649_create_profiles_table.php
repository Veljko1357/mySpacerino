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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('username')->unique()->nullable();
            $table->text('bio')->nullable();
            $table->text('bucket_list')->nullable();
            $table->text('general_interests')->nullable();
            $table->text('music')->nullable();
            $table->text('movies')->nullable();
            $table->text('series')->nullable();
            $table->text('books')->nullable();
            $table->text('heroes')->nullable();
            $table->string('profile_picture')->nullable();
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
