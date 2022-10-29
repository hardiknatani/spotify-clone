import { Title } from "@angular/platform-browser";

export class Card {

    public imageUrl;
    public title;
    public description;


    constructor(imageUrl: string, title: string, description: string) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
    }
}