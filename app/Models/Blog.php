<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'user_id',
        'title',
        'text',
        'privacy',
        'unique_link',
        'comments_enabled',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}

