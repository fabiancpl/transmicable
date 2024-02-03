import { Loader } from "rsuite";

function Preload() {
  return (
    <div>
      <Loader backdrop={true} size="lg" content="Cargando..." vertical center />
    </div>
  );
}

export default Preload;
