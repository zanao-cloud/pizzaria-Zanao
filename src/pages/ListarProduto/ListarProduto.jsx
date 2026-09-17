import React, {useState, useEffect} from "react"
import api from "../../services/api"
import {Link, useNavigate} from "react-router-dom"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
 
 
const ListarProduto = () => {
 
 
// useState  : gerenciar estado de uma variável
// Exemplo   : Declare uma variável chamada número iniciando o valor com 0 
// const [numero, setNumero] = useState([0])       -> a função "setNumero" é utilizada para alterar o valor da variável "numero"
// useEffect : executar açõesapós a renderização da página. Exemplo: Acessar API`s, rodar crônometros, executar ações a partir de cliques  



// iniciando uma variável produto com um array vazio "[]"
 const [produtos, setProdutos] = useState([])

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
 
 
 
        <div className="table-responsive">
 <table className="table table-bordered table-striped table-hover">
 <thead className="table-success">
 <tr>
 <th>Nome</th>
 <th>Preço</th>
 <th>Descrição</th>
 <th>Categoria</th>
 <th>Status</th>
 <th>Ações</th>
 {/* Nova coluna de Ações */}
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
 <td style={{ fontSize: "13px" }}>{produto.categoria?.nome || ""}</td>
 <td style={{ fontSize: "13px" }}>
    {produto.codStatus === true ? (
        <span className="badge bg-success">Ativo</span>
    ) : (
        <span className="badge bg-danger">Inativo</span>
    )}
 </td>
 <td className="text-center fs-6" style={{ width: "120px" }}>

    {/* Botão de Editar */}
    <Link to={`/produtos/editar/${produto.id}`} className="btn btn-sm btn-primary me-2">
        <i className="fas fa-pencil-alt"></i>
    </Link>
 {/* Botão de Excluir */}
 <button
 className="btn btn-sm btn-danger">
 <i className="fas fa-trash-alt"></i>
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

        </div>
    )
}
 
export default ListarProduto