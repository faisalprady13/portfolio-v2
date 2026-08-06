import { ImageResponse } from "next/og"

import { profile } from "@/lib/resume-data"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#0a0a0a",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#737373",
          }}
        >
          {profile.location}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 600,
            lineHeight: 1.15,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            color: "#525252",
          }}
        >
          {profile.title}
        </div>
      </div>
    ),
    { ...size }
  )
}
