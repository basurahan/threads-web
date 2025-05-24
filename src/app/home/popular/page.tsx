export default async function Page() {
    const test = await new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 5000);
    })
    return (
        <div>Popular</div>
    )
}