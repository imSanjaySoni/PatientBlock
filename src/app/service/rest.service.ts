import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenContract.json');
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  getData(){
    
  }
}
