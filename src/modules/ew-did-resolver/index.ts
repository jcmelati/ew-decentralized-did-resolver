import CryptoJS from 'crypto-js'
import { toast } from 'react-toastify'
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
    toast.success(`Asking ${rpc}`)

    const provider = new providers.JsonRpcProvider(rpc)
    const resolver = new Resolver(provider, registrySettings)
    const didDocument = await resolver.read(did)

    const DIDDocument = JSON.stringify(didDocument)

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const hash = `#${CryptoJS.SHA256(DIDDocument).toString().substring(0, 8)}`

    toast.success(`RESOLVED`, {
        style: {
            backgroundColor: hash,
            color: 'white',
        },
    })

    return didDocument
}
