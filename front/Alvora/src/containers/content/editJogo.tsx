import React, { useState } from "react";
import InputField from "./input"; 
import Button from "./button";

const Form = () => {
  const [formData, setFormData] = useState({
    nomeJogo: "",
    preco: "",
    desconto: "",
    plataforma: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container space-y-6">
      <h2 className="text-white text-2xl font-semibold">Adicione um desconto</h2>

      <InputField
        label="Nome do Jogo"
        placeholder="Insira o nome do jogo"
        value={formData.nomeJogo}
        onChange={handleChange}
        name="nomeJogo"
      />

      <InputField
        label="Preço"
        placeholder="R$"
        value={formData.preco}
        onChange={handleChange}
        name="preco"
        type="number"
      />

      <InputField
        label="Desconto aplicado"
        placeholder="Exemplo: 50%"
        value={formData.desconto}
        onChange={handleChange}
        name="desconto"
      />

      <div className="flex flex-col gap-1">
        <label className="text-white font-semibold">Loja</label>
        <select
          name="plataforma"
          value={formData.plataforma}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-lg bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Escolha a a loja</option>
          <option value="Steam">Steam</option>
          <option value="EpicGames">Epic Games</option>
          <option value="NUUVEM">Nuuvem</option>
          <option value="GOG">GOG.com</option>
          <option value="UbisoftStore">Ubisoft Store</option>
        </select>
      </div>

      <Button label="Salvar" />
    </form>
  );
};

export default Form;
