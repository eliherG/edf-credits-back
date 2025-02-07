import Image from "next/image";
import Link from "next/link";
import "./HeroBanner.css";

function HeroBanner() {
    return (
        <div className="heroBanner-container">
            <div className="heroBanner_item-1">
                <div className="heroBanner_header-text">
                    <h1>El préstamo personal que necesitas con aprobacion en 48 hrs*</h1>
                    <Link href="/solicitar-credito">
                        <button className="btn-primary">Solicitar mi Crédito</button>
                    </Link>
                </div>
            </div>
            <div className="heroBanner_item-2">
                <div>
                    <Image
                        src="/images/header.webp"
                        alt="El de Fiar Logo"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
