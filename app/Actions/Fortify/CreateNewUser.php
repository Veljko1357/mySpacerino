<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use App\Models\Profile;
use App\Models\Blog;
use App\Models\Status;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        Profile::create([
            'user_id' => $user->id,
        ]);

        $blog = new Blog([
            'title' => 'Sample Blog Title',
            'text' => 'Sample blog text',
        ]);
        $blog->user()->associate($user);
        $blog->save();

        $status = new Status([
            'status' => 'Sample Statuses',
            'mood' => 'Sample Mood',
            'about_you' => 'Sample About You',
        ]);
        $status->user()->associate($user);
        $status->save();

        return $user;

    }
}
