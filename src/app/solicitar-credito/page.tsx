"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "@/styles/SolicitarCredito.css"

const SolicitarCreditoPage = () => {
    return (
        <div className="register-container">
            <br /><br /><br /><br />
            <form className="register-form">
                <h2>Solicitar Credito</h2>
                <div className="form-group">
                    <label className="">Fullname:</label>
                    <input 
                        type="text" 
                        name="fullname" 
                        placeholder="Fullname" 
                    />
                </div>
                <div className="form-group">
                    <label className="">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="test@test.com" 
                    />
                </div>
                <div className="form-group">
                    <label className="">Contraseña:</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="**********"
                />
                </div>
                <button className="btn-primary">Solicitar Crédito</button>
            </form>
        </div>
    );
};

export default SolicitarCreditoPage;