<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    protected $fillable = [
        'user_id',
        'username',
        'bio',
        'bucket_list',
        'general_interests',
        'music',
        'movies',
        'series',
        'books',
        'heroes',
        'profile_picture',
    ];


}
