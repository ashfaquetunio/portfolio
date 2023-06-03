import React from "react";
import ProjectItem from "./ProjectItem";
import styles from "./work.module.scss";
import { projects } from "../data";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Work = () => {
  const settings = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  };
  return (
    <>
      <section id="work" className={styles.work}>
        <div>
          <p className="section_title">Some Things I’ve Built</p>
          <Slider {...settings}>
            {projects.map((project) => {
              return (
                <>
                  <ProjectItem data={project} />
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Work;
