<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    
    {
        $users = User::orderByDesc('id')->get();

        return Inertia::render('Users/UserIndex', ['users' => $users]);
    }

    
}
