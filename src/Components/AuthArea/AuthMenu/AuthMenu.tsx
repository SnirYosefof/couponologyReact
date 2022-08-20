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
    <div className="AuthMenu font    ">
      {isLoggedIn ? (
        <div >
          Hey {email} <Link className="link font-size " to="Logout"  >Logout</Link>
        </div>
      ) : (
        <div>
          Welcome guest - <Link  className="link font-size " to="login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default AuthMenu;
