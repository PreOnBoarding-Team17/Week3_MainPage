import type { NextPage } from "next";
import Link from "next/link";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Home;
