import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RequiredAuth() {

    const {auth} = useContext(UserContext);

  return auth ===true ? <Outlet /> : 
  <Navigate to="/login" />;
}
