<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name'
    ];

    // 🔥 many-to-many ke Book
    public function books()
    {
        return $this->belongsToMany(Book::class);
    }
}