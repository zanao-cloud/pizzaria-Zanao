
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route

}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
import NovoProduto from "../pages/NovoProduto/NovoProduto"
import NovaCategoria from "../pages/NovaCategoria/NovaCategoria"
import ListarEstoque from "../pages/ListarEstoque/ListarEstoque"
import EditarProduto from "../pages/EditarProduto/EditarProduto"
import EditarCategoria from "../pages/EditarCategoria/EditarCategoria"
const AppRoutes = () =>{


    return (
     <HashRouter>
          <Routes>
            
             <Route
              path="/"
              element={<HomeFuncionario/>}
             />

             <Route
              path="/home"
              element={<HomeFuncionario/>}
             />

             <Route
              path="/produtos"
              element={<ListarProduto/>}
             />

              <Route
              path="/Categorias"
              element={<ListarCategoria/>}
             />
             <Route
              path="/Produtos/Novo"
              element={<NovoProduto/>}
             />
             <Route
              path="/Categorias/Novo"
              element={<NovaCategoria/>}
             />
           

             <Route
              path="/estoque"
              element={<ListarEstoque/>}
             />
              <Route
              path="/produtos/editar/:id"
              element={<EditarProduto/>}
             />
               <Route
              path="/Categorias/editar/:id"
              element={<EditarCategoria/>}
             />

          </Routes>
     </HashRouter>
         
    )
}

export default AppRoutes