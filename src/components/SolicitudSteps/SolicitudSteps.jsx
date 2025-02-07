import Link from "next/link";
import { FaCreditCard, FaFileAlt, FaUser, FaUsers } from "react-icons/fa";
import "./SolicitudSteps.css";

const SolicitudSteps = () => {
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    };

    return (
        <>
            <br /><br /><br />
            <div className="solicitud-container">
                <div className="solicitud">
                    <div className="contenedor">
                        <div className="solicitud_title-container">
                            <h2>Necesitamos algunos datos para crear tu cuenta</h2>
                        </div>
                        <div className="solicitud_steps-container">
                            <div className="step">
                                <h4>
                                    <FaUser />
                                    <strong>Paso 1</strong>: Información Personal
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="/informacion-personal">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="step">
                                <h4>
                                    <FaUsers />
                                    <strong>Paso 2</strong>: Referencias
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="/referencias">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="step">
                                <h4>
                                <FaCreditCard />
                                    <strong>Paso 3</strong>: Información Financiera
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="/informacion-financiera">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="step">
                                <h4>
                                    <FaFileAlt />
                                    <strong>Paso 4</strong>: Documentos
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="https://signup.metamap.com/?merchantToken=628bb05bc5007d001b7108ab&flowId=67994833d79da4001c4705aa">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="solicitud_ayuda-container">
                            <Link style={linkStyle} href="/">
                                <p>¿Necesitas ayuda? Contáctanos</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SolicitudSteps