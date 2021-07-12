import {getSrb2Info} from "srb2kartinfoparse";
require('dotenv').config();

export default function handler(req, res) {
  console.log(process.env);

  getSrb2Info(process.env.NEXT_PUBLIC_KARTSERVER_IP, process.env.NEXT_PUBLIC_KARTSERVER_PORT, () => {}, res.status(200).json, res.status(200).json);
}
