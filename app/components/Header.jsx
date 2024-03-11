import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex items-center justify-center">
        <Image src="/logonotext.png" alt="logo" width={100} height={100} />
        <h2 className="px-1 text-3xl font-extrabold tracking-tighter bg-gradient-to-br from-amber-500 to-red-600 bg-clip-text text-transparent">
          RunCMDCreate
        </h2>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>links</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
