import Head from "next/head";
import AuthError from "../components/AuthError";
import { useContext } from "react";
import { UserContext } from "./../context/AuthContext";

const Profile = ({ data }) => {
  const user = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Demo App | Profile</title>
      </Head>
      {user ? (
        <div>
          <h1 className="title">Profile</h1>
          <p className="text">
            This is your profile page where you can see your analitics.
          </p>
          <p className="text">
            This is a dummy data from Next.js api endpoint fetched using{" "}
            <strong>getServerSideProps</strong>.
          </p>

          <div className="container">
            <div className="centerDiv container">
              <div className="profileImg">👤</div>
              <h1 className="title">{user.displayName}</h1>

              <strong className="text mb-1">Data for the last 30 days:</strong>
              <p className="text">
                Logins: <strong>{data.logins}</strong>
              </p>
              <p className="text">
                Logouts: <strong>{data.logouts}</strong>
              </p>
              <p className="text">
                Todos opened: <strong>{data.todos}</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <AuthError />
      )}
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/user");
  var data = await res.json();

  return { props: { data } };
}

export default Profile;
