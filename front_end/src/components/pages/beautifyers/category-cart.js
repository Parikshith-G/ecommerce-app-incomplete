import { Card,Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CategoryCart=({category,idx})=>{
  const images=[
    "/images/others/tablets-category.png",
    "/images/others/books-category.jpg",
    "/images/others/camera-category.png",
    "/images/others/games-category.png",
    "/images/others/monitors-category.png",
    "/images/others/printers-category.jpg",
    "/images/others/softwares-category.png",
    "/images/others/videos-category.jpg"
  ]
    return(
        <Card>
      <Card.Img 
      variant="top" 
      crossOrigin="anonymous" 
      src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/productlist">
          <Button variant="primary">Go to {category}</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
    );
}

export default CategoryCart;
