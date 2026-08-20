import CredentialUser from "../../components/CredentialUser"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"

const ListarCategoria = () =>{

return ( 
    <div className="container">
        <MenuFuncionario/>
        <CredentialUser title="Lista de Categorias"/>
        <p>Lista de Categorias dos Produtos</p>
    </div>
)
}

export default ListarCategoria