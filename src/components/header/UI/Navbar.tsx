"use client";
import Link from "next/link";
import { useState } from "react";
import { GrTechnology } from "react-icons/gr";
import styles from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          CLOUD
          <GrTechnology />
          HOSTING
        </Link>
        <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <IoMdClose onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <AiOutlineMenu onClick={() => setShowMenu(!showMenu)} />
          )}
        </div>
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: showMenu ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/articles"
            className={styles.navLink}
            onClick={() => setShowMenu(false)}
          >
            Articles
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            href="/admin"
            className={styles.navLink}
            onClick={() => setShowMenu(false)}
          >
            Admin
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
