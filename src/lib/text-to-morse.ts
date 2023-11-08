// @ts-ignore
import morse from "morse";

export default function TextToMorse(textToTranslate: string) {
  return morse.encode(textToTranslate);
}
