import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./artikel-card.css";

const HomestayCard = ({ tour }) => {
  const { id, title, city, photo } = tour;

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
        </div>

        <CardBody>
          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <div className="card__top d-flex align-items-center justify-content-between">
              <span className="tour__location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i> {city}
              </span>
            </div>

            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Lebih Lanjut</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomestayCard;
