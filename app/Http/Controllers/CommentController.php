<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{

    public function store(Request $request, $blogId)
    {
        $request->validate([
            'content' => 'required',
        ]);

        $comment = new Comment([
            'user_id' => auth()->id(),
            'blog_id' => $blogId,
            'content' => $request->input('content'),
        ]);

        $comment->save();

        $comment->load('user');

        return Inertia::render('CommentAdded', [
            'comment' => $comment,
        ], 201);
    }

}
