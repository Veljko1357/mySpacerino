<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('/home');
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return redirect(route('profiles.index'));
    })->name('dashboard');




    Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->name('users.index');
    Route::get('/users/{user}/edit', [App\Http\Controllers\UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [App\Http\Controllers\UserController::class, 'update'])->name('users.update');



    Route::get('/profiles/display/{page?}', [App\Http\Controllers\ProfileController::class, 'display'])->name('profiles.display');
    Route::resource('profiles', App\Http\Controllers\ProfileController::class);
    Route::get('/home', [App\Http\Controllers\ProfileController::class, 'index'])->name('profiles.index');


    Route::resource('profiles', App\Http\Controllers\ProfileController::class)
        ->except(['upload', 'removeImage']); // Exclude the new methods

    Route::get('profiles/{profile}/upload', [App\Http\Controllers\ProfileController::class, 'showUploadForm'])->name('profiles.show-upload-form');
    Route::post('profiles/{profile}/upload', [App\Http\Controllers\ProfileController::class, 'upload'])->name('profiles.upload');
    Route::put('profiles/{profile}/remove-image', [App\Http\Controllers\ProfileController::class, 'removeImage'])->name('profiles.remove-image');
    Route::get('/display/{page?}', [App\Http\Controllers\ProfileController::class, 'display'])->name('profiles.display');
    Route::get('/profiles/{profile}/show', [App\Http\Controllers\ProfileController::class, 'show'])->name('profiles.show');
    Route::get('/profile/{profile_id}/blogs', [App\Http\Controllers\ProfileController::class, 'Blogs'])->name('profiles.blogs');



    Route::get('/statuses/{status}/edit', [App\Http\Controllers\StatusController::class, 'edit'])->name('statuses.edit');
    Route::resource('statuses', App\Http\Controllers\StatusController::class)->except(['edit']);

    Route::get('blogs/create', [App\Http\Controllers\BlogController::class, 'create'])->name('blogs.create');
    Route::post('blogs', [App\Http\Controllers\BlogController::class, 'store'])->name('blogs.store');
    Route::get('blogs', [App\Http\Controllers\BlogController::class, 'index'])->name('blogs.index');
    Route::get('/blogs/display/{page}', [App\Http\Controllers\BlogController::class, 'display'])->name('blogs.display');
    Route::get('/blogs/{id}/show', [App\Http\Controllers\BlogController::class, 'show'])->name('blogs.show');
    Route::post('blogs/{blog}/comments', [App\Http\Controllers\CommentController::class, 'store'])->name('comments.store');
    Route::get('/blogs/link/{unique_link}', [App\Http\Controllers\BlogController::class, 'showByUniqueLink'])->name('blogs.showByUniqueLink');



});



