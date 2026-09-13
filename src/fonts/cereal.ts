import localFont from "next/font/local";

/* Airbnb Cereal, carried over from v2. Latin only -- the hero's Japanese
   glyphs (かっこいい子) have no coverage here, so the fallback stack has to
   name a real CJK face or they render as tofu on non-Apple platforms. */
export const cereal = localFont({
  src: [
    { path: "./AirbnbCereal-Light.ttf", weight: "300", style: "normal" },
    { path: "./AirbnbCereal-Book.ttf", weight: "400", style: "normal" },
    { path: "./AirbnbCereal-Medium.ttf", weight: "500", style: "normal" },
    { path: "./AirbnbCereal-Bold.ttf", weight: "700", style: "normal" },
    { path: "./AirbnbCereal-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./AirbnbCereal-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-cereal",
  display: "swap",
  fallback: [
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Noto Sans JP",
    "Yu Gothic",
    "Meiryo",
    "system-ui",
    "sans-serif",
  ],
});
