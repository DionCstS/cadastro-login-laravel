import React from 'react';
import '../../../css/teste.css'
import '../../../css/style.css'; // Importando o CSS atualizado
import { useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {status}
        </div>
      )}

      <div className="wrapper">
        <form onSubmit={submit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Usuário"
              value={data.email}
              required
              onChange={(e) => setData('email', e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          {errors.email && <div className="input-error">{errors.email}</div>}

          <div className="input-box">
            <input
              type="password"
              placeholder="Senha"
              value={data.password}
              required
              onChange={(e) => setData('password', e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          {errors.password && <div className="input-error">{errors.password}</div>}

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
              />
              Lembrar-me
            </label>
            {canResetPassword && (
              <a href={route('password.request')}>Esqueceu a senha?</a>
            )}
          </div>

          <button type="submit" disabled={processing}>
            Login
          </button>

          <div className="register-link">
            <p>
              Não tem uma conta? <a href={route('register')}>Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
