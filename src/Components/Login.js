import React, { useCallback, useContext, useEffect} from "react";
import { withRouter, Redirect } from "react-router";
import { auth, entrarComGoogle } from "../firebase";
import { AuthContext } from "./Auth.js";


const Login = ({ history }) => { 

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();      
      const { email, senha } = event.target.elements;      
      try {           
        await auth                   
          .signInWithEmailAndPassword(email.value, senha.value);
        history.push("/");
      } catch (error) {
        alert("Ocorreu: " +error.code + error);
      // Você pode personalizar os códigos de erro, por exemplo:  
      // auth/invalid-password - O valor fornecido para a propriedade do usuário password é inválido. Precisa ser uma string com pelo menos seis caracteres.
      // auth/email-already-exists - O e-mail fornecido já está em uso por outro usuário. Cada usuário precisa ter um e-mail exclusivo.
      // auth/invalid-email - Email inválido
      // auth/wrong-password - A senha informada é inválida
      // Lista Completa: https://firebase.google.com/docs/auth/admin/errors?hl=pt-br
      }
    },
    [history]
  );

  useEffect(() => {        
    document.title = 'Área Reservada';
  }, []);

  const { usuarioAtual } = useContext(AuthContext);

  //Se o usuário já estiver logado, redirecionamos para a página inicial
  if (usuarioAtual) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Área Reservada </h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Senha
          <input name="senha" type="password" placeholder="Senha" />
        </label>
        <button type="submit">Entrar</button> 
      </form>
     
      <br/>
      <a href ="/novousuario">Ainda não tem uma conta?</a> <br/>
      <a href ="/resetarsenha">Esqueceu a senha?</a> <br/>
      <button onClick={() => {entrarComGoogle();}}>Entrar com a conta Google</button> 
    </div>
  );
};

export default withRouter(Login);