import Link from "next/link";
import { FaBriefcase, FaCreditCard, FaUser } from "react-icons/fa";
import "./OnboardingSteps.css";

function SolicitudSteps() {
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
                                    <strong>Paso 1</strong>: Verifica Identidad
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="https://signup.metamap.com/?merchantToken=628bb05bc5007d001b7108ab&flowId=679946e6455dc6001cc751d1">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="step">
                                <h4>
                                    <FaCreditCard />
                                    <strong>Paso 2</strong>: Consulta Historial Crediticio
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="https://signup.metamap.com/?merchantToken=628bb05bc5007d001b7108ab&flowId=67994833d79da4001c4705aa">
                                        <button className="btn">Agregar</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="step">
                                <h4>
                                    <FaBriefcase />
                                    <strong>Paso 3</strong>: Información Laboral
                                </h4>
                                <div className="btn-container">
                                    <Link style={linkStyle} href="/laboral">
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
};

export default SolicitudSteps;
