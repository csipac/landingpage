import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Fragment>
      <div className="single-countdown">
        <span className="single-countdown__time">{days}</span>
        <span className="single-countdown__text">Días</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{hours}</span>
        <span className="single-countdown__text">Horas</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{minutes}</span>
          <span className="single-countdown__text">Minutos</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{seconds}</span>
        <span className="single-countdown__text">Segundos</span>
      </div>
    </Fragment>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default Renderer;
