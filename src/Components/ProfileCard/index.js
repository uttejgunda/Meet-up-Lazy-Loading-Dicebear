import { CardDesc, CardImg, CardItem, CardTitle } from "./styledComponents";

const sprites = [
  "male",
  "female",
  "human",
  "identicon",
  "initials",
  "bottts",
  "avataaars",
  "jdenticon",
  "gridy",
  "micah",
];

const colorsList = [
  "#ff4f64",
  "#00a8e7",
  "#44c4a1",
  "#fcc200",
  "#ff0b37",
  "#2563eb",
];

const ProfileCard = (props) => {
  const { details } = props;
  const { userId, body, title } = details;

  const borderColorIndex = Math.floor(Math.random() * colorsList.length);
  const selectedSprite = sprites[Math.floor(Math.random() * sprites.length)];

  return (
    <CardItem borderColorIndex={colorsList[borderColorIndex]}>
      <CardImg
        className="card-img"
        src={`https://avatars.dicebear.com/api/${selectedSprite}/${title}.svg`}
        alt={userId}
        loading="lazy"
      />
      <CardTitle className="card-title">{title}</CardTitle>
      <CardDesc className="card-description">{body}</CardDesc>
    </CardItem>
  );
};

export default ProfileCard;
