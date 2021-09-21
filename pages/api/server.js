import {getSrb2Info} from "srb2kartinfoparse";
require('dotenv').config();

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    getSrb2Info(
      process.env.NEXT_PUBLIC_KARTSERVER_IP,
      process.env.NEXT_PUBLIC_KARTSERVER_PORT,
      resolve,
      () => {},
      reject);
  }
  ).then(
    (d) => res.status(200).json(d)
  ).catch(res.status(500).json);
}
