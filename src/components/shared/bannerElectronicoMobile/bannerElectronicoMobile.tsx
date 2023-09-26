import banner_electronico_mobile from "../../../assets/images/electronic_banner_base.png";

function BannerElectronicoMobile(props: any) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "6vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${banner_electronico_mobile})`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "0px",
          justifyContent: "center",
        }}
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
    </>
  );
}

export default BannerElectronicoMobile;
