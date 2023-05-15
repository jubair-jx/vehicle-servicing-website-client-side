import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [users, setUsers] = useState(true);
  const [loading, setLoading] = useState(null);

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const authInfo = {
    users,
    loading,
    createUser,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default Provider;
