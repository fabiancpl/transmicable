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
import mapa_desktop from "../../assets/images/mapa_desktop.png";
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

//Audios
import audio1_src from "../../assets/audios/Audio1_Ana.wav";
import audio2_src from "../../assets/audios/Audio2_Ana.wav";
import audio3_src from "../../assets/audios/Audio3_Maria.wav";
import audio4_src from "../../assets/audios/Audio4_Ana.wav";
import audio5_src from "../../assets/audios/Audio5_Maria.wav";

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

  return (
    <div className="main-content">
      <Container fluid>
        <section id="page1">
          <Row
            style={{
              backgroundImage: `url(${cableTransmicable})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              minHeight: "0.5vh",
              marginTop: "3.4%",
            }}
          ></Row>
          <Row className="justify-content-center">
            <Row
              style={{
                backgroundImage: `url(${nubes2})`,
                backgroundSize: "70%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "75% top",
              }}
            >
              <Col lg={4} md={12} sm={12} xs={12}></Col>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                style={{
                  backgroundImage: `url(${cabinaTransmicable})`,
                }}
                className="cabina-transmicable"
              ></Col>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="titulo-primera-pagina"
              >
                <div>
                  <h1 style={{ textAlign: "center", color: "#E34339" }}>
                    <b>
                      TRANSFORMACIONES
                      <br />
                      URBANAS Y SALUD (TrUST):
                    </b>
                  </h1>
                  <h2 style={{ textAlign: "center", color: "#4897AB" }}>
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
              }}
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
        <section id="page3">
          <Row className="mapa-transmicable-container">
            <Col
              style={{
                backgroundImage: `url(${mapa_desktop})`,
              }}
              className="mapa-transmicable"
            ></Col>
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
                src={transporte_img}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image fluid src={seguridad_img} style={{ width: "80%" }}></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={calidad_vida_img}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={actividad_fisica_img}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="imagenes-resultado-trust">
              <Image
                fluid
                src={calidad_aire_img}
                style={{ width: "80%" }}
              ></Image>
            </Col>
            <Col className="carousel-mobile">
              <Carousel interval={4000} indicators={false}>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={transporte_img} fluid></Image>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={seguridad_img} fluid></Image>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={calidad_vida_img} fluid></Image>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={actividad_fisica_img} fluid></Image>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="carousel-mobile-item"
                  >
                    <Image src={calidad_aire_img} fluid></Image>
                  </div>
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
            <Row
              style={{
                minHeight: "12vh",
              }}
            >
              <Col
                style={{
                  backgroundImage: `url(${banner_electronico})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ color: "#EEBE94" }}>
                  TransMiCable nos facilita la movilidad - TransMiCable nos
                  facilitia la movilidad
                </h2>
              </Col>
            </Row>
            <Row style={{ height: "88%" }}>
              <Col
                lg={2}
                md={2}
                sm={12}
                xs={12}
                style={{ height: "100%" }}
              ></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row style={{ height: "15%", alignItems: "center" }}>
                  <h5 style={{ textAlign: "center", color: "#32677F" }}>
                    El tiempo promedio de viaje en Ciudad Bolívar disminuyó en
                    20 minutos un año despúes de la implementación del
                    TransMiCable
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
                <h2 style={{ color: "white" }}>
                  <b>En Ciudad Bolivar</b>
                </h2>
              </div>
            </Row>
            <Row style={{ height: "70%" }}>
              <Col lg={2} md={2} sm={12} xs={12}></Col>
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
                    <p style={{ marginLeft: "5%", color: "#32677F" }}>
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
                    <p style={{ marginLeft: "5%", color: "#32677F" }}>
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
                          ? audio_controls
                          : audio_controls_playing
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
                    }}
                    className="texto-banner-subtitulo"
                  >
                    <b>En Ciudad Bolivar</b>
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
                  <p style={{ marginLeft: "5%", color: "#32677F" }}>
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
                  <p style={{ marginLeft: "5%", color: "#32677F" }}>
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
        <section id="page8" style={{ marginBottom: "5%" }}>
          <Row
            style={{ height: "100%", alignItems: "start" }}
            className="pagina-8-desktop"
          >
            <Row
              style={{
                justifyContent: "right",
                minHeight: "12%",
              }}
            >
              <Col
                style={{
                  backgroundImage: `url(${banner_electronico})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ color: "#EEBE94" }}>
                  TransMiCable nos facilita la movilidad - TransMiCable nos
                  facilitia la movilidad
                </h2>
              </Col>
            </Row>
            <Row style={{ minHeight: "85%" }}>
              <Col lg={2} md={2} sm={2} xs={2}></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{
                    height: "20%",
                    paddingTop: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      width: "70%",
                      textAlign: "center",
                      color: "#32677F",
                    }}
                  >
                    Las concentraciones de hollín son bajas (2.5 microgramos/m3)
                    dentro de las cabinas del TransMiCable en comparación con
                    los buses alimentadores y de TransMilenio.
                  </p>
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
                <Row style={{ height: "100%" }}>
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
                  justifyContent: "right",
                  paddingLeft: "8%",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${
                      !isAudioPlaying3
                        ? personaje_3_mobile
                        : personaje_3_mobile_playing
                    })`,
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
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
              <Row
                style={{
                  height: "45%",
                  backgroundImage: `url(${grafica_3})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Row>
            </Col>
          </Row>
        </section>
        <section id="page9" style={{ marginBottom: "5%" }}>
          <Row
            style={{ height: "100%", alignItems: "start" }}
            className="pagina-9-desktop"
          >
            <Row
              style={{
                justifyContent: "right",
                minHeight: "12%",
              }}
            >
              <Col
                style={{
                  backgroundImage: `url(${banner_electronico})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ color: "#EEBE94" }}>
                  TransMiCable nos facilita la movilidad - TransMiCable nos
                  facilitia la movilidad
                </h2>
              </Col>
            </Row>
            <Row style={{ minHeight: "85%" }}>
              <Col lg={1} md={1} sm={1} xs={1}></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Row
                  style={{
                    height: "20%",
                    paddingTop: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      width: "70%",
                      textAlign: "center",
                      color: "#32677F",
                    }}
                  >
                    Después de la implementación del TransMiCable en Ciudad
                    Bolívar disminuyó la percepción de inseguridad y la
                    victimización (hogares víctimas de hurto y robo).
                  </p>
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
                <Row style={{ height: "100%" }}>
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
            <Col style={{ height: "100%", marginTop: "-15%" }}>
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
                  height: "35%",
                  justifyContent: "right",
                }}
              >
                <Col
                  style={{
                    backgroundImage: `url(${cuadro_mobile})`,
                    backgroundSize: "70%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={toggleAudio3}
                ></Col>
              </Row>
              <Row style={{ height: "15%" }}>
                <p style={{ textAlign: "center", color: "#32677F" }}>
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
              <Row
                style={{
                  height: "35%",
                  backgroundImage: `url(${grafica_4})`,
                  backgroundSize: "90%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Row>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Home;
