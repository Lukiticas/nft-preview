import { DefaultAnchor } from "../../styles/global.styles.js"; //  a
import {
  CardBody, // section
  CardDescription, // p
  CardDetails, // div
  CardImage, // styled a
  CardName, //h3
  OwnerInfo, // div
} from "./Card.styles.js";

function Card({ informations }) {
  const curIcon = `./icon/icon-${informations.currency}.svg`;
  const clockIcon = "./icon/icon-clock.svg";
  const viewIcon = "./icon/icon-view.svg";
  const treatedCurrency = informations.currency.substring(0, 3).toUpperCase();

  return (
    <CardBody>
      <CardImage>
        <img src={informations.cardPreview} alt="" />
        <img src={viewIcon} alt="" />
      </CardImage>
      <CardName>
        <DefaultAnchor>
          {informations.nftName}
          <span>{informations.id}</span>
        </DefaultAnchor>
      </CardName>
      <CardDescription>{informations.description}</CardDescription>
      <CardDetails>
        <span>
          <img src={curIcon} alt="" />
          {`${informations.price} ${treatedCurrency}`}
        </span>
        <span>
          <img src={clockIcon} alt="" />
          {informations.period}
        </span>
      </CardDetails>
      <OwnerInfo>
        <img src={informations.artistIcon} alt="" />
        <figcaption>
          Creation of
          <DefaultAnchor>{informations.artistName}</DefaultAnchor>
        </figcaption>
      </OwnerInfo>
    </CardBody>
  );
}

export default Card;
