import React from "react";
import { Img, Text } from "components";
import Header from "components/Header";

const SOBREPage = () => {
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-pressstartp items-center justify-start mx-auto w-full">
        <Header
          className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[238px] items-center justify-center md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_navmenudefault.svg')" }}
        />
        <div
          className="relative"
          style={{
            height: "842px", 
            width: "100%",
            position: "relative",
          }}
        >
          <Img
            className="h-full w-full object-cover"
            src="images/img_image31.png"
            alt="imageThirtyOne"
          />
          <Text
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white leading-7"
            
          >
            Após um devastador colapso econômico em Angola, as entranhas do sistema monetário estatal desabaram, dando origem a pequenas comunidades em constante conflito. Das sombras, a cidade comandada por T. Mvak ascende como uma entidade independente, secretamente armada com armas nucleares. Uma dissuasão sinistra surge diante das ameaças das facções paramilitares hostis. Os mercenários, agora especialistas em um jogo de poder macabro, tornaram-se peças-chave na trama obscura que se desenrola. Facções emergentes, com suas promessas sinistras, desencadeiam o caos na região, oferecendo recompensas extravagantes por corpos frios e inimigos derrotados. Em meio ao conflito, experimentos científicos e rituais arcanos ressuscitam criaturas dotadas de poderes além da imaginação. O mundo, mergulhado na anarquia, oferece poucas chances de sobrevivência. E agora, seu papel assume uma importância épica: você é chamado para restaurar a normalidade, e elevar sua facção ao pico do poder. Sua ordem é somente uma:

Destrua todos aqueles que ousarem cruzar seu destino.
          </Text>
        </div>
      </div>
    </>
  );
};

export default SOBREPage;
