<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TransactionController extends Controller
{
    public function index()
    {
        return Transaction::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required',
            'quantity' => 'required|integer'
        ]);

        // 🔥 INTER-SERVICE CALL ke book-service
        $book = Http::get('http://127.0.0.1:8001/api/books/' . $request->book_id);

        if (!$book->ok()) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $transaction = Transaction::create([
            'user_id' => 1, // sementara hardcode dulu
            'book_id' => $request->book_id,
            'quantity' => $request->quantity
        ]);

        return response()->json($transaction, 201);
    }
}