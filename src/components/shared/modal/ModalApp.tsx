import { Modal, ModalBody } from "reactstrap";
import { Image } from "react-bootstrap";

function ModalApp(props: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal
        isOpen={props.open}
        toggle={props.toggle}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          aspectRatio: "1/1",
        }}
      >
        <ModalBody
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            border: "none",
            stroke: "none",
          }}
        >
          <Image fluid src={props.image} style={{ width: "70%" }} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalApp;
