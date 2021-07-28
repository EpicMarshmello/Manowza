import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>


    <Nav/>
    <Component {...pageProps} />


  </div>
  )
}

export default MyApp
