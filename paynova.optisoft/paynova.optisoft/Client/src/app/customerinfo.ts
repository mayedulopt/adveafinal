import { Address } from "./address";
import { CustomerName } from "./customername";

export interface customerinfo
{
    name:CustomerName;
    customerId:string;
    emailAddress:string;
    governmentId:string;
    homeTelephone:string;
    workTelephone:string;
    mobileTelephone:string;
    Address:Address
}