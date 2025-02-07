"use client";
import "./InfoLaboralForm.css";
import { useRouter } from 'next/navigation';

function InfoLaboralForm() {
    const router = useRouter();

    const handleGoBack = () => router.push('/onboarding');

    return (
        <div className="form-wrapper">
            <div className="form-box">
                {/* Botón de regreso con la flecha */}
                <button className="go-back-btn" onClick={handleGoBack}>
                    <span className="arrow">&#8592;</span>Regresar
                </button>

                <form>
                    {/* Campo: Nombre de la Empresa */}
                    <div className="form-field">
                        <label htmlFor="empresa">Nombre de la Empresa</label>
                        <select name="empresa" id="empresa">
                            <option>Seleccione una Empresa</option>
                            <option value="tv-azteca">TV Azteca</option>
                            <option value="totalplay-telecomunicaciones">Totalplay Telecomunicaciones</option>
                            <option value="totalbox">TotalBox</option>
                            <option value="totalplay-hogar-seguro">Totalplay Lugar Seguro</option>
                            <option value="totalplay-otros">TKM - Totalplay Otros</option>
                            <option value="pro-active-soluciones">Pro Active Soluciones</option>
                            <option value="typhoon">Typhoon</option>
                            <option value="grupo-sago">Grupo Sago</option>
                            <option value="lawyer-up">Lawyer Up</option>
                            <option value="jdm">JDM</option>
                            <option value="las-morras">Las Moras</option>
                        </select>
                    </div>

                    {/* Campo: Sueldo Mensual */}
                    <div className="form-field">
                        <label htmlFor="sueldo">Sueldo Mensual</label>
                        <input
                            type="number"
                            name="sueldo"
                            id="sueldo"
                            placeholder="Ingresa tu sueldo mensual"
                            min="0"
                            step="100"
                        />
                    </div>

                    {/* Campo: Antigüedad */}
                    <div className="form-field">
                        <label htmlFor="antiguedad">Antigüedad</label>
                        <select name="antiguedad" id="antiguedad">
                            <option value="">Selecciona la antigüedad</option>
                            <option value="0_9m">0 a 9 meses</option>
                            <option value="9_1">9 meses a 1 año</option>
                            <option value="1_2">1 a 2 años</option>
                            <option value="2_3">2 a 3 años</option>
                            <option value="3_4">3 a 4 años</option>
                            <option value="4">4 años o más</option>
                        </select>
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

export default InfoLaboralForm;
