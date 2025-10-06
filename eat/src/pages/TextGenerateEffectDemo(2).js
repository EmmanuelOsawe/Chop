"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Dining is a highlight, with multiple restaurants and bars serving both local and international cuisines. Guests enjoy fine dining, buffets, and specialty outlets that cater to different tastes, ensuring a memorable culinary journey.
`;

export function TextGenerateEffectDemotw() {
  return <TextGenerateEffect words={words} />;
}
