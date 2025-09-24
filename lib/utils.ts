import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LINK_WHATSAPP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `${LINK_WHATSAPP}?text=${encodedMessage}`;
}
