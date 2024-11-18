import React, { useState } from "react";
import InputField from "./input"; 
import Button from "./button";

const FormCadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados do formulário de cadastro:", formData);
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
