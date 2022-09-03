import { useRouter } from "next/router";

const AuthError = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1 className="title">Not authorized!</h1>
      <p className="text">
        You must be registered or logged in to access this page.
      </p>
      <div className="btn" onClick={goHome}>
        Register / Log In
      </div>
    </div>
  );
};

export default AuthError;
