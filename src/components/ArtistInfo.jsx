import { Card, Button, CardBody } from "react-bootstrap";

export default function ArtistInfo({ artist, previewUrl }) {
  if (!artist) {
    return null;
  }

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
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
          color: "black",
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

        <Card.Text
          style={{
            fontSize: "20px",
          }}
        >
          <b>Genres: </b>
          {artist.genres}
        </Card.Text>

        <audio controls style={{ marginTop: "10px" }}>
          <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Card.Body>
    </Card>
  );
}
