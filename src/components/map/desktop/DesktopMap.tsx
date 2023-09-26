import "./desktopMap.css";
import mapa_fondo from "../../../assets/images/mapa_svg/desktop_map1.png";
import mapa_lineas_transmicable from "../../../assets/images/mapa_svg/desktop_map2.png";
import etiqueta from "../../../assets/images/mapa_svg/desktop_map3.png";
import image_amarillo from "../../../assets/images/mapa/DSC07362.jpg";
import image_rosado from "../../../assets/images/mapa/IMG_0773.jpeg";
import image_lavanderia from "../../../assets/images/mapa/DSC09933.jpg";
import image_rosado_2 from "../../../assets/images/mapa/IMG_3485.jpeg";
import image_turismo from "../../../assets/images/mapa/DSC04179.jpg";
import image_turismo_2 from "../../../assets/images/mapa/DSC04214.jpg";
import mapa_image_default from "../../../assets/images/mapa_svg/desktop_map4.png";
import image_azul_oscuro from "../../../assets/images/mapa/IMG_0715.jpeg";
import image_naranja from "../../../assets/images/mapa/IMG_6344.jpg";
import image_morado from "../../../assets/images/mapa/IMG_0763.jpeg";
import estacion_1 from "../../../assets/images/mapa_svg/desktop_map_aux4.png";
import estacion_2 from "../../../assets/images/mapa_svg/desktop_map_aux5.png";
import estacion_3 from "../../../assets/images/mapa_svg/desktop_map_aux6.png";
import estacion_4 from "../../../assets/images/mapa_svg/desktop_map_aux7.png";

// import ModalApp from "../../shared/modal/ModalApp.tsx";
// import modal_mark_1 from "../../../assets/images/modal_mark_1.png";

import { useState } from "react";

