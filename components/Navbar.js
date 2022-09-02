import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.svg" alt="" width={120} height={60} />
        <h1>Demo App</h1>
      </div>

      <div className="links">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
