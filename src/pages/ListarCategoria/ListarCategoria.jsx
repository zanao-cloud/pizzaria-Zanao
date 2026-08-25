import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"
import Modal from "../../components/Modal"
 
const ListarCategoria = () => {
 
  const [categorias, setCategorias] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idCategoriaAExcluir, setIdCategoriaAExcluir] = useState(null)
  const navigate = useNavigate();
 
  useEffect(() => {
    api
      .get("/categorias")
      .then((response) => {
        // deu certo
        setCategorias(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        // deu errado
        console.error("Erro ao buscar a lista de categorias", error)
      })
 
  }, [])
 
  const openModal = (id) => {
    setIdCategoriaAExcluir(id)
    setIsModalOpen(true)
  }
 
  const deleteCategoria = async () => {
    try {
      const response = await api.delete(`/categorias/${idCategoriaAExcluir}`)
      alert(response.data)
 
      setCategorias((categoriasAtuais) =>
        categoriasAtuais.filter(
          (categoria) => categoria.id !== idCategoriaAExcluir
        )
      )
    } catch (error) {
      console.error(`Não foi possível a exclusão da categoria com o id ${idCategoriaAExcluir}`)
    }
    setIsModalOpen(false)
  }
 
  return (
 
    <div className="container">
 
      <MenuFuncionario />
<CredentialUser title="Lista de Categorias" />
 
      <div className="table-responsive">
<table className="table table-bordered table-striped table-hover">
<thead className="table-success">
<tr>
<th>Nome</th>
<th>Descrição</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
 
            {categorias.map((categoria) => (
 
              <tr key={categoria.id}>
<td style={{ fontSize: "13px" }}>{categoria.nome}</td>
<td style={{ fontSize: "13px" }}>{categoria.descricao}</td>
<td className="text-center fs-6" style={{ width: "100px" }}>
<button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() =>
                      navigate(`/categorias/editar/${categoria.id}`)
                    }
>
<i className="fas fa-pencil-alt"></i>{" "}
</button>
<button
                    className="btn btn-sm btn-danger"
                    onClick={() => openModal(categoria.id)}
>
<i className="fas fa-trash-alt"></i>{" "}
</button>
</td>
</tr>
 
            ))}
 
          </tbody>
</table>
</div>
 
      <div className="text-end mt-3">
<Link className={`btn btn-success`} to="/Categorias/Novo">
<i className="fas fa-plus"></i>
          Nova Categoria
</Link>
 
      </div>
<Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={deleteCategoria}
      />
</div>
  )
}
 
export default ListarCategoria