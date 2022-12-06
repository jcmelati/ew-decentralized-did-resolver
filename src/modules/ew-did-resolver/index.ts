import { Resolver } from '@ew-did-registry/did-ethr-resolver'
import { RegistrySettings } from '@ew-did-registry/did-resolver-interface'
import { providers } from 'ethers'
import { Methods } from '@ew-did-registry/did'
import ERC1056 from './abi/ERC1056'
import { EWC_ADDRESS_1056 } from '@energyweb/credential-governance'

const registrySettings: RegistrySettings = {
    method: Methods.Erc1056,
    abi: ERC1056.abi,
    address: EWC_ADDRESS_1056,
}

export const resolve = async (did: string, rpc: string): Promise<Object> => {
    const provider = new providers.JsonRpcProvider(rpc)
    const resolver = new Resolver(provider, registrySettings)
    const didDocument = await resolver.read(did)

    return didDocument
}
