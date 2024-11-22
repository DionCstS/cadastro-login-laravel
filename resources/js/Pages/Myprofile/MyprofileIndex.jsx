import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'; // Importação correta
import { usePage } from '@inertiajs/react';
import '../../../css/style.css';
import '../../../css/user.css';
import LogoutButton from '@/Components/LogoutButton';

const UserIndex = () => {
    const { user } = usePage().props;

    if (!user) {
        console.error("Usuário não está definido nas props.");
        return <div>Carregando...</div>;
    }

    const [fotoPerfil, setFotoPerfil] = useState(user.photo || '/images/avatar-profile.jpg');
    const [nome, setNome] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [cpf, setCpf] = useState(user.cpf);

    const formatCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFotoPerfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="profile-card">
                <div className="profile-header">
                    <label htmlFor="profile-picture-upload">
                        <img
                            src={fotoPerfil}
                            alt="Foto de Perfil"
                            className="profile-avatar"
                        />
                    </label>
                    <input
                        type="file"
                        id="profile-picture-upload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <h2>{nome}</h2>
                </div>
                <div className="profile-details">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>CPF:</strong> {formatCPF(cpf)}</p>
                </div>
                <div className="profile-actions">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};

export default UserIndex;
