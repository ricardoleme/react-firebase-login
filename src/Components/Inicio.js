import React, { useState } from "react";
import { auth } from "../firebase";

const Inicio = () => {
  const [fotoUsuarioLogado, setFotoUsuarioLogado] = useState("");
  const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState("");
  
  //Verificamos se houve alguma alteração nos dados do usuário logado
  auth.onAuthStateChanged((user)=>{  
    if(user){
      setFotoUsuarioLogado(user.photoURL);
      setNomeUsuarioLogado(user.displayName);    
    }
  });
  return (
    <>
      <h1>Inicio</h1>
      <img src ={fotoUsuarioLogado} alt={nomeUsuarioLogado} /> Seja bem vindo, {nomeUsuarioLogado} 
      <button onClick={() => {auth.signOut()}}>Sair do Sistema</button>
    </>
  );
};

export default Inicio;


