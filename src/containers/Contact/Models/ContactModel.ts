import { NameModel } from "./NameModel";
import { LocationModel } from "./LocationModel";
import { PictureModel } from "./PictureModel";

export interface ContactModel {
    name: NameModel;
    location: LocationModel;
    email: string;
    phone: string;
    picture: PictureModel;
}