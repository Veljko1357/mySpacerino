<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return User::factory()->create()->id;
            },
            'username' => $this->faker->userName(),
            'bio' => $this->faker->paragraph(),
            'bucket_list' => $this->faker->sentence(),
            'general_interests' => $this->faker->sentence(),
            'music' => $this->faker->sentence(),
            'movies' => $this->faker->sentence(),
            'series' => $this->faker->sentence(),
            'books' => $this->faker->sentence(),
            'heroes' => $this->faker->sentence(),
            'profile_picture' => $this->faker->imageUrl(),
        ];
    }
}

//'animals', true, 'cats'
