import React, { useState } from "react";

export default function ProjectPage({ title, images, description, details }) {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="project-page">
      <h1>{title}</h1>
      <div className="project-gallery">
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{ display: "inline-block", position: "relative" }}
          >
            <img
              src={img}
              alt={`${title} Screenshot ${idx + 1}`}
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg(img)}
            />
          </div>
        ))}
      </div>
      <p className="project-description">{description}</p>
      <div className="project-details">{details}</div>

      {/* Modal for image click */}
      {modalImg && (
        <div className="project-image-modal">
          <button
            className="project-image-modal-close"
            onClick={() => setModalImg(null)}
          >
            &times;
          </button>
          <img
            src={modalImg}
            alt="Enlarged project screenshot"
            style={{ width: "70vw", height: "70vh", objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
}
