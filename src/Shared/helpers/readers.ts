export const parseStream = async <T>(stream: ReadableStream): Promise<T[]> => {
    const reader = stream.getReader();
    const chunks: Uint8Array[]= [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        if (value instanceof Uint8Array) {
            chunks.push(value);
        } else {
            // Обработка случая, если значение не является Uint8Array (возможно, потребуется другая логика в вашем случае)
            console.error('Unexpected value type:', typeof value, value);
        }
    }
    const concatenatedChunks = new Uint8Array(chunks.reduce((acc: number[], chunk) => [...acc, ...Array.from(chunk)], []));
    const result = new TextDecoder().decode(Uint8Array.from(concatenatedChunks));
    return JSON.parse(result);

};