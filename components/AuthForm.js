import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
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
        <div className={styles.authContainer}>
          <h1 className={styles.title}>Register / Log In</h1>
          <p className={styles.text}>
            To Add, Edit or Delete Todos, please Register or Log In.
          </p>

          <div className={styles.registerForm}>
            <h1 className={styles.title}>{method} form</h1>
            {method === "Register" && (
              <input
                className={styles.inputField}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.inputField}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {method === "Register" ? (
              "Register" && (
                <div className={styles.btn} onClick={register}>
                  Register
                </div>
              )
            ) : (
              <div className={styles.btn} onClick={login}>
                Log In
              </div>
            )}

            {method === "Register" ? (
              <p className={styles.text}>
                Already have an account?{" "}
                <span
                  onClick={() => setMethod("Log In")}
                  className={styles.link}
                >
                  Log In.
                </span>
              </p>
            ) : (
              <p className={styles.text}>
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => setMethod("Register")}
                  className={styles.link}
                >
                  Register.
                </span>
              </p>
            )}

            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;
