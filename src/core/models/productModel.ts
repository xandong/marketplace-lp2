// import Big from "big.js";

export interface IProduct {
  title: string;
  description?: string;
  coverPhoto: string;
  price: number;
  qtyInventory: BigInteger;
}
