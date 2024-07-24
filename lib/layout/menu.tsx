import Image from "next/image";
import React from "react";
import Logo from "@images/logo.png";
import { useAuth } from "@lib/layout/authContext";
import { GiHamburgerMenu } from "react-icons/gi";

function Menu() {
  const { user, loading } = useAuth();

  return (
    <div className="sticky block px-5 lg:px-10 py-1 justify-between items-center w-full bg-Rhino">
      <a href="/">
        <Image src={Logo} alt="logo" width={50} height={50} />
      </a>
      {!user && !loading && (
        <div className="text-white flex gap-5 lg:gap-10">
          <a href="/login">Login</a>
        </div>
      )}
      {user && (
        <div className="text-white hidden lg:flex gap-10">
          <a href="/dashboard">Dashboard</a>
          <a href="/expenses">Expenses</a>
          <a href="/balances">Balances</a>
          <button>Logout</button>
        </div>
      )}
      {user && (
        <div className="text-white hidden lg:flex gap-10">
          <a href="/dashboard">Dashboard</a>
          <a href="/expenses">Expenses</a>
          <a href="/balances">Balances</a>
          <button>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Menu;
