import React, { useState, FormEvent } from "react";
import InputField from "./input"; 
import Button from "./button";

const FormCadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    confirmarSenha: "",
  });

   // Tipando o evento de submissão
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    try {
        const response = await fetch('http://localhost:8080/alvora/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            const result = await response.json();
            console.log('Sucesso:', result);
        } else {
            console.error('Erro ao enviar:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de rede:', error);
    }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  return (
    <form onSubmit={handleSubmit} className="form-container space-y-6">
      <h2 className="text-white text-2xl font-semibold">Cadastre-se</h2>

      <InputField
        label="E-mail"
        placeholder="Insira seu e-mail"
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
      />

      <InputField
        label="Senha"
        placeholder="Insira sua senha"
        value={formData.senha}
        onChange={handleChange}
        name="senha"
        type="password"
      />

      <InputField
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        value={formData.confirmarSenha}
        onChange={handleChange}
        name="confirmarSenha"
        type="password"
      />

      <Button label="Cadastrar" />
    </form>
  );
};

export default FormCadastro;
