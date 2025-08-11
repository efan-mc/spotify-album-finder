import { Card, Button } from "react-bootstrap";
import TopTracks from "./TopTracks";

export default function TopTracksCard({ track, index }) {
  return (
    <Card
      key={track.id}
      style={{
        backgroundColor: "white",
        margin: "10px",
        borderRadius: "5px",
        marginBottom: "30px",
      }}
    >
      <Card.Img
        width={200}
        src={track.album.images[0].url}
        style={{
          borderRadius: "4%",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            whiteSpace: "wrap",
            fontWeight: "bold",
            maxWidth: "200px",
            fontSize: "18px",
            marginTop: "10px",
            color: "black",
            marginBottom: "12px",
          }}
        >
          {track.name}
        </Card.Title>
        <Card.Text
          style={{
            color: "black",
          }}
        >
          {track.album.name}
        </Card.Text>
        <Button
          href={track.external_urls.spotify}
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Track Link
        </Button>
      </Card.Body>
    </Card>
  );
}
