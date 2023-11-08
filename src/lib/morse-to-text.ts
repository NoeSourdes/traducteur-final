// @ts-ignore
import morse from "morse";

export default function MorseCodeDecoder(textToTranslate: string) {
  return morse.decode(textToTranslate);
}
