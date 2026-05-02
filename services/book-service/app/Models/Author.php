<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = [
        'name'
    ];

    // 🔥 1 author punya banyak buku
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}