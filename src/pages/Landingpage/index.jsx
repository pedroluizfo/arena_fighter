import React from "react";
import  Property1VariantTwoPage from "../Property1VariantTwo/index"
import { Img, Text } from "components";

const LandingpagePage = () => {
  return (
    <>
    <Property1VariantTwoPage/>
      <div className="bg-gray-300 flex sm:flex-col md:flex-col flex-row font-pressstartp sm:gap-10 md:gap-10 gap-[325px] items-end justify-between mx-auto w-auto sm:w-full md:w-full">
        
        <Img
          className="h-[1080px] md:h-auto object-cover w-[235px] sm:w-full"
          src="images/img_frame71.png"
          alt="frameSeventyOne"
        />
        <div className="bg-white-A700 flex flex-col h-[800px] md:h-auto items-center justify-end md:px-5 px-[107px] py-[343px] w-[800px] md:w-full">
          <Text
            className="max-w-[587px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
            size="txtPressStart2PRegular30"
          >
            insert your game here
          </Text>
        </div>
        <Img
          className="h-[1078px] md:h-auto object-cover w-[235px] sm:w-full"
          src="images/img_frame61.png"
          alt="frameSixtyOne"
        />
      </div>
    </>
  );
};

export default LandingpagePage;
