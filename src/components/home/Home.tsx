import "./home.css";
import { Col, Container, Row } from "reactstrap";
import { Carousel, Image } from "react-bootstrap";
import cableTransmicable from "../../assets/images/cable.png";
import cabinaTransmicable from "../../assets/images/cabina_transmicable.png";
import nubes2 from "../../assets/images/nubes_2.png";
import nubes1 from "../../assets/images/nubes_1.png";
import mountains from "../../assets/images/mountains.png";
import abordaje from "../../assets/images/abordaje.png";
import salurbal from "../../assets/logos/salurbal.png";
import drexel from "../../assets/logos/drexel_university.png";
import uniandes from "../../assets/logos/universidad_andes.png";
import uninorte from "../../assets/logos/universidad_norte.png";
import banner_subtitulo from "../../assets/images/banner_subtitulo.png";
import mountains_personaje_1 from "../../assets/images/mountains_personaje_1.png";
import bubble_1 from "../../assets/images/bubble_1.png";
import audio_1 from "../../assets/images/audio_1.png";
import playing_audio_1 from "../../assets/images/audio_1_playing.png";
import personaje_1_mobile from "../../assets/images/personaje_1_mobile.png";
import personaje_1_mobile_playing from "../../assets/images/personaje_1_mobile_playing.png";
import banner_subtitulo_large from "../../assets/images/banner_subtitulo_large.png";
import transporte_img from "../../assets/images/transporte_img.png";
import seguridad_img from "../../assets/images/seguridad_img.png";
import calidad_vida_img from "../../assets/images/calidad_img.png";
import actividad_fisica_img from "../../assets/images/actividad_fisica_img.png";
import calidad_aire_img from "../../assets/images/calidad_aire_img.png";
import transporte_img_desktop from "../../assets/images/transporte_img_desktop.png";
import seguridad_img_desktop from "../../assets/images/seguridad_img_desktop.png";
import calidad_vida_img_desktop from "../../assets/images/calidad_img_desktop.png";
import actividad_fisica_img_desktop from "../../assets/images/actividad_fisica_img_desktop.png";
import calidad_aire_img_desktop from "../../assets/images/calidad_aire_img_desktop.png";
import React, { useState } from "react";
import banner_electronico from "../../assets/images/banner_electronico.png";
import grafica_1 from "../../assets/images/grafica_1.png";
import personaje_2 from "../../assets/images/personaje_2.png";
import personaje_2_playing from "../../assets/images/personaje_2_playing.png";
import personaje_2_mobile from "../../assets/images/personaje_2_mobile.png";
import grafica_1_mobile from "../../assets/images/grafica_1_mobile.png";
import banner_electronico_mobile from "../../assets/images/banner_electronico_mobile_temp.png";
import audio_2_mobile from "../../assets/images/audio_2_mobile.png";
import audio_2_mobile_playing from "../../assets/images/audio_2_playing.png";
import banner_3 from "../../assets/images/banner_3.png";
import icono_bullet from "../../assets/images/icono_bullet.png";
import grafica_2 from "../../assets/images/grafica_2.png";
import audio_controls from "../../assets/images/audio_controls.png";
import audio_controls_playing from "../../assets/images/audio_controls_playing.png";
import grafica_3 from "../../assets/images/grafica_3.png";
import personaje_3 from "../../assets/images/personaje_3.png";
import personaje_3_playing from "../../assets/images/personaje_3_playing.png";
import grafica_4 from "../../assets/images/grafica_4.png";
import grafica_4_mobile from "../../assets/images/grafica_4_mobile.png";
import audio_5 from "../../assets/images/audio_5.png";
import audio_5_playing from "../../assets/images/audio_5_playing.png";
import personaje_3_mobile from "../../assets/images/personaje_3_mobile.png";
import personaje_3_mobile_playing from "../../assets/images/personaje_3_mobile_playing.png";
import cuadro_mobile from "../../assets/images/cuadro_mobile.png";
import grafica_5 from "../../assets/images/grafica_5.png";
import detalle_grafica_5 from "../../assets/images/detalle_grafica_5.png";
import grafica_6 from "../../assets/images/grafica_6.png";

//Audios
import audio1_src from "../../assets/audios/Audio1_Ana.wav";
import audio2_src from "../../assets/audios/Audio2_Ana.wav";
import audio3_src from "../../assets/audios/Audio3_Maria.wav";
import audio4_src from "../../assets/audios/audio_compressed_4.mp3";
import audio5_src from "../../assets/audios/audio_compressed_5.mp3";
import audio6_src from "../../assets/audios/audio_compressed_6.mp3";
import audio7_src from "../../assets/audios/audio_compressed_7.mp3";

import DesktopMap from "../map/desktop/DesktopMap.tsx";
import MobileMap from "../map/mobile/MobileMap.tsx";
import BannerElectronico from "../shared/bannerElectronico/BannerElectronico.tsx";

