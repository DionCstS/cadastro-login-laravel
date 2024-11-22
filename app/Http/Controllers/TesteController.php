<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TesteController extends Controller
{
    public function index(): Response
{
    // Obtém o usuário autenticado
    $user = Auth::user();

    // Renderiza a página com os dados do usuário
    return Inertia::render('Myprofile/MyprofileIndex', [
        'user' => $user
    ]);
}
    
}

