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
            <a href="">Recently Used Boards</a>
          </li>
          <li>
            <a href="">Most Used Boards</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="">
          <Button content={"Create"} />
        </a>
      </div>
    </header>
  );
}
