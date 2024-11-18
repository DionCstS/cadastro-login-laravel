import React from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm, Link, Head } from '@inertiajs/react';
import '../../../css/style.css';
import '../../../css/register.css';

export default function LoginForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="wrapper">
            <Head title="Registrar" />
            <form onSubmit={submit}>
                <h1>Registrar</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <FaEnvelope className="icon" />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Confirmar Senha"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <FaLock className="icon" />
                    {errors.password_confirmation && (
                        <span className="error">{errors.password_confirmation}</span>
                    )}
                </div>

                <div className="remember-forgot">
                    <Link href={route('login')} className="link">
                        Já está registrado?
                    </Link>
                </div>

                <button type="submit" disabled={processing}>
                    Registrar
                </button>
            </form>
        </div>
    );
}
