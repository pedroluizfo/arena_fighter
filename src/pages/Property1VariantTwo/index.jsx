import React from "react";

import { Button, Text } from "components";

const Property1VariantTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-teal-600 flex flex-col font-pressstartp h-[242px] items-end justify-start mx-auto md:pl-10 pl-20 sm:pl-5 w-full"
        style={{ backgroundImage: "url('images/img_property1varianttwo.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-full">
          <Button className="cursor-pointer h-[82px] leading-[normal] mb-[78px] md:mt-0 mt-[82px] text-center text-xl w-[260px]">
            sobre o projeto
          </Button>
          <Button
            className="cursor-pointer h-[82px] leading-[normal] mb-[78px] md:ml-[0] ml-[60px] md:mt-0 mt-[82px] text-center text-xl w-[260px]"
            size="sm"
          >
            leaderboards
          </Button>
          <div className="bg-black-900_d1 border border-black-900 border-solid flex sm:flex-1 flex-col h-[242px] md:h-auto items-center justify-center md:ml-[0] ml-[780px] p-2.5 w-[480px] sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-A200 text-shadow-ts"
              size="txtPressStart2PRegular40"
            >
              <>
                RPG ARENA
                <br />
                ELITE
                <br />
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property1VariantTwoPage;
