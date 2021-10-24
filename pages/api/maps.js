import { extractSoc } from 'srb2kartinfoparse/pk3parse.js';
import parseSocFile from 'srb2kartinfoparse/socparse.js';
import fetch from 'node-fetch';
import os from 'os';
import fs from 'fs';
import path from 'path';

const pathname = path.resolve(os.homedir(), '.cache', 'formulabun-web', 'soc')
const isMapPack = (name) => /^[A-Z]*R[A-Z]*.*\.pk3$/i.test(name);
const isSocFile = (name) => /.soc$/i.test(name);
const isFormulabunFile = (name) => /^k_formulabun_v.*\.pk3$/i.test(name);
const nameToPath = (name) => `${pathname}${path.sep}${name}`

async function downloadFiles() {
  const filecachedir = fs.mkdirSync(pathname, {recursive:true});
  const repo = await fetch(`http://www.${process.env.NEXT_PUBLIC_KARTSERVER_IP}/repo`).then(res => res.json())
  return Promise.all(
    repo.map(o =>
      o.name
    ).filter(n =>
      isMapPack(n) || isFormulabunFile(n)
    ).map(name => 
      new Promise(async (accept, reject) => {
        try {
          fs.accessSync(nameToPath(name)); // throws error when file does not exist
          accept(name);
        } catch (e){
          const fileS = fs.createWriteStream(nameToPath(name));
          await fetch(`http://www.${process.env.NEXT_PUBLIC_KARTSERVER_IP}/repo/${name}`)
            .then(res => 
              res.body
            ).then(body =>
              body.pipe(fileS)
            ).then((fs) =>
              accept(name)
            );
        }
      })));
}


export default async function handler(req, res) {
  function loadSocFile(file, soc) {
    const kartfile = file.replace("soc", "kart")
    try {
      fs.accessSync('./pages/api/'+file);
      const content = fs.readFileSync('./pages/api/'+file, 'utf-8');
      soc = parseSocFile(kartfile, content, soc);
    } catch {
      console.log(`Please copy the soc from inside ${kartfile} to pages/api/${file}`)
      soc.pending = true;
    }
    return soc;
  }

  const filenames = await downloadFiles();
  var soc = {}
  soc.pending = false;
  soc = loadSocFile('maps.soc', soc)
  soc = loadSocFile('patch.soc', soc)

  for(const file of filenames.filter(isMapPack)) {
    try {
      soc = await extractSoc(nameToPath(file), soc);
    } catch (e) {
      console.log("Feel free to ignore previous error message. Fetching large files takes a while but only has to be done once");
      soc.pending = true;
    }
  }
  const fbunFile = filenames.map(p => path.basename(p)).filter(isFormulabunFile)[0]; 
  try {
    soc = await extractSoc(nameToPath(fbunFile), soc);
  } catch(e) {
      console.log("Feel free to ignore previous error message. Fetching large files takes a while but only has to be done once");
      soc.pending = true;
  }

  soc.state = undefined;
  soc.object = undefined;

  const content = Object.keys(soc.level).map(key => {
    soc.level[key].mapid = key;
    return soc.level[key];
  }).filter(o => o.typeoflevel.toLowerCase() !== 'singleplayer');

  return res.status(200).json(content);
}
