import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
// import PreviewCompatibleImage from "./PreviewCompatibleImage";
// import mainlogo from "../img/dronarnia/dronarnia_logo_white.svg";
import mainlogo from "../img/hornetlab-logo-white-transparet_1.png";

export default function FullWidthImage(props) {
  const {
    img,
    imgHeight = 600,
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
          backgroundColor: "#000",
        }}
      >

        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              height: imgHeight,
              width: "100%",
            }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              maxHeight: imgHeight,
            }}
            layout="fullWidth"
            aspectratio={1 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}

        {(heading || subheading) && (
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >

            {/* <div className="mb-6">
              <img
                src={mainlogo}
                alt="HornetLab"
                style={{
                  width: "150px",
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  padding: "18px 10px",
                }}
              />
            </div> */}

            {/* {heading && (
              <div
                className="title is-size-1 is-size-3-touch has-text-centered"
                style={{
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "#fff",
                  padding: "0.25em",
                }}
              >
                {heading}
              </div>
            )} */}

            {/* {subheading && (
              <div
                className="subtitle is-size-3 is-size-5-touch has-text-centered"
                style={{
                  boxShadow: "rgba(0, 0, 0, .5) 0.5rem 0px 0px, rgba(0, 0, 0, .5) -0.5rem 0px 0px",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                  color: "#fff",
                  padding: "0.25rem",
                }}
              >
                {subheading}
              </div>
            )} */}
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
