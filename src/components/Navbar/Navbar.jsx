import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

async function Navbar() {
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    };

    return (
    <>
        <nav className="navbar">
            <Link href="/" passHref>
                <Image
                    src="/images/logo-edf.webp"
                    alt="El de Fiar Logo"
                    width={140}
                    height={40}
                    priority
                />
            </Link>
            <ul className="navbar-links">
                <li>
                    <Link style={linkStyle} href="/iniciar-sesion">
                        <p style={{ marginTop: "10px"}}>Iniciar Sesión</p>
                    </Link>
                </li>
                <li>
                    <Link style={linkStyle} href="/solicitar-credito">
                        <p className="btn-primary-2">Solicitar mi Crédito</p>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
