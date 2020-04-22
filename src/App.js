import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./Components/RotasPrivadas";

import Inicio from "./Components/Inicio";
import Login from "./Components/Login";
import NovoUsuario from "./Components/NovoUsuario";
import ResetarSenha from "./Components/ResetarSenha";
import NaoEncontrado from "./Components/NaoEncontrado"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Switch garante que apenas uma rota será renderizada exclusivamente */ }
        <Switch> 
          <PrivateRoute exact path="/" component={Inicio} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/novousuario" component={NovoUsuario} />
          <Route exact path="/resetarsenha" component={ResetarSenha} />
          <Route path="*" component={NaoEncontrado} />          
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
