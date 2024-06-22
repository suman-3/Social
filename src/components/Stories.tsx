import Image from "next/image";
import React from "react";

export const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="story"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium ">monX</span>
        </div>
      </div>
    </div>
  );
};
