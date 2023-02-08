import { Component } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import fantasy from "../assets/books/fantasy.json";
import history from "../assets/books/history.json";
import horror from "../assets/books/horror.json";
import romance from "../assets/books/romance.json";
import scifi from "../assets/books/scifi.json";

class BookSelector extends Component {
  state = {
    categorie: ["Fantasy", "History", "Horror", "Romance", "Scifi"],
    books: [],
  };
  seleziona = (e) => {
    console.log("ciao", e.target);
    if (e.target.id === "Fantasy") {
      this.setState({
        books: fantasy,
      });
    }
    if (e.target.id === "History") {
      this.setState({
        books: history,
      });
    }
    if (e.target.id === "Horror") {
      this.setState({
        books: horror,
      });
    }
    if (e.target.id === "Romance") {
      this.setState({
        books: romance,
      });
    }
    if (e.target.id === "Scifi") {
      this.setState({
        books: scifi,
      });
    }
  };
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            {this.state.categorie.map((elem, index) => {
              return (
                <Col key={`categoria-${index}`}>
                  <button onClick={this.seleziona} id={elem}>
                    {elem}
                  </button>
                </Col>
              );
            })}
          </Row>

          <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-stretch">
            {this.state.books.map((book, index) => (
              <Col className="my-2" key={`Book-${index}`}>
                <Card className="myCard">
                  <Card.Img className="myCardImg" src={book.img} />
                  <Card.Body className="myCardBody">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>$ - {book.price}</Card.Text>
                    <Button
                      className="bookBtn"
                      onClick={(e) => {
                        console.log("click", e);

                        this.setState({ buyed: book });
                      }}
                    >
                      Add to Cart <i className="bi bi-cart4"></i>
                    </Button>
                    {this.state.buyed && (
                      <p>
                        You've buyed: "<strong>{this.state.buyed.title}</strong>"
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookSelector;
