'use client'

import { toast, ToastContainer } from "react-toastify"

export default function Error({ error, reset,}: { error: Error & { digest?: string }, reset: () => void}) {

	const handleClick = () => {
		console.log("handling")
		toast("hello man what are yoidng")
	}

	return (
    	<div>something went wrong {error.digest} <button onClick={handleClick}>Reload</button> </div>
  	)
}