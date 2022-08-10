import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../Redux/Store/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {


  const [isLoggedIn, SetIsLoggedIn] = useState(store.getState().loginReducer.user?.token?.length>0);
  const [email, setName]=useState(store.getState().loginReducer.user?.name);
  useEffect(()=>{
    return store.subscribe(() => {
      SetIsLoggedIn(store.getState().loginReducer.user?.token?.length>0)
        setName(store.getState().loginReducer.user?.name); 
    });
},[])

  return (
    <div className="AuthMenu font  ">
      {isLoggedIn ? (
        <h3 >
          Hey {email} <Link className="link" to="Logout"  >Logout</Link>
        </h3>
      ) : (
        <h3>
          Welcome guest - <Link  className="link" to="login">Login</Link>
        </h3>
      )}
    </div>
  );
}

export default AuthMenu;
