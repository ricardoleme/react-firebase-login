import React, { useCallback, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { auth } from "../firebase";

const NovoUsuario = ({ history }) => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const handleNovoUsuario = useCallback(async event => {
    event.preventDefault();
    const { nome, email, senha } = event.target.elements;
    setNomeUsuario(nome.value);
    try {
      await auth.createUserWithEmailAndPassword(email.value, senha.value);
      history.push("/login");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  useEffect(() => {
    document.title = 'Novo Usuário';
  }, []);
  
  auth.onAuthStateChanged((user) => {
    if (user && nomeUsuario !== '') {
      if(user.displayName ===''){ //somente efetuaremos o update caso o usuário ainda não tenha o nome
      user.updateProfile({
        displayName: nomeUsuario,
        photoURL: `https://api.adorable.io/avatars/96/{user.uid}.png` //carrega um avatar randomico através da API adorable.io
      }).then(function () {
        console.log('Update no usuário com sucesso!')
      })     
    }
    }
  })
  return (
    <div>
      <h1>Novo Usuário</h1>
      <form onSubmit={handleNovoUsuario}>
        <label>
          Nome
          <input name="nome" type="text" placeholder="Nome Completo" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <label>
          Senha
          <input name="senha" type="password" placeholder="Senha" required />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <a href="/">&larr; Voltar na página inicial</a>
    </div>
  );
};
//withRouter higher-order component allows you to get access to the history object’s properties and the closest <Route>'s match.
export default withRouter(NovoUsuario);

/*
Exemplo para salvar outras informações que julgar importante do usuário em uma tabela no Firestore

firestore.collection("usuarios").doc(user.uid).set({
  uid: user.uid,
  nome: nomeUsuario
}).catch(function (error) {
  console.error("Erro ao salvar o usuário: ", error);
});
*/