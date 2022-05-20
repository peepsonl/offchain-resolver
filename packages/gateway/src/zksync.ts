import { Database } from './server';
import { Contract } from "zksync-web3";

const RESOLVER_CONTRACT_ABI = require("../resolver_abi.json");

export class ZksyncDatabase implements Database {
  resolverContract : Contract;
  constructor(contractAddress: string) {

    this.resolverContract = new Contract(contractAddress, RESOLVER_CONTRACT_ABI);
  
  }

  addr(name: string, coinType: number=60) {
   return this.resolverContract.addr(name, coinType);
  }

  text(name: string, key: string) {
    return this.resolverContract.text(name, key);
  }

  contenthash(name: string) {
    return this.resolverContract.contenthash(name);

  }

}
