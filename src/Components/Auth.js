import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

/* createContext() fornece uma maneira de passar os dados de componentes 
sem ter que passar manualmente em todos os níveis através de props */
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioAtual, setUsuarioAtual] = useState(null);
  const [pendente, setPendente] = useState(true);

  useEffect(() => {
    /* Utilizamos o observador onAuthStateChanged no objeto Auth 
       do Firebase para identificar o usuário atual */        
    auth.onAuthStateChanged((user) => {
      setUsuarioAtual(user)
      setPendente(false)      
    });
  }, []);

  if(pendente){
    return <>Carregando...</>
  }

  return (
    <AuthContext.Provider
      value={{
        usuarioAtual
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
