import React, { useState } from "react";
import {Link} from 'react-router-dom'

// Interface para o tipo de dados do usuário
interface User {
  id: number;
  nome: string;
  email: string;
}

const UserList = () => {
  // Dados simulados de usuários
  const [users, setUsers] = useState<User[]>([
    { id: 1, nome: "João", email: "joao@example.com" },
    { id: 2, nome: "Maria", email: "maria@example.com" },
    { id: 3, nome: "Pedro", email: "pedro@example.com" },
  ]);

  // Função para apagar o usuário
  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Função para editar o usuário (essa função pode abrir um modal ou formulário)
  const handleEdit = (user: User) => {
    // Aqui você pode abrir um formulário para editar o usuário
    console.log("Editar usuário:", user);
  };

  return (
    <div className="user-list-container">
      <h2 className="text-white text-2xl font-semibold mb-4">Usuários Cadastrados</h2>

      <table className="min-w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th className="text-white px-4 py-2">Nome</th>
            <th className="text-white px-4 py-2">Email</th>
            <th className="text-white px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="text-white px-4 py-2">{user.nome}</td>
              <td className="text-white px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {/* Botões para editar e deletar */}
                <Link
                  to='/edit_user'
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
