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
      images: null,
    };
  }

//   componentDidMount(){
//       fetch('api-endpoint')
//       .then(response => response.json())
//       .then(images => this.setState({images: images}))
//   }

  
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
    <React.Fragment>
    
    {/* breadcrumb */}
    <div className="breadcumb-area">
        <div className="container h-100">
            <div className="row h-100 align-items-end">
                <div className="col-12">
                    <div className="breadcumb--con">
                        <h2 className="title">Project</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Project</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* carousel */}
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
            infiniteLoop='true'
            >
            
            {/* {
                this.state.images.map( image => {
                    return <div>
                        <img src={ image.path }/>
                        <p>{ image.description }</p>
                    </div>
                })
            } */}
                        
            <div className="carousel-item active">
                <img src="../img/bg-img/1.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src="../img/bg-img/2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>
            <div className="carousel-item active">
                <img src="../img/bg-img/19.jpg" className="d-block w-100" alt="..." />
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
            {/* <div className="carousel-item active">
                slides={this.state.slides}
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div> */}
            </RBCarousel>
        </Col>
        </Row>

    </Container>
</div>
</React.Fragment>
      
    );
  }
}

// ReactDOM.render(<Demo />, document.getElementById("Demo"));
export default Carousel;