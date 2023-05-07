<?php

namespace Database\Seeders;

use App\Models\Status;
use App\Models\Profile;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::all()->each(function (User $user) {
            Status::factory()->create([
                'user_id' => $user->id,
            ]);
        });
    }

}
