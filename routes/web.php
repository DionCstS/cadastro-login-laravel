<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TesteController;
use App\Http\Controllers\TtesteController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/users', [UserController::class, 'index'])->name('user.index');
});

require __DIR__.'/auth.php';

Route::get('/my-profile', [TesteController::class, 'index'])->name('profile.index');

// Redirecionar a página inicial para a tela de login
Route::get('/', function () {
    return redirect()->route('login'); // Redireciona para a rota nomeada 'login'
})->name('teste');

Route::get('/teste', [TtesteController::class, 'index'])->name('teste.index');
