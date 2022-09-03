import Layout from "../components/Layout";
import "../styles/globals.css";
import { UserProvider } from "./../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  );
}

export default MyApp;
