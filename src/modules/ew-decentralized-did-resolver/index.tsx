import { resolve as resolveDID } from '../ew-did-resolver'

const rpcs = [
    'https://www.terra.com.br/',
    'https://www.terra.com.br/',
    'https://www.terra.com.br/',
]

export async function resolve(did: string): Promise<string | null> {
    const requests = rpcs.map(async (rpc) => await resolveDID(did, rpc))

    const outcomes = await Promise.allSettled(requests)

    if (outcomes === undefined) {
        return null
    }

    // Filter out the rejected promises
    const isFulfilled = (
        result: PromiseSettledResult<Object>
    ): result is PromiseFulfilledResult<Object> => result.status === 'fulfilled'

    const successfulOutcomes = outcomes.filter(isFulfilled)

    // Extract the data from the successful outcomes
    const data = successfulOutcomes.map((outcome) => outcome.value)

    const mostFrequent = getMostFrequent(data)

    return mostFrequent
}

function getMostFrequent(arr: Object[]): any {
    // Create a map to store the frequency of each entry in the array
    const frequencyMap = new Map<any, number>()

    // Iterate over the array and increment the frequency of each entry in the map
    for (const entry of arr) {
        if (frequencyMap.has(entry)) {
            frequencyMap.set(entry, (frequencyMap.get(entry) ?? 0) + 1)
        } else {
            frequencyMap.set(entry, 1)
        }
    }

    // Iterate over the map and find the entry with the highest frequency
    let mostFrequent = null
    let highestFrequency = 0
    for (const [entry, frequency] of frequencyMap.entries()) {
        if (frequency > highestFrequency) {
            mostFrequent = entry
            highestFrequency = frequency
        }
    }

    return mostFrequent
}
