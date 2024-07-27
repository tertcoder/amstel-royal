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

export interface Bar {
  idBar: number;
  nameBar: string;
  communeBar: string;
  zoneBar: string;
  quartierBar: string;
  avenuBar: string;
}


export interface User {
  Fname: string;
  Lname: string;
  code: string;
}

export interface PointHistory {
  idHist: number;
  img: string;
  codeSender: string;
  codeReceiver: string;
  dateSent: string;
  sentPoints: number;
}

export interface ProfileData {
  points: number;
  level: string;
  receivedPoints: number;
  history: PointHistory[];
}