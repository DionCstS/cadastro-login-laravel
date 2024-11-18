import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div>
        {children} {/* O formulário de login será renderizado aqui */}
    </div>
        
  );
}
