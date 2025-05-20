export async function runSafe<T>(promise: Promise<T>): Promise<{ success: boolean, value?: T }> {
    try {
        const result = await promise
        return {
            success: true,
            value: result
        }
    } catch(e) {
        return {
            success: false
        }
    }
}