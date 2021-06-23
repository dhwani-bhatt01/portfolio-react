import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

interface Props {
  cardImg: string;
  title: string;
  description: string;
  brief: any;
}

const BlogCard = (props: Props) => {
  const { cardImg, title, description, brief } = props;

  return (
    <Link to="/">
      <div className="card">
        <div
          className="card__img"
          style={{ backgroundImage: `url(${cardImg})` }}
        ></div>
        <div className="card__content">
          <h1 className="card__title">{title}</h1>
          <h4 className="card__description">{description}</h4>
          <p className="card__brief">{brief}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
