const AuthError = () => {
  return (
    <div>
      <h1 className="title">Not authorized!</h1>
      <p className="text">
        You must be registered or logged in to access this page.
      </p>
      <div className="btn">Register / Log In</div>
    </div>
  );
};

export default AuthError;
