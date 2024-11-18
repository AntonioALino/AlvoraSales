import React, { useState } from "react";
import InputField from "./input"; 
import Button from "./button";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignup && formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container space-y-6">
      <h2 className="text-white text-2xl font-semibold">{isSignup ? "Cadastre-se" : "Faça Login"}</h2>

    
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

      {isSignup && (
        <InputField
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          name="confirmarSenha"
          type="password"
        />
      )}

      <Button label={isSignup ? "Cadastrar" : "Entrar"} />

      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          className="text-teal-400 hover:text-teal-600"
        >
          {isSignup ? "Já tem uma conta? Faça login" : "Não tem uma conta? Cadastre-se"}
        </button>
      </div>
    </form>
  );
};

export default Form;
