"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Modern 5-star hotels offer gaming lounges, sports courts, and indoor entertainment to keep guests engaged and relaxed. Some even include exclusive activities like bowling, VR games, or unique sports such as padel and pickleball.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
