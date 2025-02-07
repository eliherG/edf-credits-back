"use client"
import { useState } from "react";
import "./SolicitudForm.css";

const SolicitudForm = () => {
  // Estado para controlar el paso actual
  const [step, setStep] = useState(1);

  // Función para ir al siguiente paso
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Función para ir al paso anterior
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="formulario-container">
      <div className="formulario">
        <h2 className="formulario-title">Formulario de Información</h2>

        {/* Paso 1: Información Personal */}
        {step === 1 && (
          <div className="form-section">
            <h3>Información Personal</h3>
            <label>
              Calidad Migratoria:
              <input type="text" />
            </label>
            <label>
              Último Grado de Estudios:
              <input type="text" />
            </label>
            <label>
              Estado Civil:
              <input type="text" />
            </label>
            <label>
              Tipo de Vivienda:
              <input type="text" />
            </label>
            <label>
              RFC:
              <input type="text" />
            </label>
            <label>
              Actividad Empresarial:
              <input type="text" />
            </label>
            <label>
              Métodos de Pago:
              <input type="text" />
            </label>
          </div>
        )}

        {/* Paso 2: Referencias Personales */}
        {step === 2 && (
          <div className="form-section">
            <h3>Referencias Personales</h3>
            <div className="referencia">
              <h4>Referencia 1</h4>
              <label>
                Nombre Completo:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <label>
                Teléfono:
                <input type="tel" />
              </label>
              <label>
                Tipo de Referencia:
                <input type="text" />
              </label>
              <label>
                Años de Conocimiento:
                <input type="number" />
              </label>
            </div>
            <div className="referencia">
              <h4>Referencia 2</h4>
              <label>
                Nombre Completo:
                <input type="text" />
              </label>
              <label>
                Email:
                <input type="email" />
              </label>
              <label>
                Teléfono:
                <input type="tel" />
              </label>
              <label>
                Tipo de Referencia:
                <input type="text" />
              </label>
              <label>
                Años de Conocimiento:
                <input type="number" />
              </label>
            </div>
          </div>
        )}

        {/* Paso 3: Información Financiera */}
        {step === 3 && (
          <div className="form-section">
            <h3>Información Financiera</h3>
            <label>
              Egresos Mensuales:
              <input type="text" />
            </label>
            <label>
              Dependientes Económicos:
              <input type="number" />
            </label>

            {/* Datos de Cuenta Bancaria */}
            <h4>Datos de Cuenta Bancaria</h4>
            <label>
              Banco:
              <input type="text" />
            </label>
            <label>
              País:
              <input type="text" />
            </label>
            <label>
              Número de Cuenta:
              <input type="text" />
            </label>
            <label>
              CLABE:
              <input type="text" />
            </label>
            <label>
              ¿Es cuenta propia?
              <input type="checkbox" />
            </label>
          </div>
        )}

        {/* Botones de Navegación */}
        <div className="form-navigation">
          {step > 1 && (
            <button className="form-btn" onClick={prevStep}>
              Anterior
            </button>
          )}
          {step < 3 ? (
            <button className="form-btn" onClick={nextStep}>
              Siguiente
            </button>
          ) : (
            <button className="form-btn">Enviar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolicitudForm;
