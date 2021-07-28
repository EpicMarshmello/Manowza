import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
    <nav className="flex justify-around items-center">
        <h2 className="text-xl font-semibold">manowsoda</h2>
        <div className="flex items-center">
          <Link href="/">
            <a className="p-3">Home</a>
          </Link>
          
          <Link href="/aboutus">
            <a className="p-3">AboutUs</a>
          </Link>
          
          <Link href="/cultural">
            <a className="p-3">Cultural Maps</a>
          </Link>
        
          <Link href="/store">
            <a className="p-3">Store</a>
          </Link>
        
        </div>
    </nav>
    </>
  )
}