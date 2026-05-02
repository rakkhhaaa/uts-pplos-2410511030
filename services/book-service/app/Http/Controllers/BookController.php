<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function show($id)
{
    $book = Book::find($id);

    if (!$book) {
        return response()->json(['message' => 'Book not found'], 404);
    }

    return response()->json($book);
}

    public function store(Request $request)
    {
        $book = Book::create($request->only('title', 'author_id'));

        if ($request->has('categories')) {
            $book->categories()->sync($request->categories);
        }

        return response()->json($book, 201);
    }
}