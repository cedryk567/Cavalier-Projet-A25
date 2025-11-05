import { Event } from "./Event";
import { Temporal } from "@js-temporal/polyfill";

export const mockEvents = [
  new Event(
    1,
    "Prise de sang à l'hôpital Sainte-Marie",
    "Rendez-vous à 8h30 au labo",
    "2025-11-13T08:30:00[America/Toronto]",
    "2025-11-13T09:00:00[America/Toronto]"
  ),
  new Event(
    2,
    "Qualification championnat du monde",
    "Tournoi régional",
    "2025-12-03T19:00:00[America/Toronto]",
    "2025-12-03T22:00:00[America/Toronto]"
  ),
  new Event(
    3,
    "Souper d'équipe",
    "Restaurant du port à 18h",
    "2025-09-07T18:00:00[America/Toronto]",
    "2025-09-07T21:00:00[America/Toronto]"
  ),
  new Event(
    4,
    "Présentation projet final",
    "Présentation devant le jury",
    "2025-10-15T10:00:00[America/Toronto]",
    "2025-10-15T11:30:00[America/Toronto]"
  ),
  new Event(
    5,
    "Journée de congé",
    "Congé bien mérité !!",
    "2025-10-15T00:00:00[America/Toronto]",
    "2025-10-15T23:59:00[America/Toronto]"
  ),
];