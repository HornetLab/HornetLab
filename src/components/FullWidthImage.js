import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
// import PreviewCompatibleImage from "./PreviewCompatibleImage";
// import mainlogo from "../img/dronarnia/dronarnia_logo_white.svg";
import mainlogo from "../img/hornetlab/hornetlab_logo_grey.svg";

export default function FullWidthImage(props) {
  const {
    img,
    imgHeight = 700,
    imgPosition = "50% center",
    // logo,
    // logoHeight = 300,
    // logoPosition = "50% left",
    heading,
    subheading,
  } = props;

  return (
    <React.Fragment>
      <div
        className=""
        style={{
          display: "grid",
          alignItems: "center",
          // backgroundColor: "#000",
        }}
      >

        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: imgHeight,
              width: "100%",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: imgHeight,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={1 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}

        {(heading || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}

            <div className="content has-text-centered mb-6">
              <img
                src={mainlogo}
                alt="Дронарня"
                style={{
                  width: "100px",
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  padding: "18px 10px",
                }}
              />
            </div>

            {heading && (
              <div
                className="title is-size-1 is-size-3-touch has-text-centered"
                style={{
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "#fff",
                  // lineHeight: "1",
                  padding: "0.25em",
                  // fontStyle: "italic",
                }}
              >
                {heading}
              </div>
            )}

            {subheading && (
              <div
                className="subtitle is-size-3 is-size-5-touch has-text-centered"
                style={{
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "#fff",
                  // lineHeight: "1",
                  padding: "0.25rem",
                  // marginTop: "0.5rem",
                  // fontStyle: "italic",
                }}
              >
                {subheading}
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imgHeight: PropTypes.number,
  // logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // logoHeight: PropTypes.number,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};
