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

export interface Notification {
  customer: string[];
  dateNot: string;
  idNot: number;
  msg: string;
  titre: string;
  allCust: number;
  vue: number;
}

export interface PromotionType {
  5: string;
  avenuBar: string;
  bar: number;
  communeBar: string;
  description: string;
  idBar: number;
  idProm: number;
  img: string;
  map: string;
  nameBar: string;
  pointValue: number;
  provinceBar: string;
  qty: number;
  quartierBar: string;
  zoneBar: string;
}

export interface RewardType {
  5: string;
  description: string;
  idRew: number;
  img: string;
  level: number;
  titre: string;
}

export interface PointsToSendType {
  codeSender: string,
  codeReceiver: string,
  points?: number,
  type?: number,
  qty: number,
  invoice?: File | null,
}