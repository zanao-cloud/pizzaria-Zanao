
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
import ListarEstoque from "../pages/ListarEstoque/ListarEstoque"

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
              path="/estoque"
              element={<ListarEstoque/>}
             />

          </Routes>
     </HashRouter>
         
    )
}

export default AppRoutes