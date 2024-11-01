import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { emphasize, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoCloseCircle } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import oneRedShirt from "../../assets/images/oneRedShirt.jpg";
import { FaImages } from "react-icons/fa";

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

const ProductUpload = () => {
  const [categoryVal, setcategoryVal] = useState("");
  const [ratingsValue, setRatingValue] = useState(1);

  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
  };

  return (
    <>
      <div className="right-content w-100">
        <div
          className="card shadow border-0 w-100 flex-row p-4 res-col {
    flex-direction: column !important ;
  }"
        >
          <h5 className="mb-0">Product Upload</h5>
          <Breadcrumbs
            aria-label="breadcrumb"
            className="ms-auto mr-10 breadcrumbs_"
          >
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" label="Products" href="#" />
            <StyledBreadcrumb label="Product Upload" />
          </Breadcrumbs>
        </div>

        <form className="form">
          <div className="row">
            <div>
              <div className="card p-4">
                <h5 className="mb-4">Basic Information</h5>
                <div className="form-group">
                  <h6>PRODUCT NAME</h6>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows={5} cols={10}></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100 selector"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        className="w-100 selector"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <input type="text" placeholder="Type here" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <input type="text" placeholder="Type here" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>RATINGS</h6>

                      <Rating
                        name="simple-controlled"
                        value={ratingsValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input type="text" placeholder="Type here" />
                    </div>
                  </div>
                </div>
              </div>

              {/*
              <div className="col-sm-5">
                <div className="card"></div>
              </div> */}

              <div className="row upload">
                <div className="card p-4 mt-0">
                  <div className="imagesUploadSec">
                    <h5 className="mb-4">Media And Published</h5>

                    <div className="imgUploadBox d-flex align-items-center">
                      <div className="uploadBox">
                        <span className="remove">
                          <IoCloseCircle />
                        </span>
                        <div className="box">
                          <LazyLoadImage height="blur" src={oneRedShirt} />
                        </div>
                      </div>

                      <div className="uploadBox">
                        <input type="file" multiple name="images" />
                        <div className="info">
                          <FaImages />
                          <h5>image upload</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <Button className="btn-blue btn-lg btn-big">
                    <FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
