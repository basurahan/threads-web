'use client'

import { useFormStatus } from 'react-dom'

export default function Submit({ label, className } : { label: string, className?: string }) {
    const status = useFormStatus()

    return (
        <div className={className}>
            <button disabled={status.pending} type="submit" className="h-[45px] w-full bg-primary rounded-md text-onPrimary hover:bg-onPrimaryContainer shadow-md md-sys-typescale-label-large disabled:bg-surfaceDim">{label}</button>
        </div>
    )
}