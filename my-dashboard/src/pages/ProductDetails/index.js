import React, { useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import oneRedShirt from "../../assets/images/oneRedShirt.jpg";
import Slider from "react-slick";
import moreShirts from "../../assets/images/moreShirts.webp";
import redShirt from "../../assets/images/redShirt.jpg";
import shirtOne from "../../assets/images/shirtOne.jpg";
import sizeChart from "../../assets/images/sizeChart.webp";
import { MdBrandingWatermark } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { PiResizeFill } from "react-icons/pi";
import { MdPriceChange } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import profile from "../../assets/images/profile.jpg";
import UserAvatarImgComponent from "../Dashboard/components/userAvatarImg";
import Button from "@mui/material/Button";
import { MdReply } from "react-icons/md";

// Breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  const productSliderBig = useRef();
  const productSliderSml = useRef();

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  const ratings = [
    { stars: "5 star", width: "70%", amount: "60" },
    { stars: "4 star", width: "50%", amount: "40" },
    { stars: "3 star", width: "25%", amount: "20" },
    { stars: "2 star", width: "20%", amount: "15" },
    { stars: "1 star", width: "05%", amount: "05" },
  ];

  const reviews = [
    { img: profile, name: "Dulmi Chamathka", time: "10", value: 4.5 },
    {
      img: "https://img.freepik.com/free-photo/close-up-smiley-man-traveling_23-2149272090.jpg",
      name: "Cristian Fenando",
      time: "15",
      style: { width: "90%", marginLeft: "auto " },
      value: 3.5,
    },
    {
      img: "https://img.freepik.com/free-photo/portrait-female-tourist-visiting-great-wall-china_23-2151261823.jpg",
      name: "Anjalina rose",
      time: "20",
      style: { width: "90%", marginLeft: "auto " },
      value: 5.0,
    },
    {
      img: "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg",
      name: "Geogyana marcob",
      time: "25",
      value: 4.0,
    },
  ];

  const goToSlide = (index) => {
    productSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product view</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Products" component="a" href="#" />
            <StyledBreadcrumb label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection ">
          <div className="row">
            <div className="col-md-5 ">
              <div className="sliderWrapper ">
                <h6 className="mb-4 mt-1 fw-bold">Product Gallery</h6>
                <Slider
                  {...productSliderOptions}
                  ref={productSliderBig}
                  className="first-slide mb-2"
                >
                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item">
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>
                </Slider>

                <Slider
                  {...productSliderSmlOptions}
                  ref={productSliderSml}
                  className="second-slide"
                >
                  <div className="item" onClick={() => goToSlide(1)}>
                    <img src={oneRedShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(2)}>
                    <img src={moreShirts} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(3)}>
                    <img src={redShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(4)}>
                    <img src={shirtOne} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(5)}>
                    <img src={sizeChart} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(6)}>
                    <img src={moreShirts} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(7)}>
                    <img src={redShirt} className="w-100" alt="Product" />
                  </div>

                  <div className="item" onClick={() => goToSlide(8)}>
                    <img src={shirtOne} className="w-100" alt="Product" />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="sideSliderWrapper">
                <h6 className="mb-4 mt-2 fw-bold">Product Details</h6>
                <h4>
                  Formal suits for men normal dressing slim fit one piece dress
                </h4>

                <div className="productInfo mt-4">
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      :<span>Dragon</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <MdCategory />
                      </span>
                      <span className="name">Category</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      : <span>Man's</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <IoMdPricetags />
                      </span>
                      <span className="name">Tags</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE </span>
                          </li>

                          <li className="list-inline-item">
                            <span>PARTY </span>
                          </li>

                          <li className="list-inline-item">
                            <span>DRESS </span>
                          </li>

                          <li className="list-inline-item">
                            <span>NORMAL </span>
                          </li>

                          <li className="list-inline-item">
                            <span>SMART </span>
                          </li>

                          <li className="list-inline-item">
                            <span>MAN</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <IoIosColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>

                          <li className="list-inline-item">
                            <span>BLUE </span>
                          </li>

                          <li className="list-inline-item">
                            <span>WHITE </span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <PiResizeFill />
                      </span>
                      <span className="name">Size</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SM</span>
                          </li>

                          <li className="list-inline-item">
                            <span>MD </span>
                          </li>

                          <li className="list-inline-item">
                            <span>LG</span>
                          </li>

                          <li className="list-inline-item">
                            <span>XL</span>
                          </li>

                          <li className="list-inline-item">
                            <span>XXL</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <MdPriceChange />
                      </span>
                      <span className="name">Price</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      :{" "}
                      <span>
                        $37.00 <del className="text-danger">$42.00</del>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <FaCartPlus />
                      </span>
                      <span className="name">Stock</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      : <span>(68)Piece</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <MdPreview />
                      </span>
                      <span className="name">Review</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      : <span>(03)Review </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center side-content-left">
                      <span className="icon">
                        {" "}
                        <MdOutlinePublishedWithChanges />
                      </span>
                      <span className="name">Published</span>
                    </div>

                    <div className="col-sm-9 side-content-right">
                      : <span>02 October 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
            </p>

            <br />

            <h6 className="mt-4 mb-4 ">Rating Analytics</h6>

            <div className="container w-100 d-flex">
              <div className="ratingSectionOne ">
                <div className="ratingSection ">
                  {ratings.map((rating, index) => (
                    <div className="ratingrow d-flex align-items-center">
                      <span className="col1">{rating.stars}</span>

                      <div className="col2">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: rating.width }}
                          ></div>
                        </div>
                      </div>

                      <span className="col3">{rating.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ratingSectionTwo">
                <h5 className="totalReview">Total Reviews (150)</h5>
                <div className="bottomside">
                  <h1>4.9</h1>
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <h6>Your Avarage Rating Star</h6>
                </div>
              </div>
            </div>

            <br />

            <h6 className="mt-4 mb-4">Customer_reviews </h6>
            <div className="reviewsSection">
              {reviews.map((review) => (
                <div className="reviewsRow " style={review.style}>
                  <div className="row">
                    <div>
                      <div className="userInfo d-flex  align-items-center mb-3 w-100">
                        <UserAvatarImgComponent img={review.img} lg={true} />

                        <div className="info ">
                          <h6>{review.name}</h6>
                          <span>{review.time} minutes ago!</span>
                        </div>

                        <Button className="btn-blue btn-lg ms-auto btn-big">
                          {" "}
                          <MdReply />
                          REPLY
                        </Button>
                      </div>

                      <Rating
                        name="read-only"
                        value={review.value}
                        precision={0.5}
                        readOnly
                      />
                    </div>

                    <p className="mt-3">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here,
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <br />

            <h6>Review Reply Form</h6>

            <form className="reviewReplyForm">
              <textarea placeholder="write here " className="mb-4  "></textarea>

              <Button className="btn-blue btn-big btn-lg  w-100 ">
                drop your replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
