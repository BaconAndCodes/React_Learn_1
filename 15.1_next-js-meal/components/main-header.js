import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food" priority/>
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
