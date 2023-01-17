import {React,Fragment} from "react";
import CategoryCart from "../beautifyers/category-cart";
import HomePageCarousel from "../beautifyers/homepage-carousel";
import { Row ,Container} from "react-bootstrap";

const HomePage=()=>{
    const categories=[
        "Tablets",
        "Books",
        "Cameras",
        "Games",
        "Monitors",   
        "Printers",
        "Software",
        "videos"
    ];
    return(
    <Fragment>
        <HomePageCarousel/>
        <Container>
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    categories.map((category,idx)=>
                        (
                            <CategoryCart key={idx} category={category} idx={idx}/>
                        )
                    )
                }
            </Row>
        </Container>

    </Fragment>
    );


}

export default HomePage;