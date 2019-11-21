import { StreetModel } from "./StreetModel";

export interface LocationModel {
    street: StreetModel;
    city: string;
    state: string;
    postcode: number;
}