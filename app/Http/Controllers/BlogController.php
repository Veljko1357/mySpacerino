<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function index()
    {
        $blogs = Blog::where('user_id', Auth::id())
            ->with(['user.profile', 'comments'])
            ->get();

        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs->toArray(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Blogs/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'privacy' => 'required|in:public,private,favorites,link_only',
            'comments_enabled' => 'boolean',
        ]);

        $uniqueLink = null;
        if ($request->input('privacy') === 'link_only') {
            // Generate a random link
            $uniqueLink = Str::random(10);
        }

        $blog = new Blog([
            'user_id' => auth()->id(),
            'title' => $request->input('title'),
            'text' => $request->input('content'),
            'privacy' => $request->input('privacy'),
            'unique_link' => $uniqueLink,
            'comments_enabled' => $request->input('comments_enabled', false),
        ]);

        $blog->save();


        Log::info('Saved blog:', $blog->toArray());

        return redirect()->route('blogs.show', ['id' => $blog->id])->with('success', 'Blog created successfully.');
    }

    public function display(Request $request, $page = 1)
    {
        $perPage = 15; // Number of blogs per page
        $blogs = Blog::with(['user.profile', 'comments'])
            ->skip(($page - 1) * $perPage)
            ->take($perPage)
            ->get();

        return Inertia::render('Blogs/Display', [
            'blogs' => $blogs,
            'page' => intval($page), // Convert the page to an integer
        ]);
    }

    public function show($id)
    {
        $blog = Blog::with(['user.profile', 'comments.user.profile'])->findOrFail($id);

        $user = auth()->user();
        $isAuthor = $user && $user->id === $blog->user_id;
        $isPublic = $blog->privacy === 'public';

        if (!$isAuthor && !$isPublic) {
            if ($blog->privacy === 'private') {
                abort(403, 'This blog is private.');
            }
//
            if ($blog->privacy === 'link_only') {
                if (!$user || $user->cannot('view', $blog)) {
                    abort(403, 'This blog is only accessible via its unique link.');
                }
            }

        }

        return Inertia::render('Blogs/Show', [
            'blog' => $blog,
        ]);
    }

    public function showByUniqueLink($unique_link)
    {
        $blog = Blog::where('unique_link', $unique_link)->with(['user', 'user.profile', 'comments'])->first();

        if (!$blog) {
            abort(404);
        }

        return Inertia::render('Blogs/Show', [
            'blog' => $blog->toArray(),
        ]);
    }
}
