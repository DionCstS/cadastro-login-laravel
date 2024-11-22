<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TtesteController extends Controller
{
    public function index(): Response
{
    echo 'ta funcionando';
}
    
}

