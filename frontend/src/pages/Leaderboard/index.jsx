import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const LeaderboardPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-pressstartp items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-end w-full">
          <Header
            className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[238px] items-center justify-center md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_navmenudefault.svg')" }}
          />
          <div className="flex flex-col items-start justify-start max-w-[1171px] mx-auto md:px-5 w-full">
            <div className="bg-lime-100 flex flex-row md:gap-10 items-start justify-between p-9 sm:px-5 w-full">
              <Text
                className="ml-11 mt-[7px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[81px] mt-1.5 text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                PONTUAÇÃO
              </Text>
            </div>
            <div className="bg-black-900_01 flex flex-row md:gap-10 items-center justify-between mt-[33px] p-[37px] sm:px-5 w-full">
              <Text
                className="ml-[43px] text-center text-white-A700_01 text-xs"
                size="txtPressStart2PRegular12WhiteA70001"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[76px] text-center text-white-A700_01 text-xs"
                size="txtPressStart2PRegular12WhiteA70001"
              >
                PONTUAÇÃO
              </Text>
            </div>
            <div className="bg-deep_orange-800 flex flex-row md:gap-10 items-center justify-between mt-[23px] p-[39px] sm:px-5 w-full">
              <Text
                className="ml-[41px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[75px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                PONTUAÇÃO
              </Text>
            </div>
            <div className="bg-lime-100 flex flex-row md:gap-10 items-center justify-between mt-[23px] p-[39px] sm:px-5 w-full">
              <Text
                className="ml-[41px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[75px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                PONTUAÇÃO
              </Text>
            </div>
            <div className="bg-black-900_01 flex flex-row md:gap-10 items-center justify-between mt-[23px] p-[37px] sm:px-5 w-full">
              <Text
                className="ml-[43px] text-center text-white-A700_01 text-xs"
                size="txtPressStart2PRegular12WhiteA70001"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[76px] text-center text-white-A700_01 text-xs"
                size="txtPressStart2PRegular12WhiteA70001"
              >
                PONTUAÇÃO
              </Text>
            </div>
            <div className="bg-deep_orange-800 flex flex-row md:gap-10 items-center justify-between mt-[23px] p-[39px] sm:px-5 w-full">
              <Text
                className="ml-[41px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                NOME DO JOGADOR
              </Text>
              <Text
                className="mr-[75px] text-black-900 text-center text-xs"
                size="txtPressStart2PRegular12"
              >
                PONTUAÇÃO
              </Text>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
