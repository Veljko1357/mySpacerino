<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersAndProfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        User::factory()
            ->count(50) // Number of users you want to create
            ->has(Profile::factory()) // Create a new profile for each user
            ->create();
    }
}
