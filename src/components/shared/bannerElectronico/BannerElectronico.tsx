import electronic_banner_base from "../../../assets/images/electronic_banner_base.png";
import electronic_banner_icon from "../../../assets/images/electronic_banner_icon.png";

function BannerElectronico(props: any) {
  return (
    <>
      <div
        style={{
          justifyContent: "right",
          display: "flex",
          height: "12vh",
          padding: "0px",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${electronic_banner_icon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "7%",
            height: "90%",
            marginRight: "-3%",
            position: "relative",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${electronic_banner_base})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            width: "90%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "97%",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
            className="banner-electronico-container"
          >
            <h2
              style={{
                color: "#EEBE94",
                fontFamily: "Led",
                fontSize: "1.35rem",
                whiteSpace: "nowrap",
              }}
              className="moving-text-right"
            >
              {props.text}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerElectronico;
