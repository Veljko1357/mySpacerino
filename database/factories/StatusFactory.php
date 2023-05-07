<?php

namespace Database\Factories;

use App\Models\Profile;

use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Status>
 */
class StatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Status::class;

    public function definition()
    {
        return [
            'status' => $this->faker->sentence(),
            'mood' => $this->faker->word(3),
            'about_you' => $this->faker->sentence(),
        ];
    }
}
