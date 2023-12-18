import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const SOBREPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-pressstartp items-center justify-start mx-auto w-full">
        <Header
          className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[238px] items-center justify-center md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_navmenudefault.svg')" }}
        />
        <Img
          className="h-[842px] sm:h-auto object-cover w-full"
          src="images/img_image31.png"
          alt="imageThirtyOne"
        />
      </div>
    </>
  );
};

export default SOBREPage;
