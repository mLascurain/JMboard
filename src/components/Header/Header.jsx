import "./Header.css";
import { Button } from "../Button/Button";
export function Header() {
  return (
    <header>
      <div>
        <h1>
          <span>JM</span>board
        </h1>
        <ul className="menu">
          <li>
            <a href="">Boards Recientes</a>
          </li>
          <li>
            <a href="">Board Mas Utilizados</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="">
          <Button content={"Crear"} />
        </a>
      </div>
    </header>
  );
}
