/* tslint:disable */
import { Geo } from './geo';
export interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}
