import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const RotasPrivadas = ({ component: RouteComponent, ...rest }) => {
  const {usuarioAtual} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!usuarioAtual ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};


export default RotasPrivadas