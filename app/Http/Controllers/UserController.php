<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('Users/Index', [
           'users' => $users
        ]);
    }
    public function edit(Request $request, User $user)
    {
        $profile = $user->profile;

        return Inertia::render('Users/Edit', [
            'user' => $user->only('id', 'name'),
            'profile' => $profile->only('username'),
        ]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:profiles,username,' . $user->profile->id,
        ]);

        $user->update([
            'name' => $request->input('name'),
        ]);

        $user->profile->update([
            'username' => $request->input('username'),
        ]);


        return redirect()->back()->with('success', 'Account settings updated successfully.');
    }




}
