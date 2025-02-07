"use client";
import { useRouter } from 'next/navigation';
import "./InfoPersonalForm.css";

function InfoPersonalForm() {
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
                    {/* Campo: Calidad Migratoria */}
                    <div className="form-field">
                        <label htmlFor="empresa">Calidad Migratoria</label>
                        <select name="empresa" id="empresa">
                            <option>Seleccione una opción</option>
                            <option value="residente">Residente</option>
                            <option value="turista">Turista</option>
                            <option value=""></option>
                        </select>
                    </div>

                    {/* Campo: Ultimo Grado de Estudios */}
                    <div className="form-field">
                        <label htmlFor="antiguedad">Ultimo Grado de Estudios</label>
                        <select name="antiguedad" id="antiguedad">
                            <option value="">Selecciona el ultimo grado de estudios</option>
                            <option value="0_9m">0 a 9 meses</option>
                            <option value="9_1">9 meses a 1 año</option>
                            <option value="1_2">1 a 2 años</option>
                            <option value="2_3">2 a 3 años</option>
                            <option value="3_4">3 a 4 años</option>
                        </select>
                    </div>

                    {/* Campo: Estado Civil */}
                    <div className="form-field">
                        <label htmlFor="antiguedad">Estado Civil</label>
                        <select name="antiguedad" id="antiguedad">
                            <option value="">Selecciona estado civil</option>
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                        </select>
                    </div>

                    {/* Campo: Tipo Vivienda */}
                    <div className="form-field">
                        <label htmlFor="antiguedad">Tipo de Vivienda</label>
                        <select name="antiguedad" id="antiguedad">
                            <option value="">Selecciona un tipo de vivienda</option>
                            <option value="propia">Propia</option>
                            <option value="rentada">Rentada</option>
                        </select>
                    </div>

                    {/* Campo: Sueldo Mensual */}
                    <div className="form-field">
                        <label htmlFor="sueldo">RFC</label>
                        <input
                            type="string"
                            name="rfc"
                            id="rfc"
                            placeholder="Ingresa tu RFC"
                        />
                    </div>

                    {/* Campo: Antigüedad */}
                    <div className="form-field">
                        <label htmlFor="antiguedad">Método de Pago</label>
                        <select name="antiguedad" id="antiguedad">
                            <option value="">Selecciona un método de pago</option>
                            <option value="0_9m">0 a 9 meses</option>
                            <option value="9_1">9 meses a 1 año</option>
                            <option value="1_2">1 a 2 años</option>
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

export default InfoPersonalForm;
