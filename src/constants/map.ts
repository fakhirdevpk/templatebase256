import json from "../data/label.json";

interface iterator {
  item: string;
  list: object;
}

let mapURL = json.labels.default["list-links"];

function mapIterator(item: iterator, list: iterator) {
  let output = list.map((list) => list.length);
}

let list: object = json.labels.default["list-links"];
list.map((list) => list.length);
