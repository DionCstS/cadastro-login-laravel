import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function UserIndex({auth, users}){
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200
                leading-tight ">Usuários</h2>}
        >
            <Head title="Usuário" />

            <div className="py-4 max-w-7x1 mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg 
                dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Listar</h3>
                        <div className="flex space-x-4">
                            <PrimaryButton>
                                Cadastrar
                            </PrimaryButton>
                        </div>
                    </div> 

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <td className="px-6 py-3 text-left text-sm font-medium
                                text-gray-500 trancking-wider">ID</td>
                                <td className="px-6 py-3 text-left text-sm font-medium
                                text-gray-500 trancking-wider">Nome </td>
                                <td className="px-6 py-3 text-left text-sm font-medium
                                text-gray-500 trancking-wider">E-mail</td>
                                <td className="px-6 py-3 text-center text-sm font-medium
                                text-gray-500 trancking-wider">Ações</td>
                            </tr>
                        </thead>
                    </table>

                </div>

            </div>

        </AuthenticatedLayout>
    )
}