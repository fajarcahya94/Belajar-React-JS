import { Row, Col, Card, Container, Button } from "react-bootstrap";
import img1 from "../assets/imgs/maxresdefault.jpg";

const Content = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Spider-Man: No Way Home</Card.Title>
                  <Card.Text>
                    Pertama kalinya dalam sejarah layar lebar Spider-Man, identitas asli dari pahlawan nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya,
                    dan menempatkan semua orang terdekatnya dalam posisi paling terancam.
                  </Card.Text>
                  <Button variant="dark">Lihat</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Content;
