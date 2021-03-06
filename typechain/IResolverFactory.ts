/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IResolver } from "./IResolver";

export class IResolverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IResolver {
    return new Contract(address, _abi, signerOrProvider) as IResolver;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getTarget",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "performMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address"
      }
    ],
    name: "setTarget",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
