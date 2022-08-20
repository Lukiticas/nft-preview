import { CardBody } from "./Card.styles.js";

export default function Card({ informations }) {
  const {
    nftName,
    id,
    description,
    price,
    currency,
    period,
    artistName,
    artistIcon,
    cardPreview,
  } = informations;
  const curIcon = `./icon/icon-${currency}.svg`;
  const clockIcon = "./icon/icon-clock.svg";
  const viewIcon = "./icon/icon-view.svg";

  return (
    <CardBody className="card">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="card__preview"
      >
        <img src={cardPreview} alt="" />
        <img src={viewIcon} alt="" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="card__name"
      >
        {nftName} <span className="card__name--id">{id}</span>
      </a>
      <p className="card__description">{description}</p>
      <div className="card__details">
        <span className="details__currency">
          <img src={curIcon} alt="" />
          {`${price} ${currency.substring(0, 3).toUpperCase()}`}
        </span>
        <span className="details__period">
          <img src={clockIcon} alt="" />
          {period}
        </span>
      </div>
      <figure className="card__owner-info">
        <img src={artistIcon} alt="" />
        <figcaption>
          Creation of
          <a href="#" target="_blank" rel="noopener noreferrer">
            {artistName}
          </a>
        </figcaption>
      </figure>
    </CardBody>
  );
}
