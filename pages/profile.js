import Head from "next/head";
import AuthError from "../components/AuthError";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Demo App | Profile</title>
      </Head>
      {user ? (
        <div>
          <h1>Profile</h1>
        </div>
      ) : (
        <AuthError />
      )}
    </>
  );
};

export default Profile;
