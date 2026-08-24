import React, {useState, useEffect} from "react"
import api from "../../services/api"
import {Link} from "react-router-dom"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../components/CredentialUser"
import Modal from "../../components/Modal"
const ListarProduto = () => {
 
 
// useState  : gerenciar estado de uma variável
// Exemplo   : Declare uma variável chamada número iniciando o valor com 0 
// const [numero, setNumero] = useState([0])       -> a função "setNumero" é utilizada para alterar o valor da variável "numero"
// useEffect : executar açõesapós a renderização da página. Exemplo: Acessar API`s, rodar crônometros, executar ações a partir de cliques  



// iniciando uma variável produto com um array vazio "[]"
 const [produtos, setProdutos] = useState([])
 const [isModalOpen , setIsModalOpen] = useState (false)
 const [idProdutoAExcluir , setIdProdutoAExcluir] = useState (null)
 useEffect(()=>{
 api 
 .get("/produtos")
 .then((response)=>{
 // deu certo
 setProdutos(response.data.data)
 console.log(response.data.data)
 })
 .catch((error)=>{
 // deu errado
 console.error("Erro ao buscar a lista de produtos" , error)
 })

 }, [])
 const openModal = (id) => {
  setIdProdutoAExcluir(id)
  setIsModalOpen(true)
}

const deleteProduto = async () => {
  try {
    const response = await api.delete(`/produtos/${idProdutoAExcluir}`)
    alert(response.data.message)

    setProdutos((produtosAtuais) =>
      produtosAtuais.filter(
        (produto) => produto.id !== idProdutoAExcluir
      )
    )
  } catch (error) {
    console.error(`Não foi possível a exclusão do produto com o id ${idProdutoAExcluir}`)
  }
  setIsModalOpen(false)
}
/*
 const arrayProdutos = [
       {
           id: 1,
           nome: "Pizza de Calabresa",
           precoVenda: 59.90,
           descricao: "Pizza de calabresa com bastante cebola"
       },
       {
           id: 2,
           nome: "Pizza de Mussarela",
           precoVenda: 69.90,
           descricao: "Pizza de mussarela com tomates frescos"
       },
       {
           id: 3,
           nome: "Pizza de Frango",
           precoVenda: 63.00,
           descricao: "Pizza de frango com catupiry"
       }
    ] */
 
    return (
 
        <div className="container">
 
            <MenuFuncionario/>
            <CredentialUser title="Lista de Produtos"/>
 
 
 
        <div className="table-responsive">
 <table className="table table-bordered table-striped table-hover">
 <thead className="table-success">
 <tr>
 <th>Nome</th>
 <th>Preço</th>
 <th>Descrição</th>
 <th>Ações</th> {/* Nova coluna de Ações */}
 </tr>
 </thead>
 <tbody>
 
   {produtos.map((produto)=> (
 
 
 
 <tr key={produto.id}>
 <td style={{ fontSize: "13px" }}>{produto.nome}</td>
 <td style={{ fontSize: "13px" }}>
 
  {
    new Intl.NumberFormat("pt-BR" ,  {
 
         style: "currency",
         currency: "BRL" ,
   
 
        }).format(produto.precoVenda)
         }
 
 
 
 </td>
 <td style={{ fontSize: "13px" }}>{produto.descricao}</td>
 <td className="text-center fs-6" style={{ width: "100px" }}>
 {/* Botão de Editar */}
 <button
 className="btn btn-sm btn-primary me-2">
 <i className="fas fa-pencil-alt"></i>{" "}
 {/* Ícone de editar */}
 </button>
 {/* Botão de Excluir */}
 <button
 className="btn btn-sm btn-danger"
    onClick= {() => openModal (produto.id)}

    >
 <i className="fas fa-trash-alt"></i>{" "}
 {/* Ícone de excluir */}
 </button>
 </td>
 </tr>
 
 
   ))}
 
 
 
 
 
 
 
 </tbody>
 </table>
 </div>

<div className="text-end mt-3">
<Link className={`btn btn-success`} to="/Produtos/Novo">           
<i className="fas fa-plus">

</i>
Novo Produto
              </Link>

</div>
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onConfirm={deleteProduto}
/>
        </div>
    )
}
 
export default ListarProduto