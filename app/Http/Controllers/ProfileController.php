<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Status;
use App\Models\User;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use function Illuminate\Support\Facades\base_path;

class ProfileController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $profile = $user->profile;
        $blogs = $user->blogs;
        Log::info('Blogs data:', ['blogs' => $blogs]);
        $randomProfiles = Profile::where('user_id', '!=', $user->id)->inRandomOrder()->take(10)->get();
        $profiles = Profile::all();

        return Inertia::render('Profiles/Index', [
            'profiles' => $profiles,
            'username' => $profile->username ?? '',
            'id' => $profile->id ?? null,
            'profile_picture' => $profile->profile_picture ?? '',
            'blogs' => $blogs ?? [],
            'randomProfiles' => $randomProfiles,
            'user' => $user,
        ]);
    }

//
    public function create()
    {
        return Inertia::render('Profiles/Create');
    }

//
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'nullable|max:20',
            'bio' => 'nullable|max:500',
            'bucket_list' => 'nullable|max:500',
            'general_interests' => 'nullable|max:500',
            'music' => 'nullable|max:500',
            'movies' => 'nullable|max:500',
            'series' => 'nullable|max:500',
            'books' => 'nullable|max:500',
            'heroes' => 'nullable|max:500',

        ]);
        $profile = new Profile($request->input());
        $profile->save();
        return redirect('Profiles/Index');
    }


    public function edit(Profile $profile)
    {
        return Inertia::render('Profiles/Edit', [
            'profile' => $profile,
        ]);
    }




    public function update(Request $request, Profile $profile)
    {
        Log::info('Request data:', $request->all());
        $request->validate([
            'bio' => ['nullable', 'string', 'max:500'],
            'bucket_list' => ['nullable', 'string', 'max:500'],
            'general_interests' => ['nullable', 'string', 'max:500'],
            'music' => ['nullable', 'string', 'max:500'],
            'movies' => ['nullable', 'string', 'max:500'],
            'series' => ['nullable', 'string', 'max:500'],
            'books' => ['nullable', 'string', 'max:500'],
            'heroes' => ['nullable', 'string', 'max:500'],

        ]);


        $profile->update([
            'bio' => $request->input('bio'),
            'bucket_list' => $request->input('bucket_list'),
            'general_interests' => $request->input('general_interests'),
            'music' => $request->input('music'),
            'movies' => $request->input('movies'),
            'series' => $request->input('series'),
            'books' => $request->input('books'),
            'heroes' => $request->input('heroes'),
        ]);

        return Inertia::render('Profiles/Edit', [
            'profile' => $profile,
        ]);
    }


    public function show(Profile $profile)
    {
        $blogs = $profile->user->blogs;
        $status = $profile->user->status;
        $profile_picture = URL::to('/images/' . $profile->profile_picture);
        return Inertia::render('Profiles/Show', [
            'profile' => $profile,
            'blogs' => $blogs,
            'status' => $status,
            'url' => url("/profile/{$profile->id}/show"),
            'profile_picture' => $profile_picture,
        ]);
    }

    public function display(Request $request, $page = 1)
    {
        $perPage = 50; // Number of profiles per page
        $profiles = Profile::where('user_id', '!=', Auth::id())
            ->skip(($page - 1) * $perPage)
            ->take($perPage)
            ->get();

        return Inertia::render('Profiles/Display', [
            'profiles' => $profiles,
            'page' => $page,
        ]);
    }

    public function showUploadForm(Profile $profile)
    {
        return Inertia::render('Profiles/Upload', [
            'profile' => $profile,
            'id' => $profile->id ?? null,
        ]);
    }


    public function upload(Request $request, Profile $profile)
    {
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imageName = time() . '.' . $request->profile_picture->getClientOriginalExtension();
        $request->profile_picture->move(public_path('images'), $imageName);

        // Delete the previous image if it's not the placeholder
        if ($profile->profile_picture && $profile->profile_picture !== 'placeholder.png') {
            File::delete(public_path('images/' . $profile->profile_picture));
        }

        $profile->profile_picture = $imageName;
        $profile->save();

        return Inertia::render('Profiles/Upload', [
            'success' => 'Success! Photo updated. View your profile.',
            'profile' => $profile,
            'id' => $profile->id,
        ]);
    }

    public function removeImage(Profile $profile)
    {
        if ($profile->profile_picture && $profile->profile_picture !== 'placeholder.png') {
            File::delete(public_path('images/' . $profile->profile_picture));

            $profile->profile_picture = 'placeholder.png';
            $profile->save();

            return Inertia::render('Profiles/Upload', [
                'success' => 'Success! Photo removed. View your profile.',
                'profile' => $profile,
                'id' => $profile->id,
            ]);
        }
    }

    public function Blogs($profile_id)
    {
        $user = User::where('id', $profile_id)->with(['profile', 'blogs'])->first();

        return Inertia::render('Profiles/Blogs', [
            'user' => $user->toArray(),
        ]);
    }



}
