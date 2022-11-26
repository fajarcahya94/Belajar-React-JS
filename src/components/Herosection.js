import { Container } from "react-bootstrap";

const Herosection = () => {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center text-center bg">
        <div>
          <h1 className="fw-bold">AYO NOBAR FILM</h1>
          <span>Nonton film bareng gratis, ngga pake mikir gaes!</span>
          <div>
            <button className="btn-lihat fw-bold my-3">Lihat Film</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Herosection;
