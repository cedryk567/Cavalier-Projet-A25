import { Temporal } from "@js-temporal/polyfill";

export class Event {
    constructor(id,nom, description, debutEvent, finEvent){
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.debutEvent = Temporal.ZonedDateTime.from(debutEvent);
        this.finEvent = Temporal.ZonedDateTime.from(finEvent);
    }

    get tempEventInMinute(){
        return this.finEvent.since(this.debutEvent).total({unit: 'minutes'});
    }

    estDeLaMemeJournnee(date){
        return this.debutEvent.toPlainDate().equals(date)
    }
}