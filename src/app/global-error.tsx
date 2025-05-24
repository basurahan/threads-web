'use client'

export default function GlobalError({ error, reset, }: { error: Error & { digest?: string }, reset: () => void }) {
	const handleClick = () => { reset() }

	return (
		<html>
			<body>
				<div className="flex flex-col items-center justify-center min-h-full">
					<h1 className="md-sys-typescale-headline-small">Oops! Something went wrong.</h1>
					{ error.digest && <p>Reference ID: {error.digest}</p> }
					<button onClick={handleClick} className="md-sys-typescale-label-large bg-primary text-onPrimary hover:bg-onPrimaryContainer px-6 py-2 rounded-full mt-4">Retry</button>
				</div>
			</body>
		</html>
	)
}