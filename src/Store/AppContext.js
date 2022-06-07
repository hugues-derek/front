import { createContext, useState } from "react";

const AppContext = createContext({
  User: {},
  userBiens: [],
  userVisites: [],
  connectUser: (jwt) => {},
  deconnectUser: () => {},
});

export function AppContextProvider(props) {
  const [user, setUser] = useState({});
  const [biens, setBiens] = useState([]);
  const [visites, setVisites] = useState([]);

  const connectUser = (jwt) => {
    console.log(jwt);
  };

  const deconnectUser = () => {
    console.log("l'utilisateur est déconnecté");
  };

  const context = {
    user,
    biens,
    visites,
    totalVisites: visites.length,
    totalBiens: biens.length,
    connectUser,
    deconnectUser,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
