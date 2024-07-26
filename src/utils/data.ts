export interface LoggedUser {
  Message: number;
  id: number;
  code: string;
  Fname: string;
  Lname: string;
  phone: string;
  points: number;
  type: number;
}

export interface Ad {
  "0": number;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  idAd: number;
  img: string;
  dateFrom: string;
  dateTo: string;
  dateAd: string;
}
