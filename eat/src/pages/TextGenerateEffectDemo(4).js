"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `The lobby is grand and elegant, often with stylish décor, comfortable seating, and attentive staff. It sets the tone for the entire stay, reflecting the luxury and prestige of the hotel.
`;

export function TextGenerateEffectDemofr() {
  return <TextGenerateEffect words={words} />;
}
