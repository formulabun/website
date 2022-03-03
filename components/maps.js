export function mapToTitle(map) {
  return `${map.levelname || ""} ${
        map.nozone ? "" : map.zonetitle || "zone"
      } ${map.act || ""}`
}

export function formatMapPack(mapPack) {
  if(mapPack.endsWith(".kart")) return mapPack;
  const lastDot = mapPack.lastIndexOf(".");
  return mapPack.substr(0, lastDot).split(/-|_/).slice(1).join(" ");
}
