import React, { useState, useEffect } from "react";
import "./Calendrier.css";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";

function Calendrier() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],

    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      eventsService,
    ],
    callbacks: {
      onEventUpdate(updatedEvent) {
        console.log("onEventUpdate", updatedEvent);
      },

      onBeforeEventUpdate(oldEvent, newEvent, $app) {
        return false;
      },
    },
  });

  useEffect(() => {
    eventsService.add({
      id: "1",
      title: "essaie",
      start: Temporal.ZonedDateTime.from(
        "2025-10-05T12:00:00[America/Toronto]"
      ),
      end: Temporal.ZonedDateTime.from("2025-10-05T13:00:00[America/Toronto]"),
    });
    eventsService.add({
      id: "2",
      title: "Party de noel",
      start: Temporal.ZonedDateTime.from("2025-10-01T12:00:00[Europe/Berlin]"),
      end: Temporal.ZonedDateTime.from("2025-10-01T13:00:00[Europe/Berlin]"),
    });
    const eventBerlin = Temporal.ZonedDateTime.from(
      "2025-10-01T12:00:00[Europe/Berlin]"
    );
    const eventInLocalZone = eventBerlin.withTimeZone(localZone);

    console.log(eventInLocalZone.toString());
    console.log(
      Temporal.ZonedDateTime.from(
        "2025-10-01T12:00:00[Europe/Berlin]"
      ).toString()
    );
    console.log(
      Temporal.ZonedDateTime.from("2025-10-01T12:00:00[Europe/Berlin]")
        .toInstant()
        .toString()
    );
  }, []);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
export default Calendrier;
