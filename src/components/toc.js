import React from "react";
import { scroller } from "react-scroll";

const Toc = ({ toc }) => {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="toc-container">
      <h2 className="h2-2">
        <strong>Table of Contents</strong>
      </h2>
      <ul className="ul-3">
        {toc.map((item) => (
          <li key={item.id} className="li-4">
            <a
              className="a-5"
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
