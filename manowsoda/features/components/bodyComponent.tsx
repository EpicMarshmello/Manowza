import React from "react";

var textShow =
  " เป็นจังหวัดที่ตั้งอยู่ทางภาคตะวันตกโดยเป็นศูนย์กลางในด้านอุตสาหกรรมแปรรูปสินค้าเกษตรและการปศุสัตว์ของประเทศจังหวัดราชบุรี ยังเป็นจังหวัดที่เศรษฐกิจดีที่สุดในภาคตะวันตก และเป็นจังหวัดที่มีเทศบาลเมืองมากที่สุดในภาคตะวันตกเช่นกัน ";

export const BodyItem = () => {
  //---------------------------
  //    RENDER
  //---------------------------
  return (
    <>
      <div className="h-5/6 w-1/4 ml-56 flex flex-col justify-center">
        <div className="text-8xl text-white my-10">ราชบุรี</div>
        <div className="text-xl text-white "> {'"' + textShow + '"'} </div>
        <button className="bg-white font-bold rounded-lg w-1/2 text-xl text-black my-6 p-3  transition duration-500 ease-in-out transform hover:scale-110 border-4 hover:bg-gray-300">
          ดูเพิ่มเติม
        </button>
      </div>
    </>
  );
};
