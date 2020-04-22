import React, { useState } from "react";
import { auth } from "../firebase";

const ResetarSenha = () => {
  const [email, setEmail] = useState("");
  const [emailFoiEnviado, setEmailFoiEnviado] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "emailUsuario") {
      setEmail(value);
    }
  };

  const enviarEmailResetarSenha = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailFoiEnviado(true);
        setTimeout(() => {setEmailFoiEnviado(false)}, 3000);
      })
      .catch(() => {
        setError("Erro ao resetar a senha");
      });
  };
  return (
    <div>
      <h1>
        Alterar a senha
      </h1>
      <div>
        <form action="">
          {emailFoiEnviado && (
            <div>
             Um email foi enviado para você! Verifique a sua caixa de entrada
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
          <label htmlFor="emailUsuario">
            Email:
          </label>
          <input
            type="email"
            name="emailUsuario"
            id="emailUsuario"
            value={email}
            placeholder="Informe o seu email"
            onChange={onChangeHandler}                        
          /> <br/>
          <button            
            onClick={event => {
              enviarEmailResetarSenha(event);
            }}
          >
            Enviar um link por email
          </button>
        </form>
<br/>
        <a href="/">&larr; Voltar na página inicial</a>
      </div>
    </div>
  );
};

export default ResetarSenha;
