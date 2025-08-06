import { Card, Button, CardBody } from "react-bootstrap";

export default function ArtistInfo({ artist }) {
  if (!artist) {
    return null;
  }

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "30px",
      }}
    >
      <Card.Img
        width={200}
        src={artist.images[0].url}
        style={{
          borderRadius: "4%",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {artist.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
