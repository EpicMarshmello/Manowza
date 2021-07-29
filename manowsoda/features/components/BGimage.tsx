import React from "react";


export const bgRender = (bgsauce:string) => {
  return (
    <>
      <div
        style={{ color: "green", backgroundImage: bgsauce }}
        className="w-screen h-screen bg-fixed text-9xl bg-pink-300"
      ></div>
    </>
  );
};
