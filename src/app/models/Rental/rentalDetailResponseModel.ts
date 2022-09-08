import { BaseResponseModel } from "../baseResponseModel";
import { RentalDetail } from "./rentalDetail";

export interface RentalDetailResponseModel extends BaseResponseModel {
    data:RentalDetail[]
}