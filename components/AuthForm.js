import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useRouter } from "next/router";

const AuthForm = () => {
  const [method, setMethod] = useState("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const register = () => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        updateProfile(auth.currentUser, { displayName: name });
        router.push("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const login = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {true && (
        <div className="authContainer">
          <h1 className="title">Register / Log In</h1>
          <p className="text">
            To Add, Edit or Delete Todos, please Register or Log In.
          </p>

          <div className="registerForm">
            <h1 className="title">{method} form</h1>
            {method === "Register" && (
              <input
                className="inputField"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              className="inputField"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {method === "Register" ? (
              "Register" && (
                <div className="btn" onClick={register}>
                  Register
                </div>
              )
            ) : (
              <div className="btn" onClick={login}>
                Log In
              </div>
            )}

            {method === "Register" ? (
              <p className="text">
                Already have an account?{" "}
                <span onClick={() => setMethod("Log In")} className="link">
                  Log In.
                </span>
              </p>
            ) : (
              <p className="text">
                Don&apos;t have an account?{" "}
                <span onClick={() => setMethod("Register")} className="link">
                  Register.
                </span>
              </p>
            )}

            {error && <p className="error">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;
