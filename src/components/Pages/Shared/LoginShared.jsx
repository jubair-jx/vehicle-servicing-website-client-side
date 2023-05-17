import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/Provider";

const LoginShared = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default LoginShared;
