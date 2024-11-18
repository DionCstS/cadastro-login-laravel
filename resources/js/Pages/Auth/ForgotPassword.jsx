import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { useForm, Head } from '@inertiajs/react';
import '../../../css/style.css';
import '../../../css/forgotpassword.css';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="wrapper">
            <Head title="Recuperar Senha" />

            <form onSubmit={submit}>
                <h1>Recuperar senha</h1>
                <br /><br />

                <div className="remember-forgot">
                    <p>
                        Esqueceu sua senha? Sem problemas. Basta nos informar seu 
                        endereço de e-mail e enviaremos um e-mail com um link de 
                        redefinição que permitirá que você escolha uma nova senha.
                    </p>
                </div>

                {status && (
                    <div className="status-message">
                        {status}
                    </div>
                )}

                <div className="input-box">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <FaEnvelope className="icon" />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <button type="submit" disabled={processing}>
                    Solicitar
                </button>
            </form>
        </div>
    );
}
