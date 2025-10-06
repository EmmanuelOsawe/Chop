"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Equipped with state-of-the-art fitness machines, wellness programs, personal trainers, and sometimes even spa or yoga sessions, the gym in a 5-star hotel helps guests maintain a healthy lifestyle while traveling.
`;

export function TextGenerateEffectDemoth() {
  return <TextGenerateEffect words={words} />;
}
