import getSrb2Info from "srb2kartinfoparse";

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    getSrb2Info(
      process.env.NEXT_PUBLIC_KARTSERVER_IP,
      process.env.NEXT_PUBLIC_KARTSERVER_PORT,
      () => {},
      resolve,
      reject);
  }).then(data => {
    data.playerinfo.sort((a, b) => (a.size < b.size));
    res.status(200).json(data);
  }).catch(
    res.status(500).json
  );
}
