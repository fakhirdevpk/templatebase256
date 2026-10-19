import json from "../data/label.json";
import {mapJsonURL} from "../utils/util"

export const title = json.labels.default["list-links"].home.name;
export const company = json.labels.default.business.company.name;
export const listsURL = json.labels.default["list-links"];
const processedLinks = mapJsonURL(listsURL);
