import io from "socket.io-client";
import { FixMeLater } from "../types";
import { API_URL } from "./config";

const socket = (io as FixMeLater)(API_URL);

// debugger;

export default socket;
