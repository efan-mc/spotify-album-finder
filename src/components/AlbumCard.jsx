import { Card, Button } from "react-bootstrap";

export default function AlbumCard({ album }) {
  return (
    <Card
      key={album.id}
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        margin: "10px",
        marginBottom: "30px",
        transition: "background-color 0.2s ease, transform 0.2s ease",
      }}
    >
      <Card.Img
        width={200}
        src={album.images[0].url}
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
          }}
        >
          {album.name}
        </Card.Title>
        <Card.Text>
          Release Date: <br /> {album.release_date}
        </Card.Text>
        <Button
          href={album.external_urls.spotify}
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Album Link
        </Button>
      </Card.Body>
    </Card>
  );
}
