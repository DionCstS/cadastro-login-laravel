// src/Components/LogoutButton.js
import React from 'react';
import { Link } from '@inertiajs/react';

const LogoutButton = () => {
    return (
        <Link href={route('logout')} method="post" as="button">
            Sair
        </Link>
    );
};

export default LogoutButton;
