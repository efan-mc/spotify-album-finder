export default function InsertTitle({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <div
      stype={{
        textAlign: "center",
        color: "white",
        margin: "24px 0",
      }}
    >
      <h1>Find Albums & Top Tracks</h1>
      <p
        style={{
          marginTop: 8,
          opacity: 0.8,
        }}
      >
        Type an artist into search
      </p>
    </div>
  );
}
