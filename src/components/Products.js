import React, {useState} from "react";
import Slider from "react-slick";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';

const Products = () => {
    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                  infinite: true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1 ,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1 ,
                }
            }
          ]
    };

    const [loaded, setLoaded] = useState(false);

    return(
        <div id="gallery">
            <Router>
                <Slider {...settings}>
                    <div className="product">
                        <Link to="/">
                            {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product1.png"
                                onLoad={() => setLoaded(true)} 
                            />

                            {/* <ReactImageAppear 
                                src="./products/product1.png"
                                loader="./loading.png"
                                className="w-100"
                            /> */}
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product2.png"
                                onLoad={() => setLoaded(true)} 
                            />
                            {/* <ReactImageAppear 
                                src="./products/product2.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                        </Link>
                    </div>

                    <div className="product"> 
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product3.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product3.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product4.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product4.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product5.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product5.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product6.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product6.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product7.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product7.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product8.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product8.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product9.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product9.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product10.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product10.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product11.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product11.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product12.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product12.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product13.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product13.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                    <div className="product">
                        <Link to="/">
                            {/* <ReactImageAppear 
                                src="./products/product14.png"
                                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                                className="w-100"
                            /> */}
                             {loaded ? null : (
                                <img src="./loading.png" className="loading-image" />
                            )}

                            <img 
                                style={loaded ? {} : { display: 'none' }}
                                src="./products/product14.png"
                                onLoad={() => setLoaded(true)} 
                            />
                        </Link>
                    </div>

                </Slider >
            </Router>
        </div>
    );
}

export default Products;