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
          background: "#32677F",
        }}
      >
        <ModalBody
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            background: "#32677F",
            border: "none",
            stroke: "none",
          }}
        >
          <Image fluid src={props.image} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalApp;
