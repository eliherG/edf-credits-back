"use client";
import { useRouter } from 'next/navigation';
import "./InfoFinancieraForm.css";

const InfoFinancieraForm = () => {
    const router = useRouter();

    const handleGoBack = () => router.push('/solicitud');

    return (
        <div className="form-wrapper">
            <div className="form-box">
                {/* Botón de regreso con la flecha */}
                <button className="go-back-btn" onClick={handleGoBack}>
                    <span className="arrow">&#8592;</span>Regresar
                </button>

                <form>
                    {/* Campo: Egresos */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Egresos</label>
                        <input
                            type="number"
                            name="egresos"
                            id="egresos"
                            placeholder="Ingresa tus egresos"
                            min="0"
                            step="100"
                        />
                    </div>

                    {/* Campo: Dependientes Economicos */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Dependientes Economicos</label>
                        <input
                            type="number"
                            name="dependientes_economicos"
                            id="dependientes_economicos"
                            placeholder="Dependientes Economicos"
                        />
                    </div>

                    {/* Campo: Banco */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Banco</label>
                        <input
                            type="string"
                            name="banco"
                            id="banco"
                            placeholder="Ingresa el nombre de tu Banco"
                        />
                    </div>

                    {/* Campo: Pais */}
                    <div className="form-field">
                        <label htmlFor="empresa">Pais</label>
                        <select name="empresa" id="empresa">
                            <option>Seleccione una Pais</option>
                            <option value="mexico">México</option>
                            <option value="honduras">Hondura</option>
                            <option value="colombia">Colombia</option>
                        </select>
                    </div>


                    {/* Campo: Cuenta */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Cuenta</label>
                        <input
                            type="string"
                            name="cuenta"
                            id="cuenta"
                            placeholder="Ingresa tu numero de cuenta"
                        />
                    </div>
                    
                    {/* Campo: CLABE */}
                    <div className="form-field">
                        <label htmlFor="sueldo">CLABE</label>
                        <input
                            type="string"
                            name="clabe"
                            id="clabe"
                            placeholder="Ingresa tu CLABE"
                        />
                    </div>

                    {/* Campo: Cuenta Propia */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Cuenta Propia?</label>
                        <input
                            type="checkbox"
                            name="cuenta_propia"
                            id="cuenta_propia"
                        />
                    </div>

                    <div className="form-actions">
                        <button className="submit-btn" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InfoFinancieraForm