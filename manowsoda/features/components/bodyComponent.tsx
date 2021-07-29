import React from "react";

var textShow =
  " เป็นจังหวัดที่ตั้งอยู่ทางภาคตะวันตกโดยเป็นศูนย์กลางในด้านอุตสาหกรรมแปรรูปสินค้าเกษตรและการปศุสัตว์ของประเทศจังหวัดราชบุรี ยังเป็นจังหวัดที่เศรษฐกิจดีที่สุดในภาคตะวันตก และเป็นจังหวัดที่มีเทศบาลเมืองมากที่สุดในภาคตะวันตกเช่นกัน ";

export const BodyItem = () => {
  //---------------------------
  //    RENDER
  //-------------------------- -
  return (
    <>
      <div className="h-auto w-4/12 ml-56 flex flex-col justify-center">
        <div className="text-8xl text-white my-10">ราชบุรี</div>
        <div className="text-xl text-white"> {'"'+textShow+'"'} </div>
      </div>
    </>
  );
};
