<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        $user = Auth::user();
        $status = Status::where('user_id', $user->id)->first();

        if (!$status) {
            return abort(404);
        }

        return Inertia::render('Statuses/Edit', [
            'status' => $status,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $status = Status::where('user_id', $user->id)->first();

        if (!$status) {
            return abort(404);
        }

        $validatedData = $request->validate([
            'status' => 'nullable|string|max:255',
            'mood' => 'nullable|string|max:255',
            'about_you' => 'nullable|string|max:255',
        ]);

        $status->update($validatedData);

        return redirect()->route('statuses.edit', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
