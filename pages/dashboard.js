import { signOut } from "firebase/auth";
import Head from "next/head";
import { auth } from "./../config/firebase-config";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext";
import AuthError from "../components/AuthError";

const Dashboard = () => {
  const userName = auth?.currentUser?.displayName;
  const user = useContext(UserContext);

  const logOut = async () => {
    signOut(auth);
  };

  return (
    <>
      <Head>
        <title>Demo App | Dashboard</title>
      </Head>
      {user ? (
        <div>
          <h1 className="title">Dashboard</h1>
          <p className="text">Welcome to your dashboard, {userName}.</p>
          <div className="btn" onClick={logOut}>
            Log Out
          </div>
        </div>
      ) : (
        <AuthError />
      )}
    </>
  );
};

export default Dashboard;
