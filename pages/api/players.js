import {getSrb2Info} from "srb2kartinfoparse";
require('dotenv').config();

export default function handler(req, res) {
  getSrb2Info(process.env.NEXT_PUBLIC_KARTSERVER_IP, process.env.NEXT_PUBLIC_KARTSERVER_PORT, () => {},
    (data) => {
      data.playerinfo.sort((a, b) => (a.size < b.size));
      res.status(200).json(data);
    }, res.status(500).json);
}