function Home() {
  const [isAudioPlaying1, setIsAudioPlaying1] = useState(false);
  const audio1_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio1 = () => {
    if (audio1_ref.current) {
      if (!isAudioPlaying1) {
        audio1_ref.current.play();
      } else {
        audio1_ref.current.pause();
      }
      setIsAudioPlaying1((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying2, setIsAudioPlaying2] = useState(false);
  const audio2_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio2 = () => {
    if (audio2_ref.current) {
      if (!isAudioPlaying2) {
        audio2_ref.current.play();
      } else {
        audio2_ref.current.pause();
      }
      setIsAudioPlaying2((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying3, setIsAudioPlaying3] = useState(false);
  const audio3_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio3 = () => {
    if (audio3_ref.current) {
      if (!isAudioPlaying3) {
        audio3_ref.current.play();
      } else {
        audio3_ref.current.pause();
      }
      setIsAudioPlaying3((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying4, setIsAudioPlaying4] = useState(false);
  const audio4_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio4 = () => {
    if (audio4_ref.current) {
      if (!isAudioPlaying4) {
        audio4_ref.current.play();
      } else {
        audio4_ref.current.pause();
      }
      setIsAudioPlaying4((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying5, setIsAudioPlaying5] = useState(false);
  const audio5_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio5 = () => {
    if (audio5_ref.current) {
      if (!isAudioPlaying5) {
        audio5_ref.current.play();
      } else {
        audio5_ref.current.pause();
      }
      setIsAudioPlaying5((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying6, setIsAudioPlaying6] = useState(false);
  const audio6_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio6 = () => {
    if (audio6_ref.current) {
      if (!isAudioPlaying6) {
        audio6_ref.current.play();
      } else {
        audio6_ref.current.pause();
      }
      setIsAudioPlaying6((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  const [isAudioPlaying7, setIsAudioPlaying7] = useState(false);
  const audio7_ref = React.useRef<HTMLAudioElement | null>(null);
  const toggleAudio7 = () => {
    if (audio7_ref.current) {
      if (!isAudioPlaying7) {
        audio7_ref.current.play();
      } else {
        audio7_ref.current.pause();
      }
      setIsAudioPlaying7((prevIsAudioPlaying) => !prevIsAudioPlaying);
    }
  };

  return (
    <div className="main-content">
      <Container fluid style={{ margin: "0", padding: "0" }}>
        <section id="page1" style={{ width: "100vw" }}>
          <Row
            style={{
              backgroundImage: `url(${cableTransmicable})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "0.5vh",
              marginTop: "3.4%",
            }}
          ></Row>
          <Row className="justify-content-center" style={{ width: "100vw" }}>
            <Row>
              <Col lg={4} md={12} sm={12} xs={12}></Col>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                style={{
                  backgroundImage: `url(${cabinaTransmicable})`,
                  justifyContent: "center",
                }}
                className="cabina-transmicable"
              >
                <div
                  style={{
                    backgroundImage: `url(${nubes2})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "75% top",
                    height: "40vh",
                    width: "100vw",
                  }}
                  className="moving-image-left"
                ></div>
              </Col>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="titulo-primera-pagina"
              >
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                      color: "#E34339",
                      fontFamily: "Futura",
                    }}
                  >
                    TRANSFORMACIONES
                    <br />
                    URBANAS Y SALUD (TrUST):
                  </h1>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#4897AB",
                      fontFamily: "Futura",
                    }}
                  >
                    Resultados de la evaluación
                    <br />
                    del TransMiCable
                  </h2>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${nubes1})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginTop: "-16%",
                marginBottom: "-16%",
                overflow: "hidden",
              }}
              className="moving-image-right"
            ></Row>
            <Row
              className="justify-content-center"
              style={{
                paddingTop: "5%",
                paddingBottom: "5%",
                marginBottom: "-10%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col className="logo-container">
                <Image
                  src={salurbal}
                  alt="Logo salurbal"
                  className="logo-resource"
                  fluid
                />
              </Col>
              <Col className="logo-container">
                <Image
                  src={drexel}
                  alt="Logo drexel university"
                  style={{
                    mixBlendMode: "darken",
                  }}
                  className="logo-resource"
                  fluid
                />
              </Col>
              <Col className="logo-container">
                <Image
                  src={uniandes}
                  alt="Logo universidad de los andes"
                  className="logo-resource"
                  fluid
                />
              </Col>
              <Col className="logo-container">
                <Image
                  src={uninorte}
                  alt="Logo universidad del norte"
                  className="logo-resource"
                  fluid
                />
              </Col>
            </Row>
          </Row>
        </section>
        <section id="page2">
          <Row
            className="mountains"
            style={{
              backgroundImage: `url(${mountains})`,
            }}
          >
            <Col>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Col lg={6} md={12} sm={12} xs={12}></Col>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  style={{
                    backgroundImage: `url(${banner_subtitulo})`,
                  }}
                  className="banner-subtitulo"
                >
                  <h2
                    style={{
                      color: "white",
                      fontFamily: "Futura",
                    }}
                    className="texto-banner-subtitulo"
                  >
                    <b>¿Qué es TransMiCable?</b>
                  </h2>
                </Col>
              </Row>
              <Row style={{ marginTop: "2%" }}>
                <Col lg={6} md={6} sm={12} xs={12}></Col>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="parrafo-pagina-2-container"
                >
                  <p className="parrafo-pagina-2">
                    TransMiCable es el primer cable aéreo de Bogotá, el cual fue
                    inaugurado en Ciudad Bolívar en diciembre de 2018. La línea
                    del cable aéreo tiene 3.4 kilómetros de longitud, cuatro
                    estaciones y 163 cabinas. Este cable beneficia a la
                    localidad de Ciudad Bolívar en donde viven aproximadamente
                    600,000 personas y se conecta con el sistema de transporte
                    público de Bogotá. TransMiCable fue el principal componente
                    de una intervención urbana integral que incluye un museo
                    local, una biblioteca, una oficina de turismo, una oficina
                    de atención al ciudadano, una manzana del cuidado,
                    renovación de parques, mercados y pavimentación de vías.
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  backgroundImage: `url(${abordaje})`,
                }}
                className="abordaje-cabina"
              ></Row>
            </Col>
          </Row>
        </section>
        <section id="page3" style={{ marginTop: "2%" }}>
          <Row className="mapa-transmicable-container">
            <DesktopMap />
          </Row>
          <Row className="mapa-transmicable-container-mobile">
            <MobileMap />
          </Row>
        </section>
        <section id="page4">
          <Row
            style={{
              backgroundImage: `url(${mountains_personaje_1})`,
            }}
            className="mountains-personaje-1"
          >
            <Col lg={6} md={12} sm={12} xs={12} className="audio-1-column">
              <div
                style={{
                  backgroundImage: `url(${
                    isAudioPlaying1 ? playing_audio_1 : audio_1
                  })`,
                }}
                onClick={toggleAudio1}
                className="audio-1"
              >
                <audio
                  ref={audio1_ref}
                  src={audio1_src}
                  style={{ display: "none" }}
                ></audio>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className="bubble-1-column">
              <div
                style={{
                  backgroundImage: `url(${bubble_1})`,
                }}
                className="bubble-1"
              ></div>
            </Col>
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="personaje-1-mobile-col"
            >
              <div
                style={{
                  backgroundImage: `url(${
                    isAudioPlaying1
                      ? personaje_1_mobile_playing
                      : personaje_1_mobile
                  })`,
                }}
                onClick={toggleAudio1}
                className="personaje-1-mobile"
              >
                <audio
                  ref={audio1_ref}
                  src={audio1_src}
                  style={{ display: "none" }}
                ></audio>
              </div>
            </Col>
          </Row>
        </section>
        <section id="page5" style={{ marginBottom: "10%" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{
                backgroundImage: `url(${banner_subtitulo_large})`,
              }}
              className="banner-subtitulo-larger"
            >
              <h2
                style={{
                  color: "white",
                  paddingRight: "10%",
                  fontFamily: "Futura",
                }}
                className="texto-banner-subtitulo"
              >
                <b>Conoce los resultados del estudio TrUST</b>
              </h2>
            </Col>
          </Row>
          <Row
            style={{
              paddingBottom: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "3%",
              height: "90vh",
            }}
            className="carousel-container"
          >
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={transporte_img_desktop}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={calidad_aire_img_desktop}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={seguridad_img_desktop}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={actividad_fisica_img_desktop}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={calidad_vida_img_desktop}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="carousel-mobile">
              <Carousel
                interval={4000}
                nextIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-next-icon modified"
                  />
                }
                prevIcon={
                  <span
                    aria-hidden="true"
                    className="carousel-control-next-icon modified"
                  />
                }
              >
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={transporte_img} fluid></Image>
                  </div>
                  <Carousel.Caption>
                    <b>
                      <h1
                        style={{
                          color: "white",
                          backgroundColor: "#32667E",
                          padding: "1rem",
                          borderRadius: "30px",
                          fontFamily: "Lemon-Milk",
                          fontSize: "1.5rem",
                        }}
                      >
                        TRANSPORTE
                      </h1>
                    </b>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={calidad_aire_img} fluid></Image>
                  </div>
                  <Carousel.Caption>
                    <b>
                      <h1
                        style={{
                          color: "white",
                          backgroundColor: "#32667E",
                          padding: "1rem",
                          borderRadius: "30px",
                          fontFamily: "Lemon-Milk",
                          fontSize: "1.5rem",
                        }}
                      >
                        CALIDAD
                        <br />
                        DEL AIRE
                      </h1>
                    </b>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={seguridad_img} fluid></Image>
                  </div>
                  <Carousel.Caption>
                    <b>
                      <h1
                        style={{
                          color: "white",
                          backgroundColor: "#32667E",
                          padding: "1rem",
                          borderRadius: "30px",
                          fontFamily: "Lemon-Milk",
                          fontSize: "1.5rem",
                        }}
                      >
                        SEGURIDAD
                      </h1>
                    </b>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={actividad_fisica_img} fluid></Image>
                  </div>
                  <Carousel.Caption>
                    <b>
                      <h1
                        style={{
                          color: "white",
                          backgroundColor: "#32667E",
                          padding: "1rem",
                          borderRadius: "30px",
                          fontFamily: "Lemon-Milk",
                          fontSize: "1.5rem",
                        }}
                      >
                        ACTIVIDAD
                        <br />
                        FÍSICA
                      </h1>
                    </b>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={calidad_vida_img} fluid></Image>
                  </div>
                  <Carousel.Caption>
                    <b>
                      <h1
                        style={{
                          color: "white",
                          backgroundColor: "#32667E",
                          padding: "1rem",
                          borderRadius: "30px",
                          fontFamily: "Lemon-Milk",
                          fontSize: "1.5rem",
                        }}
                      >
                        CALIDAD
                        <br />
                        DE VIDA
                      </h1>
                    </b>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
          id="page6"
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "100%",
              width: "100%",
            }}
            className="pagina-6-desktop"
          >
            <BannerElectronico
              text={"TransMiCable nos facilita la movilidad"}
            />
            {/*<Row*/}
            {/*  style={{*/}
            {/*    height: "12%",*/}
            {/*    justifyContent: "right",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Col*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${banner_electronico})`,*/}
            {/*      backgroundSize: "contain",*/}
            {/*      backgroundRepeat: "no-repeat",*/}
            {/*      backgroundPosition: "right",*/}
            {/*      display: "flex",*/}
            {/*      alignItems: "center",*/}
            {/*      justifyContent: "right",*/}
            {/*      height: "100%",*/}
            {/*      width: "100%",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: "92%",*/}
            {/*        height: "90%",*/}
            {/*        overflow: "hidden",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*      }}*/}
            {/*      className="banner-electronico-container"*/}
            {/*    >*/}
            {/*      <h2*/}
            {/*        style={{*/}
            {/*          color: "#EEBE94",*/}
            {/*          fontFamily: "Led",*/}
            {/*          fontSize: "1.35rem",*/}
            {/*        }}*/}
            {/*        className="moving-text-right"*/}
            {/*      >*/}
            {/*        TransMiCable nos facilita la movilidad*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row style={{ height: "88%" }}>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              ></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row style={{ height: "15%", alignItems: "center" }}>
                  <h5
                    style={{
                      textAlign: "center",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    En la zona de influencia del TransMiCable en Ciudad Bolívar,
                    el tiempo de viaje al lugar de trabajo o estudio disminuyó
                    en 20 minutos un año despúes de su implementación.
                  </h5>
                </Row>
                <Row
                  style={{
                    height: "85%",
                    backgroundImage: `url(${grafica_1})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></Row>
              </Col>
              <Col
                lg={4}
                md={4}
                sm={12}
                xs={12}
                style={{
                  backgroundImage: `url(${
                    !isAudioPlaying2 ? personaje_2 : personaje_2_playing
                  })`,
                  backgroundSize: "contain",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                  marginTop: "5%",
                }}
                onClick={toggleAudio2}
              >
                <audio
                  ref={audio2_ref}
                  src={audio2_src}
                  style={{ display: "none" }}
                ></audio>
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              marginTop: "10%",
            }}
            className="pagina-6-mobile"
          >
            <Col style={{ height: "100%" }}>
              <Row
                style={{
                  minHeight: "6vh",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${banner_electronico_mobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                  }}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "38%",
                  justifyContent: "right",
                  paddingLeft: "8%",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${personaje_2_mobile})`,
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "38%",
                  backgroundImage: `url(${grafica_1_mobile})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Row>
              <Row
                style={{
                  backgroundImage: `url(${
                    !isAudioPlaying2 ? audio_2_mobile : audio_2_mobile_playing
                  })`,
                  backgroundSize: "70%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginTop: "10%",
                  height: "12%",
                }}
                onClick={toggleAudio2}
              >
                <audio
                  ref={audio2_ref}
                  src={audio2_src}
                  style={{ display: "none" }}
                ></audio>
              </Row>
            </Col>
          </Row>
        </section>
        <section
          id="page7"
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "5%",
          }}
        >
          <Row
            style={{ height: "100%", width: "100%", justifyContent: "left" }}
            className="pagina-7-desktop"
          >
            <Row style={{ height: "25%", width: "75%" }}>
              <div
                style={{
                  backgroundImage: `url(${banner_3})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <h2 style={{ color: "white", fontFamily: "Futura" }}>
                  <b>TransMiCable en Ciudad Bolivar</b>
                </h2>
              </div>
            </Row>
            <Row style={{ height: "70%" }}>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              ></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row style={{ height: "15%", alignItems: "left" }}></Row>
                <Row style={{ height: "35%", alignItems: "left" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <img src={icono_bullet} />
                    <p
                      style={{
                        marginLeft: "5%",
                        color: "#32677F",
                        fontFamily: "D-DIN",
                      }}
                    >
                      La satisfacción con el transporte público aumentó 36%
                      desde la implementación del TransMiCable.
                    </p>
                  </div>
                </Row>
                <Row style={{ height: "35%", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <img src={icono_bullet} />
                    <p
                      style={{
                        marginLeft: "5%",
                        color: "#32677F",
                        fontFamily: "D-DIN",
                      }}
                    >
                      La satisfacción con TransMicable es de 9/10 puntos.
                    </p>
                  </div>
                </Row>
                <Row style={{ height: "15%", alignItems: "left" }}></Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Row style={{ height: "75%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${grafica_2})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Col>
                </Row>
                <Row style={{ height: "25%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${
                        !isAudioPlaying3
                          ? audio_2_mobile
                          : audio_2_mobile_playing
                      })`,
                      backgroundSize: "65%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    onClick={toggleAudio3}
                  >
                    <audio
                      ref={audio3_ref}
                      src={audio3_src}
                      style={{ display: "none" }}
                    ></audio>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
            className="pagina-7-mobile"
          >
            <Col>
              <Row style={{ height: "12%" }}>
                <Col
                  style={{
                    backgroundImage: `url(${banner_subtitulo})`,
                  }}
                  className="banner-subtitulo"
                >
                  <h2
                    style={{
                      color: "white",
                      fontFamily: "Futura",
                    }}
                    className="texto-banner-subtitulo"
                  >
                    <b>TransMiCable en Ciudad Bolivar</b>
                  </h2>
                </Col>
              </Row>
              <Row style={{ height: "38%", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    marginBottom: "-20%",
                  }}
                >
                  <img src={icono_bullet} style={{ width: "15%" }} />
                  <p
                    style={{
                      marginLeft: "5%",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    La satisfacción con el transporte público aumentó 36% desde
                    la implementación del TransMiCable.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <img src={icono_bullet} style={{ width: "15%" }} />
                  <p
                    style={{
                      marginLeft: "5%",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    La satisfacción con TransMicable es de 9/10 puntos.
                  </p>
                </div>
              </Row>
              <Row
                style={{
                  height: "38%",
                  alignItems: "center",
                }}
              >
                <Col
                  sm={12}
                  xs={12}
                  style={{
                    backgroundImage: `url(${grafica_4_mobile})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "35% center",
                    height: "85%",
                  }}
                ></Col>
              </Row>
              <Row style={{ height: "12%" }}>
                <Col
                  style={{
                    backgroundImage: `url(${
                      !isAudioPlaying3 ? audio_controls : audio_controls_playing
                    })`,
                    backgroundSize: "80%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  onClick={toggleAudio3}
                >
                  <audio
                    ref={audio3_ref}
                    src={audio3_src}
                    style={{ display: "none" }}
                  ></audio>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section
          id="page8"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              height: "100%",
              width: "100%",
            }}
            className="pagina-8-desktop"
          >
            <BannerElectronico
              text={"TransMiCable nos proporciona un aire mas limpio"}
            />
            {/*<Row*/}
            {/*  style={{*/}
            {/*    justifyContent: "right",*/}
            {/*    height: "12%",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Col*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${banner_electronico})`,*/}
            {/*      backgroundSize: "contain",*/}
            {/*      backgroundRepeat: "no-repeat",*/}
            {/*      backgroundPosition: "right",*/}
            {/*      display: "flex",*/}
            {/*      alignItems: "center",*/}
            {/*      justifyContent: "right",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: "92%",*/}
            {/*        height: "90%",*/}
            {/*        overflow: "hidden",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*      }}*/}
            {/*      className="banner-electronico-container"*/}
            {/*    >*/}
            {/*      <h2*/}
            {/*        style={{*/}
            {/*          color: "#EEBE94",*/}
            {/*          fontFamily: "Led",*/}
            {/*          fontSize: "1.35rem",*/}
            {/*          whiteSpace: "nowrap",*/}
            {/*        }}*/}
            {/*        className="moving-text-right"*/}
            {/*      >*/}
            {/*        TransMiCable nos proporciona un aire mas limpio*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row style={{ height: "85%" }}>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col
                lg={1}
                md={1}
                sm={12}
                xs={12}
                style={{
                  height: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              ></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{
                    height: "20%",
                    paddingTop: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5
                    style={{
                      width: "70%",
                      textAlign: "center",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    En las cabinas de TransMiCable, en comparación con los buses
                    alimentadores, las concentraciones por viaje de material
                    particulado fino (PM2.5) fueron 27% más bajas y las de
                    hollín (eBC) fueron 34% más bajas.
                  </h5>
                </Row>
                <Row style={{ height: "80%", alignItems: "center" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${grafica_3})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      height: "80%",
                    }}
                  ></Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                {/*<Row style={{ height: "15%" }}>*/}
                {/*  <FormControl fullWidth>*/}
                {/*    <InputLabel*/}
                {/*      id="audio-group-4-5"*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      Escoge tu audio*/}
                {/*    </InputLabel>*/}
                {/*    <Select*/}
                {/*      labelId="audio-group-4-5-label"*/}
                {/*      id="audio-group-4-5-select"*/}
                {/*      value={audioSelectIndex}*/}
                {/*      label="Escoge tu audio"*/}
                {/*      onChange={handleChange}*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
                {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
                {/*    </Select>*/}
                {/*  </FormControl>*/}
                {/*</Row>*/}
                <Row style={{ height: "85%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${
                        !isAudioPlaying4 ? personaje_3 : personaje_3_playing
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    onClick={toggleAudio4}
                  >
                    <audio
                      ref={audio4_ref}
                      src={audio4_src}
                      style={{ display: "none" }}
                    ></audio>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              marginTop: "10%",
            }}
            className="pagina-8-mobile"
          >
            <Col style={{ height: "100%" }}>
              <Row
                style={{
                  minHeight: "6vh",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${banner_electronico_mobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                  }}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "45%",
                  justifyContent: "center",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${
                      !isAudioPlaying4
                        ? personaje_3_mobile
                        : personaje_3_mobile_playing
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={toggleAudio4}
                >
                  <audio
                    ref={audio4_ref}
                    src={audio4_src}
                    style={{ display: "none" }}
                  ></audio>
                </Col>
              </Row>
              {/*<Row style={{ height: "8%" }}>*/}
              {/*  <FormControl fullWidth>*/}
              {/*    <InputLabel id="audio-group-4-5" style={{ color: "#32677F" }}>*/}
              {/*      Escoge tu audio*/}
              {/*    </InputLabel>*/}
              {/*    <Select*/}
              {/*      labelId="audio-group-4-5-label"*/}
              {/*      id="audio-group-4-5-select"*/}
              {/*      value={audioSelectIndex}*/}
              {/*      label="Escoge tu audio"*/}
              {/*      onChange={handleChange}*/}
              {/*      style={{ color: "#32677F" }}*/}
              {/*    >*/}
              {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
              {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
              {/*    </Select>*/}
              {/*  </FormControl>*/}
              {/*</Row>*/}
              <Row
                style={{
                  height: "45%",
                  backgroundImage: `url(${grafica_3})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  marginTop: "5%",
                }}
              ></Row>
            </Col>
          </Row>
        </section>
        <section
          id="page9"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Row
            style={{ height: "100%", alignItems: "start" }}
            className="pagina-9-desktop"
          >
            <BannerElectronico
              text={"TransMiCable nos proporciona un aire mas limpio"}
            />
            {/*<Row*/}
            {/*  style={{*/}
            {/*    justifyContent: "right",*/}
            {/*    minHeight: "12%",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Col*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${banner_electronico})`,*/}
            {/*      backgroundSize: "contain",*/}
            {/*      backgroundRepeat: "no-repeat",*/}
            {/*      backgroundPosition: "right",*/}
            {/*      display: "flex",*/}
            {/*      alignItems: "center",*/}
            {/*      justifyContent: "right",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: "92%",*/}
            {/*        height: "90%",*/}
            {/*        overflow: "hidden",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*      }}*/}
            {/*      className="banner-electronico-container"*/}
            {/*    >*/}
            {/*      <h2*/}
            {/*        style={{*/}
            {/*          color: "#EEBE94",*/}
            {/*          fontFamily: "Led",*/}
            {/*          fontSize: "1.35rem",*/}
            {/*          whiteSpace: "nowrap",*/}
            {/*        }}*/}
            {/*        className="moving-text-right"*/}
            {/*      >*/}
            {/*        Con TransMiCable disminuyo la inseguridad*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row style={{ height: "85%" }}>
              <Col
                lg={1}
                md={1}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{
                    height: "20%",
                    paddingTop: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5
                    style={{
                      width: "70%",
                      textAlign: "center",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    La percepción de inseguridad y la vitimización (hogares
                    víctimas de hurto y robo) disminiuyó en la zona de
                    influencia del TransMiCable después de su implementación.
                  </h5>
                </Row>
                <Row style={{ height: "80%", alignItems: "center" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${grafica_4})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      height: "80%",
                    }}
                  ></Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <Row style={{ height: "85%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${
                        !isAudioPlaying5 ? audio_5 : audio_5_playing
                      })`,
                      backgroundSize: "85%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    onClick={toggleAudio5}
                  >
                    <audio
                      ref={audio5_ref}
                      src={audio5_src}
                      style={{ display: "none" }}
                    ></audio>
                  </Col>
                </Row>
                {/*<Row style={{ height: "15%" }}>*/}
                {/*  <FormControl fullWidth>*/}
                {/*    <InputLabel*/}
                {/*      id="audio-group-6-7"*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      Escoge tu audio*/}
                {/*    </InputLabel>*/}
                {/*    <Select*/}
                {/*      labelId="audio-group-6-7-label"*/}
                {/*      id="audio-group-6-7-select"*/}
                {/*      value={audioSelectIndex2}*/}
                {/*      label="Escoge tu audio"*/}
                {/*      onChange={handleChange2}*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
                {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
                {/*    </Select>*/}
                {/*  </FormControl>*/}
                {/*</Row>*/}
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
            className="pagina-9-mobile"
          >
            <Col style={{ height: "100%" }}>
              <Row
                style={{
                  minHeight: "6vh",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${banner_electronico_mobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                  }}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "30%",
                  justifyContent: "right",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${cuadro_mobile})`,
                    backgroundSize: "55%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Col>
              </Row>
              <Row style={{ height: "12%" }}>
                <p
                  style={{
                    textAlign: "center",
                    color: "#32677F",
                    fontFamily: "D-DIN",
                  }}
                >
                  Después de la implementación del TransMiCable en Ciudad
                  Bolívar disminuyó la percepción de inseguridad y la
                  victimización (hogares víctimas de hurto y robo).
                </p>
              </Row>
              <Row
                style={{
                  height: "12%",
                  backgroundImage: `url(${
                    !isAudioPlaying5 ? audio_controls : audio_controls_playing
                  })`,
                  backgroundSize: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onClick={toggleAudio5}
              >
                <audio
                  ref={audio5_ref}
                  src={audio5_src}
                  style={{ display: "none" }}
                ></audio>
              </Row>
              {/*<Row style={{ height: "8%" }}>*/}
              {/*  <FormControl>*/}
              {/*    <InputLabel id="audio-group-6-7" style={{ color: "#32677F" }}>*/}
              {/*      Escoge tu audio*/}
              {/*    </InputLabel>*/}
              {/*    <Select*/}
              {/*      labelId="audio-group-6-7-label"*/}
              {/*      id="audio-group-6-7-select"*/}
              {/*      value={audioSelectIndex2}*/}
              {/*      label="Escoge tu audio"*/}
              {/*      onChange={handleChange2}*/}
              {/*      style={{ color: "#32677F" }}*/}
              {/*    >*/}
              {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
              {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
              {/*    </Select>*/}
              {/*  </FormControl>*/}
              {/*</Row>*/}
              <Row
                style={{
                  height: "35%",
                  backgroundImage: `url(${grafica_4})`,
                  backgroundSize: "80%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Row>
            </Col>
          </Row>
        </section>
        <section
          id="page10"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Row
            style={{ height: "100%", alignItems: "start" }}
            className="pagina-10-desktop"
          >
            <BannerElectronico
              text={"Con TransMiCable continuamos siendo activos"}
            />
            {/*<Row*/}
            {/*  style={{*/}
            {/*    justifyContent: "right",*/}
            {/*    minHeight: "12%",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Col*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${banner_electronico})`,*/}
            {/*      backgroundSize: "contain",*/}
            {/*      backgroundRepeat: "no-repeat",*/}
            {/*      backgroundPosition: "right",*/}
            {/*      display: "flex",*/}
            {/*      alignItems: "center",*/}
            {/*      justifyContent: "right",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: "92%",*/}
            {/*        height: "90%",*/}
            {/*        overflow: "hidden",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*      }}*/}
            {/*      className="banner-electronico-container"*/}
            {/*    >*/}
            {/*      <h2*/}
            {/*        style={{*/}
            {/*          color: "#EEBE94",*/}
            {/*          fontFamily: "Led",*/}
            {/*          fontSize: "1.35rem",*/}
            {/*          whiteSpace: "nowrap",*/}
            {/*        }}*/}
            {/*        className="moving-text-right"*/}
            {/*      >*/}
            {/*        Con TransMiCable continuamos siendo activos*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row style={{ height: "85%" }}>
              <Col
                lg={1}
                md={1}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{
                    height: "20%",
                    paddingTop: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h5
                    style={{
                      width: "70%",
                      textAlign: "center",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    La actividad física vigorosa en el parque Illimaní aumentó
                    23.2 puntos porcentuales para las mujeres y 11.6 puntos
                    porcentuales para los hombres después de su renovación.
                  </h5>
                </Row>
                <Row style={{ height: "80%", alignItems: "center" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${grafica_5})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "25% center",
                      height: "80%",
                    }}
                  ></Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                {/*<Row style={{ height: "15%" }}>*/}
                {/*  <FormControl fullWidth>*/}
                {/*    <InputLabel*/}
                {/*      id="audio-group-7-8"*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      Escoge tu audio*/}
                {/*    </InputLabel>*/}
                {/*    <Select*/}
                {/*      labelId="audio-group-7-8-label"*/}
                {/*      id="audio-group-7-8-select"*/}
                {/*      value={audioSelectIndex3}*/}
                {/*      label="Escoge tu audio"*/}
                {/*      onChange={handleChange3}*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
                {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
                {/*    </Select>*/}
                {/*  </FormControl>*/}
                {/*</Row>*/}
                <Row style={{ height: "25%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${
                        !isAudioPlaying6
                          ? audio_controls
                          : audio_controls_playing
                      })`,
                      backgroundSize: "80%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    onClick={toggleAudio6}
                  >
                    <audio
                      ref={audio6_ref}
                      src={audio6_src}
                      style={{ display: "none" }}
                    ></audio>
                  </Col>
                </Row>
                <Row style={{ height: "60%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${detalle_grafica_5})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Col>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
            className="pagina-10-mobile"
          >
            <Col style={{ height: "100%" }}>
              <Row
                style={{
                  minHeight: "6vh",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${banner_electronico_mobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                  }}
                ></Col>
              </Row>
              <Row style={{ height: "15%" }}>
                <p
                  style={{
                    textAlign: "center",
                    color: "#32677F",
                    marginTop: "5%",
                    fontFamily: "D-DIN",
                  }}
                >
                  La actividad física vigorosa en el parque Illimaní aumentó
                  23.2 puntos porcentuales para las mujeres y 11.6 puntos
                  porcentuales para los hombres después de su renovación.
                </p>
              </Row>
              <Row
                style={{
                  height: "40%",
                  justifyContent: "right",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${grafica_5})`,
                    backgroundSize: "90%",
                    backgroundPosition: "25% center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={toggleAudio6}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "35%",
                  backgroundImage: `url(${detalle_grafica_5})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: " center",
                }}
              ></Row>
            </Col>
          </Row>
        </section>
        <section
          id="page11"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <Row
            style={{ height: "100%", alignItems: "start" }}
            className="pagina-11-desktop"
          >
            <BannerElectronico
              text={"TransMiCable mejoró la calidad de vida de las mujeres"}
            />
            {/*<Row*/}
            {/*  style={{*/}
            {/*    justifyContent: "right",*/}
            {/*    minHeight: "12%",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Col*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${banner_electronico})`,*/}
            {/*      backgroundSize: "contain",*/}
            {/*      backgroundRepeat: "no-repeat",*/}
            {/*      backgroundPosition: "right",*/}
            {/*      display: "flex",*/}
            {/*      alignItems: "center",*/}
            {/*      justifyContent: "right",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      style={{*/}
            {/*        width: "92%",*/}
            {/*        height: "90%",*/}
            {/*        overflow: "hidden",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*      }}*/}
            {/*      className="banner-electronico-container"*/}
            {/*    >*/}
            {/*      <h2*/}
            {/*        style={{*/}
            {/*          color: "#EEBE94",*/}
            {/*          fontFamily: "Led",*/}
            {/*          fontSize: "1.35rem",*/}
            {/*          whiteSpace: "nowrap",*/}
            {/*        }}*/}
            {/*        className="moving-text-right"*/}
            {/*      >*/}
            {/*        TransMiCable mejoró la calidad de vida de las mujeres*/}
            {/*      </h2>*/}
            {/*    </div>*/}
            {/*  </Col>*/}
            {/*</Row>*/}
            <Row style={{ height: "85%" }}>
              <Col
                lg={1}
                md={1}
                style={{
                  height: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRight: "5px dashed #F19B48",
                  }}
                ></div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row style={{ height: "70%", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      marginBottom: "-20%",
                      width: "90%",
                    }}
                  >
                    <img src={icono_bullet} style={{ width: "15%" }} />
                    <p
                      style={{
                        marginLeft: "5%",
                        color: "#32677F",
                        fontFamily: "D-DIN",
                      }}
                    >
                      La calidad de vida relacionada con la salud aumentó entre
                      las mujeres en la zona de influencia del TransMiCable
                      después de su implementación.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      width: "90%",
                    }}
                  >
                    <img src={icono_bullet} style={{ width: "15%" }} />
                    <p
                      style={{
                        marginLeft: "5%",
                        color: "#32677F",
                        fontFamily: "D-DIN",
                      }}
                    >
                      En los hombres de Ciudad Bolívar no se presentó un cambio
                      en el puntaje de calidad de vida relacionada con la salud.
                    </p>
                  </div>
                </Row>
                <Row
                  style={{
                    height: "25%",
                    backgroundImage: `url(${
                      !isAudioPlaying7 ? audio_controls : audio_controls_playing
                    })`,
                    backgroundSize: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  onClick={toggleAudio7}
                >
                  <audio
                    ref={audio7_ref}
                    src={audio7_src}
                    style={{ display: "none" }}
                  ></audio>
                </Row>
                {/*<Row style={{ height: "10%", justifyContent: "center" }}>*/}
                {/*  <FormControl style={{ width: "60%" }}>*/}
                {/*    <InputLabel*/}
                {/*      id="audio-group-10-11"*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      Escoge tu audio*/}
                {/*    </InputLabel>*/}
                {/*    <Select*/}
                {/*      labelId="audio-group-10-11-label"*/}
                {/*      id="audio-group-10-11-select"*/}
                {/*      value={audioSelectIndex4}*/}
                {/*      label="Escoge tu audio"*/}
                {/*      onChange={handleChange4}*/}
                {/*      style={{ color: "#32677F" }}*/}
                {/*    >*/}
                {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
                {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
                {/*    </Select>*/}
                {/*  </FormControl>*/}
                {/*</Row>*/}
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <Row style={{ height: "100%" }}>
                  <Col
                    style={{
                      backgroundImage: `url(${grafica_6})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Col>
                </Row>
              </Col>
            </Row>
          </Row>
          <Row
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
            }}
            className="pagina-11-mobile"
          >
            <Col style={{ height: "100%" }}>
              <Row
                style={{
                  minHeight: "6vh",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${banner_electronico_mobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                  }}
                ></Col>
              </Row>
              <Row style={{ height: "35%", justifyContent: "center" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    marginBottom: "-10%",
                    width: "90%",
                  }}
                >
                  <img src={icono_bullet} style={{ width: "15%" }} />
                  <p
                    style={{
                      marginLeft: "5%",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    La calidad de vida relacionada con la salud de las mujeres
                    aumentó después de la implementación de TransMiCable.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    width: "90%",
                  }}
                >
                  <img src={icono_bullet} style={{ width: "15%" }} />
                  <p
                    style={{
                      marginLeft: "5%",
                      color: "#32677F",
                      fontFamily: "D-DIN",
                    }}
                  >
                    En los hombres de Ciudad Bolívar no se presentó un cambio en
                    el puntaje de calidad de vida relacionada con la salud.
                  </p>
                </div>
              </Row>
              <Row
                style={{
                  height: "40%",
                  justifyContent: "right",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${grafica_6})`,
                    backgroundSize: "90%",
                    backgroundPosition: "25% center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={toggleAudio3}
                ></Col>
              </Row>
              <Row
                style={{
                  height: "12%",
                  backgroundImage: `url(${
                    !isAudioPlaying7 ? audio_controls : audio_controls_playing
                  })`,
                  backgroundSize: "75%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginTop: "5%",
                }}
                onClick={toggleAudio7}
              ></Row>
              {/*<Row style={{ height: "8%" }}>*/}
              {/*  <FormControl fullWidth>*/}
              {/*    <InputLabel*/}
              {/*      id="audio-group-10-11"*/}
              {/*      style={{ color: "#32677F" }}*/}
              {/*    >*/}
              {/*      Escoge tu audio*/}
              {/*    </InputLabel>*/}
              {/*    <Select*/}
              {/*      labelId="audio-group-10-11-label"*/}
              {/*      id="audio-group-10-11-select"*/}
              {/*      value={audioSelectIndex4}*/}
              {/*      label="Escoge tu audio"*/}
              {/*      onChange={handleChange4}*/}
              {/*      style={{ color: "#32677F" }}*/}
              {/*    >*/}
              {/*      <MenuItem value={0}>Audio Ana</MenuItem>*/}
              {/*      <MenuItem value={1}>Audio Maria</MenuItem>*/}
              {/*    </Select>*/}
              {/*  </FormControl>*/}
              {/*</Row>*/}
            </Col>
          </Row>
        </section>
        <section id="page12" style={{ marginBottom: "5%" }}>
          <Row
            style={{ height: "100%", alignItems: "start", overflow: "scroll" }}
          >
            <Row style={{ height: "25%", width: "75%" }}>
              <div
                style={{
                  backgroundImage: `url(${banner_subtitulo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  transform: "scaleX(-1)",
                }}
                id="video"
              >
                <h2
                  style={{
                    color: "white",
                    transform: "scaleX(-1)",
                    fontFamily: "Futura",
                  }}
                >
                  <b>
                    Conoce más del
                    <br />
                    estudio TrUST
                  </b>
                </h2>
              </div>
            </Row>
            <Row style={{ height: "85%", marginTop: "-2%" }}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Row
                  style={{ height: "100%" }}
                  className="video-player-container-row"
                >
                  <div
                    style={{
                      backgroundSize: "60%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "60%",
                        height: "80%",
                        backgroundColor: "#32677F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px",
                      }}
                      className="video-player-container"
                    >
                      <iframe
                        width="95%"
                        height="95%"
                        src="https://www.youtube-nocookie.com/embed/4dvQ2NPikU4?si=VtznJ-MOhnV1Nf48"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="video-player"
                      ></iframe>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "-3%" }}>
              <Col style={{ marginLeft: "7%", marginRight: "7%" }}>
                <Row>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img src={icono_bullet} style={{ width: "85px" }} />
                    <h2
                      style={{
                        marginLeft: "2%",
                        color: "#32677F",
                        fontFamily: "Futura",
                      }}
                    >
                      <b>Publicaciones en revistas científicas</b>
                    </h2>
                  </div>
                  <Row style={{ marginTop: "2%" }}>
                    <ul style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                      <li>
                        Baldovino-Chiquillo L, Sarmiento OL, O'Donovan G,
                        Wilches-Mogollon MA, Aguilar AF, Florez-Pregonero A, et
                        al. Effects of an urban cable car intervention on
                        physical activity: the TrUST natural experiment in
                        Bogotá, Colombia. Lancet Glob Health, 2023.
                      </li>
                      <li>
                        Guevara-Aladino P, Baldovino-Chiquillo L, Rubio MA,
                        Slesinski C, Levy P, Flórez D, et al. Winds of change:
                        the case of TransMiCable, a community-engaged transport
                        intervention improving equity and health in Bogotá,
                        Colombia. Cities & Health, 2022; 1:32-40.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1080/23748834.2022.2038981
                        </span>
                      </li>
                      <li>
                        Guzmán LA, Cantillo-Garcia VA, Arellana J, Sarmiento OL.
                        User expectations and perceptions towards new public
                        transport infrastructure: evaluating a cable car in
                        Bogotá. Transportation, 2022; 50:751-771.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1007/s11116-021-10260-x
                        </span>
                      </li>
                      <li>
                        Guzmán LA, Arellana J, Oviedo D, Castaño Herrera D,
                        Sarmiento OL. Lifting urban mobility for the poor:
                        Cable-cars, travel satisfaction and subjective
                        well-being. Transp Res, 2023; 103765.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1016/j.trd.2023.103765z
                        </span>
                      </li>
                      <li>
                        Guzmán LA, Cantillo-Garcia V, Arellana J, Sarmiento OL.
                        Evaluating the effects of social capital on travel
                        behavior: Modeling the choice of an innovative transport
                        mode. Travel Behaviour and Society 2023;33:100612.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1016/j.tbs.2023.100612
                        </span>
                      </li>
                      <li>
                        Morales-Betancourt R, Wilches-Mogollon MA, Sarmiento OL,
                        Mendez Molano D, Angulo D, filigrana P, et al.
                        Commuter’s personal exposure to air pollutants after the
                        implementation of a cable car for public transport:
                        Results of the natural experiment TrUST. Sci Total
                        Environ 2023; 865.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1016/j.scitotenv.2022.160880
                        </span>
                      </li>
                      <li>
                        Rubio MA, Sarmiento OL, Guevara T, O'Donovan G, Muñoz A,
                        Guzmán LA, et al. The Impacts of an Urban Cable Car
                        System on Liveability: A Mixed Methods Study in Bogotá,
                        Colombia. In: Biloria, N., Sebag, G., Robertson, H.
                        (eds) The Empathic City. S.M.A.R.T. Environments.
                        Springer, Cham, 2023.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.1007/978-3-031-32840-4_14
                        </span>
                      </li>
                      <li>
                        Sarmiento OL, Higuera-Mendieta D, Wilches-Mogollon MA,
                        Guzman LA, Rodriguez DA, Morales R, et al. Urban
                        Transformations and Health: Methods for TrUST-a Natural
                        Experiment Evaluating the Impacts of a Mass Transit
                        Cable Car in Bogota, Colombia. Front Public Health,
                        2020; 8:64.
                        <span style={{ color: "#AD454B" }}>
                          https://doi.org/10.3389/fpubh.2020.00064
                        </span>
                      </li>
                    </ul>
                  </Row>
                </Row>
                <Row>
                  <Col lg={8} md={12} sm={12} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                      }}
                    >
                      <img src={icono_bullet} style={{ width: "85px" }} />
                      <h2
                        style={{
                          marginLeft: "15px",
                          color: "#32677F",
                          fontFamily: "Futura",
                        }}
                      >
                        <b>Resúmenes de política</b>
                      </h2>
                    </div>
                    <Row style={{ marginTop: "2%" }}>
                      <ul style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                        <li>
                          Guevara T, Sarmiento OL, Higuera D, Useche AF, Rubio
                          MA, Wilches MA, et al. Transformaciones Urbanas y
                          Salud: Resultados de la evaluación del TransMiCable.
                          Resumen de resultados no. 1, 2020.
                        </li>
                        <li>
                          Guevara-Aladino P, Baldovino-Chiquillo L, Martínez P,
                          Cantillo-García V, Gómez-García L, Useche AF, et al.
                          Transformaciones Urbanas y Salud (TrUST): Resultados
                          de la evaluación del TransMiCable durante la pandemia
                          por COVID-19. Resumen de resultados no. 2, 2022.
                        </li>
                      </ul>
                    </Row>
                  </Col>
                  <Col lg={4} md={12} sm={12} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                      }}
                    >
                      <img src={icono_bullet} style={{ width: "85px" }} />
                      <h2
                        style={{
                          marginLeft: "15px",
                          color: "#32677F",
                          fontFamily: "Futura",
                        }}
                        id="contacto"
                      >
                        <b>Contacto</b>
                      </h2>
                    </div>
                    <Row style={{ marginTop: "4%" }}>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <div
                          style={{
                            height: "25vh",
                            width: "100%",
                            backgroundColor: "#D5D6D6",
                            borderRadius: "10px",
                            padding: "0.7rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              color: "#32677F",
                              fontFamily: "D-DIN",
                            }}
                          >
                            Olga Lucía Sarmiento
                            <br />
                            <span style={{ color: "#AD454B" }}>
                              (osarmien@uniandes.edu.co)
                            </span>
                            <br />
                            <br />
                            Proyecto Salud Urbana en América Latina (SALURBAL):
                            <br />
                            <span style={{ color: "#AD454B" }}>
                              https://drexel.edu/lac/salurbal/overview/
                            </span>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img src={icono_bullet} style={{ width: "85px" }} />
                    <h2
                      style={{
                        marginLeft: "2%",
                        color: "#32677F",
                        fontFamily: "Futura",
                      }}
                    >
                      <b>Desarrolladores</b>
                    </h2>
                  </div>
                  <Row style={{ marginTop: "2%" }}>
                    <Col lg={6} md={12} sm={12} xs={12}>
                      <p style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                        Autores:
                        <br />
                        <br />
                        Olga Lucia Sarmiento (1), Laura Baldovino Chiquillo (1),
                        María Alejandra Wilches (1, 2), Donny Sebastián Pasos
                        (1), Leonardo Palencia (1), Luis Ángel Guzmán (2), Alex
                        Quistberg (3).
                      </p>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                      <div
                        style={{
                          height: "25vh",
                          width: "100%",
                          backgroundColor: "#D5D6D6",
                          borderRadius: "10px",
                          padding: "0.7rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ol style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                          <li>
                            Facultdad de Medicina, Universidad de los Andes,
                            Bogotá, Colombia.
                          </li>
                          <li>
                            Departamento de Ingeniería, Universidad de los
                            Andes, Bogotá, Colombia.
                          </li>
                          <li>Drexel University, Filadelfia, Estados Unidos</li>
                        </ol>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "2%", justifyContent: "center" }}>
                    <Col lg={4} md={12} sm={12} xs={12}>
                      <p style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                        Diseño gráfico: Vera Fonseca
                      </p>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                      <p style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                        Desarrollo web: Fabián Peña
                      </p>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                      <p style={{ color: "#32677F", fontFamily: "D-DIN" }}>
                        Producción de audio: Nikol Pizarro
                      </p>
                    </Col>
                  </Row>
                </Row>
                <Row style={{ marginTop: "2%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img src={icono_bullet} style={{ width: "85px" }} />
                    <h2
                      style={{
                        marginLeft: "2%",
                        color: "#32677F",
                        fontFamily: "Futura",
                      }}
                    >
                      <b>Financiadores</b>
                    </h2>
                  </div>
                  <Row style={{ justifyContent: "center" }}>
                    <div
                      style={{
                        height: "18vh",
                        width: "60%",
                        backgroundColor: "#D5D6D6",
                        borderRadius: "10px",
                        padding: "0.7rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          color: "#32677F",
                          fontFamily: "D-DIN",
                        }}
                      >
                        <b style={{ color: "#32677F" }}>TrUST</b> fue financiado
                        por el Wellcome Trust, el Ministerio de Ciencia y
                        Tecnología e Innovación, la Secretaría Distrital de
                        Planeación de Bogotá, la Universidad de los Andes y la
                        Universidad del Norte.
                      </p>
                    </div>
                  </Row>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "5%", padding: "0px" }}>
              <Col
                style={{
                  height: "25vh",
                  width: "100vw",
                  backgroundColor: "#D5D6D6",
                  alignItems: "center",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Col className="logo-container">
                    <Image
                      src={salurbal}
                      alt="Logo salurbal"
                      className="logo-resource"
                      fluid
                    />
                  </Col>
                  <Col className="logo-container">
                    <Image
                      src={drexel}
                      alt="Logo drexel university"
                      style={{
                        mixBlendMode: "darken",
                      }}
                      className="logo-resource"
                      fluid
                    />
                  </Col>
                  <Col className="logo-container">
                    <Image
                      src={uniandes}
                      alt="Logo universidad de los andes"
                      className="logo-resource"
                      fluid
                    />
                  </Col>
                  <Col className="logo-container">
                    <Image
                      src={uninorte}
                      alt="Logo universidad del norte"
                      className="logo-resource"
                      fluid
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Home;
