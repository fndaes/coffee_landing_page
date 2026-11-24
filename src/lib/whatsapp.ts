import { site } from "../data/site";

export function whatsappLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
