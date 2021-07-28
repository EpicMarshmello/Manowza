import { useEffect, useState } from "react";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function BGimage() {}
const [width, setWidth] = useState<number>();
const [height, setHeight] = useState<number>();


export default BGimage;
