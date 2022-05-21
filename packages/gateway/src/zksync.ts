import { Database } from './server';
import { ethers } from 'ethers';
import { Provider, Contract } from "zksync-web3";
import RESOLVER_CONTRACT_ABI from "./resolver_abi.json"

export class ZksyncDatabase implements Database {
  resolverContract : Contract;
  constructor(contractAddress: string) {
    const provider = new Provider("https://zksync2-testnet.zksync.dev");

    this.resolverContract = new Contract(contractAddress, RESOLVER_CONTRACT_ABI, provider);
  }

  async addr() {
    //  return this.resolverContract.addr(name, coinType);
    return { addr: "0x5CA0E8e25eC486928F7C8C35De484235Cbf3eb53", ttl: 1968734093};
  }

  text(name: string, key: string) {
    return this.resolverContract.text(ethers.utils.namehash(name), key).then((res: any) => {
      return { value: res || "", ttl: 0 };
    })
  }

  async contenthash() {
    // return this.resolverContract.contenthash(name);
    return { contenthash: "", ttl: 1968734093};
  }

}
