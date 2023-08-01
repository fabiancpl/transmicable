import "./home.css";
import { Col, Container, Row } from "reactstrap";
import { Image } from "react-bootstrap";
import cableTransmicable from "../../assets/images/cable.png";
import cabinaTransmicable from "../../assets/images/cabina_transmicable.png";
import nubes2 from "../../assets/images/nubes_2.png";
import nubes1 from "../../assets/images/nubes_1.png";
import mountains from "../../assets/images/mountains.png";
import abordaje from "../../assets/images/abordaje.png";

function Home() {
  return (
    <div className="main-content">
      <Container fluid>
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
            <Col lg={4} md={4} sm={12} xs={12}></Col>
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${cabinaTransmicable})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "62vh",
                marginTop: "-3.5%",
              }}
              className="cabina-transmicable"
            ></Col>
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "8%",
              }}
              className="titulo-primera-pagina"
            >
              <div>
                <h3 style={{ textAlign: "center", color: "#E34339" }}>
                  <b>
                    TRANSFORMACIONES
                    <br />
                    URBANAS Y SALUD:
                  </b>
                </h3>
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
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              width: "200px",
              height: "100px",
              marginRight: "3%",
              marginLeft: "3%",
            }}
            className="logo-container"
          >
            <Image
              src="./src/assets/logos/salurbal.png"
              alt="Logo salurbal"
              style={{
                width: "70%",
                aspectRatio: "3/2",
                objectFit: "contain",
              }}
              className="logo-mobile"
              fluid
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              width: "200px",
              height: "100px",
              marginRight: "3%",
              marginLeft: "3%",
            }}
            className="logo-container"
          >
            <Image
              src="./src/assets/logos/drexel_university.png"
              alt="Logo drexel university"
              style={{
                width: "70%",
                aspectRatio: "3/2",
                objectFit: "contain",
                mixBlendMode: "darken",
              }}
              className="logo-mobile"
              fluid
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              width: "200px",
              height: "100px",
              marginRight: "3%",
              marginLeft: "3%",
            }}
            className="logo-container"
          >
            <Image
              src="./src/assets/logos/universidad_andes.png"
              alt="Logo universidad de los andes"
              style={{
                width: "70%",
                aspectRatio: "3/2",
                objectFit: "contain",
              }}
              className="logo-mobile"
              fluid
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              width: "200px",
              height: "100px",
              marginRight: "3%",
              marginLeft: "3%",
            }}
            className="logo-container"
          >
            <Image
              src="./src/assets/logos/universidad_norte.png"
              alt="Logo universidad del norte"
              style={{
                width: "70%",
                aspectRatio: "3/2",
                objectFit: "contain",
              }}
              className="logo-mobile"
              fluid
            />
          </Col>
          <Container fluid>
            <Row style={{ display: "flex", justifyContent: "right" }}></Row>
            <Row style={{ marginTop: "15%" }}>
              <Col lg={6} md={6} sm={12} xs={12}></Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    color: "#32677F",
                    margin: "5%",
                  }}
                >
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
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${abordaje})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "62vh",
                marginTop: "-25%",
              }}
              className="abordaje"
            ></Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
