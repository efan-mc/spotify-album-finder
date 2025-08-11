import { Row } from "react-bootstrap";
import TopTracksCard from "./TopTracksCard";

export default function TopTracks({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return null;
  }

  return (
    <>
      <h4 style={{ marginTop: 20, marginBottom: 10 }}>Top Tracks</h4>
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        {tracks.map((track, index) => (
          <TopTracksCard key={track.id} track={track} index={index} />
        ))}
      </Row>
    </>
  );
}
