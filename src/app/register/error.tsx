'use client'

export default function Error({ error, reset,}: { error: Error & { digest?: string }, reset: () => void}) {

	const handleClick = () => {
		console.log("handling")
		reset()
	}

	return (
    	<div>something went wrong {error.digest} <button onClick={handleClick}>Reload</button> </div>
  	)
}