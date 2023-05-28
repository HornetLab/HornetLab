import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="has-text-centered" style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  }}>
    {gridItems.map((item) => (
      <a className="partner-item" key={item.text} href={item.url} target="_blank" rel="noopener noreferrer" title={item.text}>
        <div style={{
          maxWidth: "240px",
          padding: "0px 20px",
          boxSizing: "border-box",
        }}>
          <div className="mb-5">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="mb-5 is-uppercase" style={{
            fontSize: "14px",
          }}>
            {item.text}
          </div>
        </div>
      </a>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
