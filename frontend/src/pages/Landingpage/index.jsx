import React from "react";

import { Button, Text } from "components";
import Header from "components/Header";
import "styles/font.css"

const LandingpagePage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-pressstartp items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1080px] items-center justify-start pb-2.5 w-full"
          style={{ backgroundImage: "url('images/img_frame6.png')" }}
        >
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <Header
              className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[238px] items-center justify-center md:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_navmenudefault.svg')",
              }}
            />
            <div className="bg-white-A700_01 flex flex-col h-[800px] md:h-auto items-center justify-center p-[106px] md:px-5 w-[800px] md:w-full">
            <Text
  className="my-[250px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full font-pressstartp"
  size="txtPressStart2PRegular30"
>
  insert your game here
</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
//fonte do favicon
//<a href="https://www.freepik.com/icon/gun_9926218#fromView=search&term=mini+gun&track=ais&page=1&position=32&uuid=45d22a00-df16-43ce-bfda-4b45fff8b80d">Icon by vectorsmarket15</a>