function DesktopMap() {
  const [showMarkImage1, setShowMarkImage1] = useState(false);
  const handleHoverImage1 = () => setShowMarkImage1(!showMarkImage1);

  const [showMarkImage2, setShowMarkImage2] = useState(false);
  const handleHoverImage2 = () => setShowMarkImage2(!showMarkImage2);

  const [showMarkImage3, setShowMarkImage3] = useState(false);
  const handleHoverImage3 = () => setShowMarkImage3(!showMarkImage3);

  const [showMarkImage4, setShowMarkImage4] = useState(false);
  const handleHoverImage4 = () => setShowMarkImage4(!showMarkImage4);

  const [showMarkImage5, setShowMarkImage5] = useState(false);
  const handleHoverImage5 = () => setShowMarkImage5(!showMarkImage5);

  const [showMarkImage6, setShowMarkImage6] = useState(false);
  const handleHoverImage6 = () => setShowMarkImage6(!showMarkImage6);

  const [showMarkImage7, setShowMarkImage7] = useState(false);
  const handleHoverImage7 = () => setShowMarkImage7(!showMarkImage7);

  const [showMarkImage8, setShowMarkImage8] = useState(false);
  const handleHoverImage8 = () => setShowMarkImage8(!showMarkImage8);

  const [showMarkImage9, setShowMarkImage9] = useState(false);
  const handleHoverImage9 = () => setShowMarkImage9(!showMarkImage9);

  const [showMarkImage10, setShowMarkImage10] = useState(false);
  const handleHoverImage10 = () => setShowMarkImage10(!showMarkImage10);

  const [showMarkImage11, setShowMarkImage11] = useState(false);
  const handleHoverImage11 = () => setShowMarkImage11(!showMarkImage11);

  const [showMarkImage12, setShowMarkImage12] = useState(false);
  const handleHoverImage12 = () => setShowMarkImage12(!showMarkImage12);

  const [showMarkImage13, setShowMarkImage13] = useState(false);
  const handleHoverImage13 = () => setShowMarkImage13(!showMarkImage13);

  const [showMarkImage14, setShowMarkImage14] = useState(false);
  const handleHoverImage14 = () => setShowMarkImage14(!showMarkImage14);

  const [showMarkImage15, setShowMarkImage15] = useState(false);
  const handleHoverImage15 = () => setShowMarkImage15(!showMarkImage15);

  // const [showMarkImage16, setShowMarkImage16] = useState(false);
  // const handleHoverImage16 = () => setShowMarkImage16(!showMarkImage16);

  const [showMarkImage17, setShowMarkImage17] = useState(false);
  const handleHoverImage17 = () => setShowMarkImage17(!showMarkImage17);

  const [showMarkImage18, setShowMarkImage18] = useState(false);
  const handleHoverImage18 = () => setShowMarkImage18(!showMarkImage18);

  const [showMarkImage19, setShowMarkImage19] = useState(false);
  const handleHoverImage19 = () => setShowMarkImage19(!showMarkImage19);

  const [showMarkImage20, setShowMarkImage20] = useState(false);
  const handleHoverImage20 = () => setShowMarkImage20(!showMarkImage20);

  const [showMarkImage21, setShowMarkImage21] = useState(false);
  const handleHoverImage21 = () => setShowMarkImage21(!showMarkImage21);

  const [showMarkImage22, setShowMarkImage22] = useState(false);
  const handleHoverImage22 = () => setShowMarkImage22(!showMarkImage22);

  const [showEstacion1, setShowEstacion1] = useState(false);
  const handleHoverEstacion1 = () => {
    if (showEstacion1) {
      setTimeout(function () {
        setShowEstacion1(!showEstacion1);
      }, 1500);
    } else {
      setShowEstacion1(!showEstacion1);
    }
  };

  const [showEstacion2, setShowEstacion2] = useState(false);
  const handleHoverEstacion2 = () => {
    if (showEstacion2) {
      setTimeout(function () {
        setShowEstacion2(!showEstacion2);
      }, 1500);
    } else {
      setShowEstacion2(!showEstacion2);
    }
  };

  const [showEstacion3, setShowEstacion3] = useState(false);
  const handleHoverEstacion3 = () => {
    if (showEstacion3) {
      setTimeout(function () {
        setShowEstacion3(!showEstacion3);
      }, 1500);
    } else {
      setShowEstacion3(!showEstacion3);
    }
  };

  const [showEstacion4, setShowEstacion4] = useState(false);
  const handleHoverEstacion4 = () => {
    if (showEstacion4) {
      setTimeout(function () {
        setShowEstacion4(!showEstacion4);
      }, 1500);
    } else {
      setShowEstacion4(!showEstacion4);
    }
  };

  return (
    <>
      <svg width="100vw" height="100vh" viewBox="0 0 1924.06 1486.05">
        <defs>
          <clipPath id="clippath">
            <rect
              x="0"
              y="6"
              width="1924.06"
              height="1480.05"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8"
            x1="424.5"
            y1="791"
            x2="424.5"
            y2="466"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#32677f" />
            <stop offset=".15" stop-color="#397699" />
            <stop offset=".35" stop-color="#4085b2" />
            <stop offset=".54" stop-color="#458fc3" />
            <stop offset=".76" stop-color="#4995ce" />
            <stop offset="1" stop-color="#4a98d2" />
          </linearGradient>
          <clipPath id="clippath-1">
            <rect
              x="275"
              y="477"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-2"
            x1="545.5"
            y1="694"
            x2="545.5"
            y2="369"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-2">
            <rect
              x="396"
              y="380"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-3"
            x1="778.5"
            y1="967"
            x2="778.5"
            y2="642"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-3">
            <rect
              x="629"
              y="653"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-4"
            x1="690.5"
            y1="700"
            x2="690.5"
            y2="375"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-4">
            <rect
              x="541"
              y="386"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-5"
            x1="618.5"
            y1="600"
            x2="618.5"
            y2="275"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-5">
            <rect
              x="469"
              y="286"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-6"
            x1="920.5"
            y1="636"
            x2="920.5"
            y2="311"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-6">
            <rect
              x="771"
              y="322"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-7"
            x1="754.5"
            y1="537"
            x2="754.5"
            y2="212"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-7">
            <rect
              x="605"
              y="223"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-8"
            x1="803.5"
            y1="367"
            x2="803.5"
            y2="42"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-8">
            <rect
              x="654"
              y="53"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-9"
            x1="1056.5"
            y1="413"
            x2="1056.5"
            y2="88"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-9">
            <rect
              x="907"
              y="99"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-10"
            x1="1155.5"
            y1="373"
            x2="1155.5"
            y2="48"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-10">
            <rect
              x="1006"
              y="59"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-11"
            x1="1120.5"
            y1="683"
            x2="1120.5"
            y2="358"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-11">
            <rect
              x="971"
              y="369"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-12"
            x1="1222.5"
            y1="620"
            x2="1222.5"
            y2="295"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-12">
            <rect
              x="1073"
              y="306"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-13"
            x1="1246.5"
            y1="463"
            x2="1246.5"
            y2="138"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-13">
            <rect
              x="1097"
              y="149"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-14"
            x1="1320.5"
            y1="819"
            x2="1320.5"
            y2="494"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-14">
            <rect
              x="1171"
              y="505"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-15"
            x1="1441.5"
            y1="655"
            x2="1441.5"
            y2="330"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-15">
            <rect
              x="1292"
              y="341"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-16"
            x1="1481.5"
            y1="580"
            x2="1481.5"
            y2="255"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-16">
            <rect
              x="1332"
              y="266"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-17"
            x1="1530.5"
            y1="815"
            x2="1530.5"
            y2="490"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-17">
            <rect
              x="1381"
              y="501"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-18"
            x1="1534.5"
            y1="570"
            x2="1534.5"
            y2="245"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-18">
            <rect
              x="1385"
              y="256"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-19"
            x1="1628.5"
            y1="568"
            x2="1628.5"
            y2="243"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-19">
            <rect
              x="1479"
              y="254"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-20"
            x1="1743.5"
            y1="521"
            x2="1743.5"
            y2="196"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-20">
            <rect
              x="1594"
              y="207"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <linearGradient
            id="Degradado_sin_nombre_8-21"
            x1="1711.5"
            y1="754"
            x2="1711.5"
            y2="429"
            href="#Degradado_sin_nombre_8"
          />
          <clipPath id="clippath-21">
            <rect
              x="1562"
              y="440"
              width="299"
              height="299"
              rx="36.29"
              ry="36.29"
              style={{ fill: "none", strokeWidth: "0px" }}
            />
          </clipPath>
          <image id="image" width="3648" height="2056" href={image_amarillo} />
          <image
            id="image-2"
            width="1536"
            height="2048"
            href={image_azul_oscuro}
          />
          <image id="image-3" width="3984" height="2656" href={image_naranja} />
        </defs>
        <g style={{ isolation: "isolate" }}>
          <g id="Layer_2">
            <g id="Capa_2">
              <g id="mapa_base">
                <g style={{ clipPath: "url(#clippath)" }}>
                  <image
                    id="Capa_3_copia_2"
                    width="8203"
                    height="6310"
                    transform="translate(0 6) scale(.23)"
                    href={mapa_fondo}
                  />
                  <image
                    id="Capa_3_copia"
                    width="7127"
                    height="5361"
                    transform="translate(0 6) scale(.23)"
                    href={mapa_lineas_transmicable}
                  />
                </g>
              </g>
              <image
                id="etiqueta"
                width="4547"
                height="1155"
                transform="translate(736.8) scale(.24)"
                href={etiqueta}
              />
              <g
                id="estacion_4_base"
                style={{ mixBlendMode: "hue" }}
                onMouseEnter={handleHoverEstacion4}
                onMouseLeave={handleHoverEstacion4}
              >
                <path
                  d="m1465.73,641c0,4.98-2.31,17.51-.18,23.25,2.43,6.56,9.83,7.65,15.36,9.88,7.13,2.88,14.11,7.22,6.48,13.74-4.55,3.89-13.27,5.93-18.53,8.69,15.71.62,28.23,14.65,43,19.43,7.63,2.46,14.7,2.02,21.99,5.5,6.46,3.08,12.62,6.76,19.13,9.62,14.16,6.22,27.48,12.03,41.35,17.41,13.62,5.28,28.88,9.14,42.97,1.93,8.38-4.29,14.15-9.06,22.93-11.56,9.28-2.63,17.95-5.47,26.5-9.57,22.68-10.88-18.35-19.61-22.63-26.46-2.15-3.44.96-7.78-2.09-11.59-2.45-3.06-7.53-4.05-10.99-5.39-8.79-3.41-16.25-7.88-21.99-14.6-10.86-12.73-18.72-27.64-36.53-29.58-11.82-1.28-21.55-3.68-32.69-6.47-8.97-2.25-16.22-7.16-25.23-4.26-10.21,3.29-19.84,9.88-29.78,14.2-8.56,3.72-18.39-.33-27.54-1.3-3.85-.41-7.06-2.2-11.54-2.88Z"
                  style={{ fill: "#be6269", strokeWidth: "0px" }}
                />
              </g>
              <g
                id="estacion_2_base"
                style={{ mixBlendMode: "hue" }}
                onMouseEnter={handleHoverEstacion2}
                onMouseLeave={handleHoverEstacion2}
              >
                <path
                  d="m778.7,433.61c.91,15.34,3.24,30.08,3.22,45.92,0,7.12-1.15,15.71,4.46,20.07,4.38,3.4,13.93,3.19,19.3,4.91,14.19,4.54,29.26,2.09,43.08,5.61,6.59,1.68,12.73,5.06,18.77,7.05,8.09,2.67,8.33-1.55,15.08-6.44,10.91-7.9,24.52-10.32,35.84-18.29,3.65-2.57,12.44-7.35,14.2-10.8,2.65-5.16-1.33-14.77-2.51-20.24-1.57-7.26-.97-14.86-2.38-22.15-1.84-9.54-7.14-9.43-15.35-11.08-15.07-3.04-28.43-2.51-43.9-2.61-14.36-.1-25.68-8.76-41.08-8.06-15.49.71-26.69,8.36-40.66,14.68-3.02,1.36-6.62,3.18-8.07,1.43Z"
                  style={{ fill: "#be6269", strokeWidth: "0px" }}
                />
              </g>
              <g
                id="estacion_3_base"
                style={{ mixBlendMode: "hue" }}
                onMouseEnter={handleHoverEstacion3}
                onMouseLeave={handleHoverEstacion3}
              >
                <path
                  d="m1023.22,476.08c-3.58,6.41.45,23.74,0,32.39-.29,5.6-1.38,10.87-1.07,16.44.42,7.47.83,6.68,7.57,10.7,8.52,5.09,16.87,8.61,26.31,10.53,10.27,2.09,22.83.11,31.12,6.98,7.51,6.22,15.01,12.58,21.91,19.83-.08-4.81.43-10.18-.59-14.64,26.92-1.22,46.47-24.99,68.78-37.82,5.47-3.14,17.38-3.62,19.46-10.11,3.64-.55,6.81-1.24,10.04-2.82-8.39-1.44-16.35-4.55-24.95-5.34-.31-5.65-2.26-16.82,2.67-20.7,2.18-1.72,7.05.19,9.65-1.71,3.2-2.35,2.86-4.78,3.31-8.97.54-5.11,3.09-17,.7-21.69s-10.9-8.11-14.94-11.36c-12.41-9.95-22.31-11.94-37.43-14.2-12.83-1.92-28.43-6.29-41.13-6.15-7.43.08-17.91,6.07-23.23,11.28-7.96,7.78-4.4,5.3-5.53,8.99-.14,7.31,9.37,32.84,16.37,32.39.11,2.46-.13,3.55-1.6,5.25.02.07-1.66-2.25-1.84-2.48-.07.48.02.93.28,1.35-1.85-4.73-25.27.51-32.25.2-10.86-.49-25.42-2.25-34.35,4.39,1.98-.51,4-.54.72-2.72Z"
                  style={{ fill: "#be6269", strokeWidth: "0px" }}
                />
              </g>
              <g
                id="estacion_1_base"
                style={{ mixBlendMode: "hue" }}
                onMouseEnter={handleHoverEstacion1}
                onMouseLeave={handleHoverEstacion1}
              >
                <path
                  d="m115.63,1036.58c-4.99,6.46-8.56,13.56-14.05,19.5s-10.84,11.77-16.57,17.57c-9.79,9.91-15.31,24.53-24.73,35.4-5.02,5.79-11.51,10.45-16.67,16.09-4.75,5.19-8.55,12.8-12.14,18.84-7.14,12.01-13.64,24.7-20.7,36.73-6.35,10.82-9.61,24.66-6.13,37.04,2.99,10.65-1.06,31.9,10.93,35.9,10.92,3.64,26.7,7.81,38.57,6.14,13.04-1.83,30.6-6.17,42.02-12.91,6.36-3.75,11.48-8.71,16.33-14.25,4.71-5.38,3.82-9.95,3.13-16.95-1.28-13.08-1.33-31.7-7.85-43.21-1.45-2.56-2.93-4.25-5.39-5.7,5.68-9.12,11.99-17.5,17.62-26.78,9.81-16.15,19-32,26.49-49.11,4.63-10.58,12.86-19.28,12.35-30.91-.18-3.97.2-10.08-1.17-13.8-2.3-6.23-3.24-7.25-8.67-9.18-7.67-2.72-26.94-6.8-34.47-.3-.05,1.08.64,1.13,1.11-.12Z"
                  style={{ fill: "#be6269", strokeWidth: "0px" }}
                />
              </g>
              {showEstacion1 && (
                <image
                  id="estacion_1"
                  width="340"
                  height="156"
                  transform="translate(34 984) scale(1.54)"
                  href={estacion_1}
                />
              )}
              {showEstacion2 && (
                <image
                  id="estacion_2"
                  width="184"
                  height="178"
                  transform="translate(692 346) scale(1.44 1.37)"
                  href={estacion_2}
                />
              )}
              {showEstacion3 && (
                <image
                  id="estacion_3"
                  width="262"
                  height="194"
                  transform="translate(1014 325) scale(1.23 1.64)"
                  href={estacion_3}
                />
              )}
              {showEstacion4 && (
                <image
                  id="estacion_4"
                  width="269"
                  height="116"
                  transform="translate(1359 615) scale(1.39)"
                  href={estacion_4}
                />
              )}
              <path
                id="mark_1"
                d="m442,775h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{
                  fill: "#cb448c",
                  strokeWidth: "0px",
                }}
                onMouseEnter={handleHoverImage1}
                onMouseLeave={handleHoverImage1}
              />
              <path
                id="mark_2"
                d="m570,685h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage2}
                onMouseLeave={handleHoverImage2}
              />
              <path
                id="mark_3"
                d="m803,961h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#f1e32f", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage3}
                onMouseLeave={handleHoverImage3}
              />
              <path
                id="mark_4"
                d="m713,685h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#b970a0", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage4}
                onMouseLeave={handleHoverImage4}
              />
              <path
                id="mark_5"
                d="m633,586h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#54b6e6", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage5}
                onMouseLeave={handleHoverImage5}
              />
              <path
                id="mark_6"
                d="m934,637h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#f1e32f", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage6}
                onMouseLeave={handleHoverImage6}
              />
              <path
                id="mark_7"
                d="m762,519h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage7}
                onMouseLeave={handleHoverImage7}
              />
              <path
                id="mark_8"
                d="m815,357h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#cb448c", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage8}
                onMouseLeave={handleHoverImage8}
              />
              <path
                id="mark_9"
                d="m1071,402h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#4a98d2", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage9}
                onMouseLeave={handleHoverImage9}
              />
              <path
                id="mark_10"
                d="m1170,353h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#b970a0", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage10}
                onMouseLeave={handleHoverImage10}
              />
              <path
                id="mark_11"
                d="m1145,671h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#a792c3", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage11}
                onMouseLeave={handleHoverImage11}
              />
              <path
                id="mark_12"
                d="m1242,609h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage12}
                onMouseLeave={handleHoverImage12}
              />
              <path
                id="mark_13"
                d="m1271,452h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#54b6e6", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage13}
                onMouseLeave={handleHoverImage13}
              />
              <path
                id="mark_14"
                d="m1342,810h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage14}
                onMouseLeave={handleHoverImage14}
              />
              <path
                id="mark_15"
                d="m1465,637h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#4a98d2", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage15}
                onMouseLeave={handleHoverImage15}
              />
              <path
                id="mark_16"
                d="m1455,885h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#a792c3", strokeWidth: "0px" }}
              />
              <path
                id="mark_17"
                d="m1506,564h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#5c4892", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage17}
                onMouseLeave={handleHoverImage17}
              />
              <path
                id="mark_18"
                d="m1559,562h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#54b6e6", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage18}
                onMouseLeave={handleHoverImage18}
              />
              <path
                id="mark_19"
                d="m1555,803h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage19}
                onMouseLeave={handleHoverImage19}
              />
              <path
                id="mark_20"
                d="m1653,552h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage20}
                onMouseLeave={handleHoverImage20}
              />
              <path
                id="mark_21"
                d="m1863,507h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage21}
                onMouseLeave={handleHoverImage21}
              />
              <path
                id="mark_22"
                d="m1757,741h-.01c-.27-13.21-11.21-24-24.49-24s-24.22,10.79-24.49,24h-.01v.04c0,.15,0,.31,0,.46,0,.1,0,.2,0,.3h.25s19.89,63.14,19.89,63.14c.92,2.91,5.02,2.99,6.04.11l22.64-63.55h.18c0-.16,0-.31-.01-.47v-.03Zm-14-3.77h-.08l-9.7,27.24c-.44,1.23-2.2,1.2-2.59-.05l-8.53-27.06h-.11s0-.08,0-.13c0-.07,0-.13,0-.2v-.02s0,0,0,0c.12-5.66,4.81-10.29,10.49-10.29s10.38,4.62,10.49,10.29h0,0c0,.08,0,.15,0,.21Z"
                style={{ fill: "#ea7e67", strokeWidth: "0px" }}
                onMouseEnter={handleHoverImage22}
                onMouseLeave={handleHoverImage22}
              />
              {showMarkImage1 && (
                <g id="mark_image_1">
                  <rect
                    x="262"
                    y="466"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-1)" }}>
                    <image
                      width="1536"
                      height="2048"
                      transform="translate(192 406) scale(.29)"
                      href={image_rosado}
                    />
                  </g>
                </g>
              )}
              {showMarkImage2 && (
                <g id="mark_image_2">
                  <rect
                    x="383"
                    y="369"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-2)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-2)" }}>
                    <use
                      transform="translate(270 378) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage3 && (
                <g id="mark_image_3">
                  <rect
                    x="616"
                    y="642"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-3)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-3)" }}>
                    <use
                      transform="translate(509.08 615) scale(.16)"
                      href="#image"
                    />
                  </g>
                </g>
              )}

              {showMarkImage4 && (
                <g id="mark_image_4">
                  <rect
                    x="528"
                    y="375"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-4)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-4)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(441 386) scale(.14)"
                      href={image_turismo_2}
                    />
                  </g>
                </g>
              )}
              {showMarkImage5 && (
                <g id="mark_image_5">
                  <rect
                    x="456"
                    y="275"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-5)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-5)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(408 286) scale(.14)"
                      href={mapa_image_default}
                    />
                  </g>
                </g>
              )}
              {showMarkImage6 && (
                <g id="mark_image_6">
                  <rect
                    x="758"
                    y="311"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-6)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-6)" }}>
                    <use
                      transform="translate(651.08 284) scale(.16)"
                      href="#image"
                    />
                  </g>
                </g>
              )}
              {showMarkImage7 && (
                <g id="mark_image_7">
                  <rect
                    x="592"
                    y="212"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-7)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-7)" }}>
                    <use
                      transform="translate(479 221) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage8 && (
                <g id="mark_image_8">
                  <rect
                    x="641"
                    y="42"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-8)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-8)" }}>
                    <image
                      width="4032"
                      height="3024"
                      transform="translate(951.5 14) rotate(90) scale(.1)"
                      href={image_rosado_2}
                    />
                  </g>
                </g>
              )}
              {showMarkImage9 && (
                <g id="mark_image_9">
                  <rect
                    x="894"
                    y="88"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-9)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-9)" }}>
                    <use
                      transform="translate(894 53) scale(.23)"
                      href="#image-2"
                    />
                  </g>
                </g>
              )}
              {showMarkImage10 && (
                <g id="mark_image_10">
                  <rect
                    x="993"
                    y="48"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-10)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-10)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(902 55) scale(.15)"
                      href={image_turismo}
                    />
                  </g>
                </g>
              )}
              {showMarkImage11 && (
                <g id="mark_image_11">
                  <rect
                    x="958"
                    y="358"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-11)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-11)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(910 369) scale(.14)"
                      href={mapa_image_default}
                    />
                  </g>
                </g>
              )}
              {showMarkImage12 && (
                <g id="mark_image_12">
                  <rect
                    x="1060"
                    y="295"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-12)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-12)" }}>
                    <use
                      transform="translate(947 304) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage13 && (
                <g id="mark_image_13">
                  <rect
                    x="1084"
                    y="138"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-13)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-13)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(891.25 108) scale(.18)"
                      href={image_lavanderia}
                    />
                  </g>
                </g>
              )}
              {showMarkImage14 && (
                <g id="mark_image_14">
                  <rect
                    x="1158"
                    y="494"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-14)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-14)" }}>
                    <use
                      transform="translate(1045 503) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage15 && (
                <g id="mark_image_15">
                  <rect
                    x="1279"
                    y="330"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-15)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-15)" }}>
                    <use
                      transform="translate(1279 295) scale(.23)"
                      href="#image-2"
                    />
                  </g>
                </g>
              )}
              {showMarkImage17 && (
                <g id="mark_image_17">
                  <rect
                    x="1319"
                    y="255"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-16)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-16)" }}>
                    <image
                      width="1536"
                      height="2048"
                      transform="translate(1332 169.81) scale(.19)"
                      href={image_morado}
                    />
                  </g>
                </g>
              )}
              {showMarkImage19 && (
                <g id="mark_image_19">
                  <rect
                    x="1368"
                    y="490"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-17)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-17)" }}>
                    <use
                      transform="translate(1255 499) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage18 && (
                <g id="mark_image_18">
                  <rect
                    x="1372"
                    y="245"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-18)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-18)" }}>
                    <image
                      width="3648"
                      height="2056"
                      transform="translate(1324 256) scale(.14)"
                      href={mapa_image_default}
                    />
                  </g>
                </g>
              )}
              {showMarkImage20 && (
                <g id="mark_image_20">
                  <rect
                    x="1466"
                    y="243"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-19)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-19)" }}>
                    <use
                      transform="translate(1353 252) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage21 && (
                <g id="mark_image_21">
                  <rect
                    x="1581"
                    y="196"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-20)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-20)" }}>
                    <use
                      transform="translate(1468 205) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
              {showMarkImage22 && (
                <g id="mark_image_22">
                  <rect
                    x="1549"
                    y="429"
                    width="325"
                    height="325"
                    rx="36.29"
                    ry="36.29"
                    style={{
                      fill: "url(#Degradado_sin_nombre_8-21)",
                      strokeWidth: "0px",
                    }}
                  />
                  <g style={{ clipPath: "url(#clippath-21)" }}>
                    <use
                      transform="translate(1436 438) scale(.12)"
                      href="#image-3"
                    />
                  </g>
                </g>
              )}
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

export default DesktopMap;
