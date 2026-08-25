import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CredentialsUser from "../../components/CredentialUser";
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import api from "../../services/api";
 
function EditarCategoria() {
  const [categoria, setCategoria] = useState({
    nome: "",
    descricao: "",
  });
 
  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    api
      .get(`/categorias/${id}`)
      .then((response) => {
        const dados = response.data.data;
        setCategoria(dados);
      })
      .catch((error) => {
        console.error(`Erro ao buscar a categoria.${error}`);
      });
  }, []);
 
  const atualizarCategoria = async (e) => {
    e.preventDefault();
 
    try {
      const response = await api.put(`/categorias/${categoria.id}`, categoria, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Categoria atualizada " + response.data);
      alert(`${response.data.data.nome} atualizada com sucesso`);
      navigate("/Categorias");
    } catch (error) {
      console.error(`Não foi possível salvar a categoria ${error}`);
    }
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
 
    const parsedValue = name === "codStatus" ? value === "true" : value;
 
    setCategoria((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };
 
  return (
 
    <div className="container mt-4">
<MenuFuncionario />
<CredentialsUser title="Edição de Categoria" />
 
      <form onSubmit={atualizarCategoria} className="bg-light p-4 rounded shadow">
<div className="mb-3">
<input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Digite o nome da categoria"
            value={categoria.nome}
            onChange={handleChange}
            required
          />
</div>
 
        <div className="mb-3">
<textarea
            name="descricao"
            className="form-control"
            rows="3"
            placeholder="Digite a descrição da categoria"
            value={categoria.descricao}
            onChange={handleChange}
            required
></textarea>
</div>
 
        <div className="mb-3">
<h6>Ativar ou Desativar Categoria</h6>
 
          <label>
<input
              type="radio"
              name="codStatus"
              value="true"
              checked={categoria.codStatus === true}
              onChange={handleChange}
            />
            Ativo
</label>
<br />
<label>
<input
              type="radio"
              name="codStatus"
              value="false"
              checked={categoria.codStatus === false}
              onChange={handleChange}
            />
            Inativo
</label>
</div>
<br />
 
        <button type="submit" className="btn btn-primary w-100">
          Enviar
</button>
</form>
</div>
  );
}
 
export default EditarCategoria;