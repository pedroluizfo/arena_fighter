import React from "react";

import { Button, Text } from "components";

const LandingpagePage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-pressstartp items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1080px] items-center justify-start pb-2.5 w-full"
          style={{ backgroundImage: "url('images/img_frame6.png')" }}
        >
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <header
              className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[238px] items-center justify-center md:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_navmenudefault.svg')",
              }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-20 md:ml-[0] w-[96%]">
                <div className="absolute bg-indigo-300 flex flex-col h-20 md:h-auto items-center justify-center sm:left-[200px] left-[380px] sm:m-[] md:m-[] mb-[77px] sm:mb-[] md:mb-[] sm:min-h-[70px] md:min-h-[90px] md:mt-0 mt-[81px] sm:px-5 rounded-[5px] sm:w-[180px] w-[260px]">
                  <Text
                    className="max-w-[160px] md:max-w-full text-center text-shadow-ts text-white-A700_01 text-xl"
                    size="txtPressStart2PRegular20"
                  >
                    sobre o projeto
                  </Text>
                </div>
                <Button className="absolute cursor-pointer h-20 sm:h-[] md:h-[] leading-[normal] left-px mb-[77px] sm:min-h-[70px] md:min-h-[90px] md:ml-[0] ml-[60px] md:mt-0 mt-[81px] text-center text-xl sm:w-[180px] w-[260px]">
                  leaderboards
                </Button>
                <div className="absolute bg-black-900 border border-lime-100 border-solid flex flex-col h-[238px] md:h-auto md:hidden items-center justify-center md:ml-[0] ml-[780px] p-2.5 right-px w-[480px] sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-shadow-ts1 text-white-A700_01"
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
            </header>
            <div className="bg-white-A700_01 flex flex-col h-[800px] md:h-auto items-center justify-center p-[106px] md:px-5 w-[800px] md:w-full">
              <Text
                className="my-[250px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-full"
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
