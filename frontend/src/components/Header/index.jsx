import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Text } from "components";
import "../../styles/font.css"; // Import the CSS file for your component

const Header = (props) => {
  const navigate = useNavigate();

  const redirectToSobrePage = () => {
    navigate('/sobre');
  };

  const redirectToLeaderboardsPage = () => {
    navigate('/leaderboard');
  };

  const redirectToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      <header
        className={props.className}
        style={{ backgroundImage: "url('images/img_navmenudefault.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-20 md:ml-[0] w-[96%]">
        <Button
  className="!text-white-A700_01 cursor-pointer fontFamily-pressstartp h-20 leading-[normal] mb-[77px] md:ml-[0] ml-[60px] md:mt-0 mt-[81px] text-center text-xl w-[260px] flex items-center justify-center"
  shape="round"
  color="indigo_300"
  size="xs"
  variant="fill"
  onClick={redirectToSobrePage}
>
  sobre o projeto
</Button>

          <Button
            className="!text-white-A700_01 cursor-pointer font-pressstartp h-20 leading-[normal] mb-[77px] md:ml-[0] ml-[60px] md:mt-0 mt-[81px] text-center text-xl w-[260px]"
            shape="round"
            color="indigo_300"
            size="xs"
            variant="fill"
            onClick={redirectToLeaderboardsPage}
          >
            leaderboards
          </Button>

          <Button className="bg-black-900 border border-lime-100 border-solid flex flex-col h-[238px] md:h-auto items-center justify-center md:ml-[0] ml-[780px] p-2.5 w-[480px] sm:w-full"
            onClick={redirectToHomePage}>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-shadow-ts1 text-white-A700_01 font-pressstartp" 
              size="txtPressStart2PRegular40"
            >
              <>
                MERC ARENA
                <br />
                BATTLE
                <br />
              </>
            </Text>
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
