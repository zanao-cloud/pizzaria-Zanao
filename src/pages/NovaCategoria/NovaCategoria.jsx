import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"
import api from "../../services/api"
 
const NovaCategoria = () => {
 
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const navigate = useNavigate();
 
  const enviarCategoria = async (e) => {
    e.preventDefault();
 
    const categoria = {
      nome: nome,
      descricao: descricao
    }
 
    try {
      const response = await api.post("/categorias", categoria, {
        "Content-Type": "application/json"
      })
      alert(`${response.data.data.nome} cadastrada com sucesso!`)
      setNome("")
      setDescricao("")
      navigate("/Categorias")
    } catch (error) {
      console.error(`Não foi possível salvar a categoria ${error}`)
    }
  }
 
  return (
<div className="container">
<CredentialUser title="Cadastro de Categoria" />
<MenuFuncionario />
<form onSubmit={enviarCategoria} className="container-fluid p-4">
<div className="mb-3">
<label className="form-label">Nome:</label>
<input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
</div>
<div className="mb-3">
<label className="form-label">Descrição:</label>
<textarea
            className="form-control"
            rows="3"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
></textarea>
</div>
 
        <button type="submit" className="btn btn-primary w-100">
          Adicionar Categoria
</button>
 
      </form>
 
    </div>
  )
}
 
export default NovaCategoria