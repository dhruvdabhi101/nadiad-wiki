import { ImageResponse } from "next/og";

// Image metadata
export const alt = "nadiad.wiki";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            color: "black",
            fontSize: 128,
            fontWeight: "bold",
          }}
        >
          🎇 nadiad
        </span>
        <span
          style={{
            fontFamily: "monospace",
            color: "#9ca3af",
            fontSize: 128,
            fontWeight: "bold",
          }}
        >
          .wiki
        </span>
      </div>
    ),
    {
      ...size,
    },
  );
}
