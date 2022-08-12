import connect from "next-connect";
import dataBase from "./mongoose";

export default function createHandler() {
  return connect().use(dataBase);
}
