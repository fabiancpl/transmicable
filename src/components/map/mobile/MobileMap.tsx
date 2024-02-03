import background from "../../../assets/images/SVG/mapa_mobile1.png";
import contenido from "../../../assets/images/SVG/mapa_mobile2.png";
import estacion_1 from "../../../assets/images/SVG/mapa_mobile3.png";
import estacion_2 from "../../../assets/images/SVG/mapa_mobile4.png";
import estacion_3 from "../../../assets/images/SVG/mapa_mobile5.png";
import estacion_4 from "../../../assets/images/SVG/mapa_mobile6.png";
import linea_transmicable from "../../../assets/images/SVG/mapa_mobile7.png";
import image_amarillo from "../../../assets/images/mapa/DSC07362.png";
import image_azul_oscuro from "../../../assets/images/mapa/IMG_0715.png";
import image_naranja from "../../../assets/images/mapa/IMG_6344.png";
import image_morado from "../../../assets/images/mapa/IMG_0763.png";
import image_rosado from "../../../assets/images/mapa/IMG_0773.png";
import image_lavanderia from "../../../assets/images/mapa/DSC09933.png";
import image_turismo from "../../../assets/images/mapa/DSC04179.png";
import image_turismo_2 from "../../../assets/images/mapa/DSC04214.png";

import { useState } from "react";
import ModalApp from "../../shared/modal/ModalApp.tsx";
import modal_mark_1 from "../../../assets/images/modal_mark_1.png";

function MobileMap() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);
  const [imageModal, setImageModal] = useState("");
  const handleClick = (image: string) => {
    setShowModal(true);
    setImageModal(image);
  };

  return (
    <>
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        height="90vh"
        viewBox="0 0 1080.24 1868.64"
        style={{ margin: "0px", padding: "0px" }}
      >
        <g id="Layer_5">
          <image
            id="background"
            width="4501"
            height="6755"
            transform="translate(0 247.44) scale(.24)"
            href={background}
          />
          <image
            id="contenido"
            width="4233"
            height="1221"
            transform="translate(40.8) scale(.24)"
            href={contenido}
          />
          <image
            id="estacion_1"
            width="2525"
            height="747"
            transform="translate(372 1590.96) scale(.24)"
            href={estacion_1}
          />
          <image
            id="estacion_2"
            width="1403"
            height="1351"
            transform="translate(40.08 834) scale(.24)"
            href={estacion_2}
          />
          <image
            id="estacion_3"
            width="1414"
            height="1659"
            transform="translate(367.2 436.08) scale(.24)"
            href={estacion_3}
          />
          <image
            id="estacion_4"
            width="1767"
            height="980"
            transform="translate(637.68 669.12) scale(.24)"
            href={estacion_4}
          />
          <image
            id="linea_transmicable"
            width="3137"
            height="4461"
            transform="translate(191.04 561.84) scale(.24)"
            href={linea_transmicable}
          />
          <g id="mark1">
            <circle
              cx="562.72"
              cy="1632.12"
              r="15"
              style={{ fill: "#ad454b", strokeWidth: "0px" }}
            />
          </g>
          <g id="mark19">
            <circle
              cx="943.72"
              cy="611.12"
              r="15"
              style={{ fill: "#ad454b", strokeWidth: "0px" }}
            />
          </g>
          <g id="mark7">
            <circle
              cx="193.72"
              cy="807.12"
              r="15"
              style={{ fill: "#ad454b", strokeWidth: "0px" }}
            />
          </g>
          <g id="mark13">
            <circle
              cx="367.72"
              cy="564.12"
              r="15"
              style={{ fill: "#ad454b", strokeWidth: "0px" }}
            />
          </g>
          <circle
            id="mark2"
            cx="532.72"
            cy="1241.12"
            r="15"
            style={{ fill: "#cd458f", strokeWidth: "0px" }}
            onClick={() => handleClick(image_rosado)}
          />
          <circle
            id="mark3"
            cx="540.72"
            cy="1370.12"
            r="15"
            style={{ fill: "#cd458f", strokeWidth: "0px" }}
            onClick={() => handleClick(image_rosado)}
          />
          <circle
            id="mark9"
            cx="178.72"
            cy="765.12"
            r="15"
            style={{ fill: "#5b4894", strokeWidth: "0px" }}
            onClick={() => handleClick(image_morado)}
          />
          <circle
            id="mark4"
            cx="445.72"
            cy="1091.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark5"
            cx="352.72"
            cy="1054.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark6"
            cx="352.72"
            cy="924.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark10"
            cx="233.72"
            cy="750.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark11"
            cx="332.72"
            cy="549.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark21"
            cx="982.72"
            cy="611.12"
            r="15"
            style={{ fill: "#54b7e7", strokeWidth: "0px" }}
            onClick={() => handleClick(modal_mark_1)}
          />
          <circle
            id="mark20"
            cx="958.72"
            cy="586.12"
            r="15"
            style={{ fill: "#ba70a1", strokeWidth: "0px" }}
            onClick={() => handleClick(image_turismo)}
          />
          <circle
            id="mark15"
            cx="832.72"
            cy="653.12"
            r="15"
            style={{ fill: "#a894c5", strokeWidth: "0px" }}
            onClick={() => handleClick(image_turismo_2)}
          />
          <circle
            id="mark16"
            cx="864.72"
            cy="626.12"
            r="15"
            style={{ fill: "#4086d0", strokeWidth: "0px" }}
            onClick={() => handleClick(image_azul_oscuro)}
          />
          <circle
            id="mark23"
            cx="1035.72"
            cy="653.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark17"
            cx="902.72"
            cy="586.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark22"
            cx="973.72"
            cy="641.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark18"
            cx="902.72"
            cy="641.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark14"
            cx="808.72"
            cy="578.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark26"
            cx="1005.72"
            cy="532.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark24"
            cx="1020.72"
            cy="608.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark25"
            cx="1035.72"
            cy="571.12"
            r="15"
            style={{ fill: "#f3e52e", strokeWidth: "0px" }}
            onClick={() => handleClick(image_amarillo)}
          />
          <circle
            id="mark12"
            cx="395.72"
            cy="593.12"
            r="15"
            style={{ fill: "#ec7e67", strokeWidth: "0px" }}
            onClick={() => handleClick(image_naranja)}
          />
          <circle
            id="mark8"
            cx="147.72"
            cy="807.12"
            r="15"
            style={{ fill: "#54b7e7", strokeWidth: "0px" }}
          />
          <circle
            id="mark27"
            cx="395.72"
            cy="542.12"
            r="15"
            style={{ fill: "#54b7e7", strokeWidth: "0px" }}
            onClick={() => handleClick(image_lavanderia)}
          />
        </g>
      </svg>
      {showModal && (
        <ModalApp image={imageModal} open={showModal} toggle={handleModal} />
      )}
    </>
  );
}

export default MobileMap;
