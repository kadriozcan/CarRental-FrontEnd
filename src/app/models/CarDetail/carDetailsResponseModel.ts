import { BaseResponseModel } from "../baseResponseModel";
import { CarDetails } from "./carDetails";

export interface CarDetailsResponseModel extends BaseResponseModel {

    data:CarDetails[]

}