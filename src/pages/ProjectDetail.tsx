import { useParams } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [activeImg, setActiveImg] = useState(project?.gallery[0]);

  if (!project) return <div>Not found</div>;

  return (
    <div className="project-detail">

      <div className="container">

        <div className="detail-grid">

          {/* LEFT - GALLERY */}
          <div className="gallery">

            <div className="main-image">
              <img src={activeImg} alt="" />
            </div>

            <div className="thumbs">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} gallery image ${i + 1}`}
                  title={`${project.title} gallery image ${i + 1}`}
                  onClick={() => setActiveImg(img)}
                  className={activeImg === img ? "active" : ""}
                />
              ))}
            </div>

          </div>

          {/* RIGHT - INFO */}
          <div className="info">

            <span className="location">{project.location}</span>

            <h1>{project.title}</h1>

            <p className="desc">{project.description}</p>

            <div className="features">
              {project.features.map((f, i) => (
                <div key={i} className="feature">
                  ✓ {f}
                </div>
              ))}
            </div>

            <button className="btn">Liên hệ tư vấn</button>

          </div>

        </div>

      </div>
    </div>
  );
}