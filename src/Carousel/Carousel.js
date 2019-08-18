import React from "react";
import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import "../style.css";

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = { height: 400, width: "100%" };

class Carousel extends React.PureComponent {
  
    constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
    //   slides: [
    //       (<img src="https://www.w3schools.com/bootstrap/ny.jpg" className="d-block w-100" alt="..." />),
    //       (<img src="https://www.w3schools.com/bootstrap/ny.jpg" className="d-block w-100" alt="..." />),
    //       (<img src="https://www.w3schools.com/bootstrap/ny.jpg" className="d-block w-100" alt="..." />),
    //   ],
    };
  }

  
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
    <div class="mona-projects-area section-padding-80-0 mb-50">
    <Container>
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Col md={24} md={12}>
            <RBCarousel
            animation={true}
            autoplay={this.state.autoplay}
            slideshowSpeed={2000}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            onSelect={this.onSelect}
            ref={r => (this.slider = r)}
            version={4}
            >
            {/* <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://www.w3schools.com/bootstrap/ny.jpg"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
            </Media> */}
            {/* <div className="carousel-item active">
                slides={this.state.slides}
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div> */}
            
            <div className="carousel-item active">
                <img src="https://www.w3schools.com/bootstrap/ny.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src="https://pbs.twimg.com/profile_images/1147673817537490944/FfVoY021_400x400.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src="https://data.whicdn.com/images/274547293/superthumb.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            {/* <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
            </div> */}
            {/* <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                <iframe
                    style={{ width: 500 }}
                    height="250"
                    src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                />
                </div>
                <div className="carousel-caption">Youtube</div>
            </div> */}
            </RBCarousel>
        </Col>
        </Row>

    </Container>
</div>
      
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById("Demo"));
export default Carousel;