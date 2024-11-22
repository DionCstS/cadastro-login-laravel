import React from 'react';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm, Link, Head } from '@inertiajs/react';
import '../../../css/style.css';
import '../../../css/register.css';
import InputMask from 'react-input-mask';

export default function LoginForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        cpf: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    // Função submit com sanitização do CPF
    const submit = (e) => {
        e.preventDefault();

        // Envia os dados com o CPF limpo (sem máscara)
        post(route('register'), {
            data, // Envia o CPF sem a máscara, pois já foi sanitizado na alteração do onChange
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
                    {/* Campo CPF com máscara */}
                    <InputMask
                        mask="999.999.999-99"
                        value={data.cpf}
                        onChange={(e) => setData('cpf', e.target.value.replace(/\D/g, ''))} // Remove a máscara aqui
                    >
                        {(inputProps) => (
                            <input
                                {...inputProps}
                                type="text"
                                placeholder="CPF"
                                required
                            />
                        )}
                    </InputMask>
                    <FaUser className="icon" />
                    {errors.cpf && <span className="error">{errors.cpf}</span>}
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
