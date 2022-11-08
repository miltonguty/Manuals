import { Image } from "@mui/icons-material";
import { Button, Icon } from "@mui/material";
import Link from "next/link";
import style from "../styles/Menu.module.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

function Menu() {
  return (
    <div className={style.nav}>
      <input type="checkbox" id="check" />
      <label className="checkbtn">
        <Icon className="fas fa-bars"></Icon>
        <Icon baseClassName="fas" className="fa-plus-circle" />
      </label>
      <a href="#" className="enlace">
        <Image src="logo.png" alt="" className="logo" />
      </a>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={style.li}>
          <Link href={"/motorcycle"}>Motos</Link>
        </li>
        <li className={style.li}>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <section className={style.section}></section>
    </div>
  );
}

export default Menu;
