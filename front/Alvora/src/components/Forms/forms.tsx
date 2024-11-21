import React, { useState, ChangeEvent, FormEvent } from "react";
import InputField from "./input";
import Button from "./button";

interface FormData {
  nomeJogo: string;
  preco: string;
  desconto: string;
  plataforma: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nomeJogo: "",
    preco: "",
    desconto: "",
    plataforma: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log("Campo alterado:", name, "Valor:", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    // Adicione logs para verificar os valores antes da verificação
    console.log("formData.nomeJogo:", formData.nomeJogo);
    console.log("formData.plataforma:", formData.plataforma);

    // Verificação para campos obrigatórios
    if (!formData.nomeJogo || !formData.plataforma) {
      setErrorMessage("Nome do jogo e plataforma são obrigatórios.");
      return;
    }

    const payload = {
      name: formData.nomeJogo,
      originalPrice: parseFloat(formData.preco), // Converte o preço para número
      discount: parseInt(formData.desconto), // Converte o desconto para número inteiro
      plataforms: formData.plataforma,
    };

    console.log("Dados enviados:", payload);

    try {
      const response = await fetch("http://localhost:8080/alvora/games/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Resposta da API:", data);
        setSuccessMessage("Desconto adicionado com sucesso!");
        setFormData({
          nomeJogo: "",
          preco: "",
          desconto: "",
          plataforma: "",
        });
      } else {
        const errorData = await response.json();
        console.log("Erro da API:", errorData);
        setErrorMessage(`Erro ao salvar: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.log("Erro ao se conectar com o servidor:", error);
      setErrorMessage("Erro ao se conectar com o servidor. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="http://localhost:8080/alvora/games/register" method="POST" className="form-container space-y-6">
      <h2 className="text-white text-2xl font-semibold">Adicione um desconto</h2>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

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
        placeholder="Exemplo: 50"
        value={formData.desconto}
        onChange={handleChange}
        name="desconto"
        type="number"
      />

      <div className="flex flex-col gap-1">
        <label className="text-white font-semibold">Loja</label>
        <select
          name="plataforma"
          value={formData.plataforma}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-lg bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Escolha a loja</option>
          <option value="Steam">Steam</option>
          <option value="EpicGames">Epic Games</option>
          <option value="NUUVEM">Nuuvem</option>
          <option value="GOG">GOG.com</option>
          <option value="UbisoftStore">Ubisoft Store</option>
        </select>
      </div>

      <Button label="Salvar"  />
    </form>
  );
};

export default Form;
