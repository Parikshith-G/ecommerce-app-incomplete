import { LinkContainer } from "react-router-bootstrap";
import { Carousel } from "react-bootstrap";
const HomePageCarousel=()=>{
    const mpoint={
      cursor:"pointer"
    };
    return(
      <Carousel>

      <Carousel.Item>
        <img
          style={{height:'300px' , objectFit:'contain'}}
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        

        <Carousel.Caption>
        <LinkContainer style={mpoint} to="/productdetails">
          <h3>HP Ryzen 5</h3>
        </LinkContainer>
          <p>Power of super-computer in your hands.</p>
        </Carousel.Caption>
          
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'300px' , objectFit:'contain'}}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={mpoint} to="/productdetails">
          <h3>Harry Potter</h3>
        </LinkContainer>
          <p>A literary masterpiece by J.K.Rowling</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
        style={{height:'300px' , objectFit:'contain'}}
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={mpoint} to="/productdetails">
          <h3>Canon EOS 1500D</h3>
        </LinkContainer>
          <p>
            Capture the world as you see
          </p>
        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>
    );
}
export default HomePageCarousel;