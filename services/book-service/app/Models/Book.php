<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
    'title',
    'author_id',
    'category_id'
    ];

    // 🔥 Relasi ke Author (1 book punya 1 author)
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    // 🔥 Relasi many-to-many ke Category
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}