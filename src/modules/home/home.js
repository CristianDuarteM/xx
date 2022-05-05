import {HttpClient} from 'aurelia-fetch-client';
const importedData = require("../../jsons/col.json");

export class Home {

  col;

  constructor() {
    this.getJson();
  }

  getJson(){
    this.col = importedData;
    console.log(this.col);
  }
}
