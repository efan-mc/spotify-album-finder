import { Card, Button, CardBody } from "react-bootstrap";

export default function ArtistInfo({ artist }) {
  if (!artist) {
    return null;
  }

  const capitalizeGenre = (genre) => {
    return genre
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedGenres = artist.genres
    .map((genre) => capitalizeGenre(genre))
    .join(", ");

  return (
    <Card
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        transition: "background-color 0.2s ease, transform 0.2s ease",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "5px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Card.Img
        src={artist.images[0].url}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "4%",
          objectFit: "cover",
          marginRight: "20px",
        }}
      />
      <Card.Body
        style={{
          fontSize: "24px",
        }}
      >
        <Card.Title>{artist.name}</Card.Title>

        <Card.Text
          style={{
            fontSize: "20px",
          }}
        >
          <b>Followers: </b>
          {artist.followers.total.toLocaleString()}
        </Card.Text>

        <div
          style={{
            fontSize: "20px",
          }}
        >
          <b>Genres: </b>
          {formattedGenres}
        </div>
      </Card.Body>
    </Card>
  );
}
