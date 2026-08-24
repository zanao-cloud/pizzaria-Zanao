
import styles from "./MenuFuncionario.module.css"
import {Link} from "react-router-dom"
const MenuFuncionario = () => {

    return (
        <div>
              <nav className={`navbar navbar-expand-lg navbar-light bg-light p-2 rounded shadow-sm w-100  ${styles.menu} `}>
        <Link className={`navbar-brand ${styles.logo}`} to="/home">
          Home
        </Link>

        {/* Botão Hamburguer para telas menores */}
        <button
          className="navbar-toggler"  
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className={`nav-link ${styles.itemMenu}`} to="/produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.itemMenu}`} to="/Categorias">
                Categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.itemMenu}`} to="/estoque">
                Estoque
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Opções
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Ação 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Ação 2
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Outra opção
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link disabled">Desativado</Link>
            </li>
          </ul>

          {/* Botão de Logout alinhado à direita */}
          <button type="button" className="btn btn-primary">
            Logout
          </button>
        </div>
      </nav>
        </div>
    )
}

export default MenuFuncionario