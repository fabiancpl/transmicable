import "./home.css";
import { Col, Container, Row } from "reactstrap";
import { Image } from "react-bootstrap";
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
import { useState } from "react";

function Home() {
  const [isAudioPlaying1, setIsAudioPlaying1] = useState(false);

  const toggleAudio1 = () => {
    setIsAudioPlaying1((prevIsAudioPlaying) => !prevIsAudioPlaying);
  };

  const [isAudioPlaying1Mobile, setIsAudioPlaying1Mobile] = useState(false);

  const toggleAudio1Mobile = () => {
    setIsAudioPlaying1Mobile((prevIsAudioPlaying) => !prevIsAudioPlaying);
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
          <Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
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
                      URBANAS Y SALUD:
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
          </Row>
        </section>
        <Row
          className="justify-content-center"
          style={{
            paddingTop: "6%",
            backgroundImage: `url(${mountains})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
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
          <section id="page2">
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
                  ¿Qué es TransMiCable?
                </h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Col lg={6} md={6} sm={12} xs={12}></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p className="parrafo-pagina-2">
                  TransMiCable es el primer cable aéreo de Bogotá, el cual fue
                  inaugurado en Ciudad Bolívar en diciembre de 2018. La línea
                  del cable aéreo tiene 3.4 kilómetros de longitud, cuatro
                  estaciones y 163 cabinas. Este cable beneficia a la localidad
                  de Ciudad Bolívar en donde viven aproximadamente 600,000
                  personas y se conecta con el sistema de transporte público de
                  Bogotá. TransMiCable fue el principal componente de una
                  intervención urbana integral que incluye un museo local, una
                  biblioteca, una oficina de turismo, una oficina de atención al
                  ciudadano, una manzana del cuidado, renovación de parques,
                  mercados y pavimentación de vías.
                </p>
              </Col>
            </Row>
            <Row
              style={{
                backgroundImage: `url(${abordaje})`,
              }}
              className="abordaje-cabina"
            ></Row>
          </section>
          <section id="page3">
            <Row>
              <Col
                lg={12}
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
                ></div>
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
                      isAudioPlaying1Mobile
                        ? personaje_1_mobile_playing
                        : personaje_1_mobile
                    })`,
                  }}
                  onClick={toggleAudio1Mobile}
                  className="personaje-1-mobile"
                ></div>
              </Col>
            </Row>
          </section>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
