'use client'

import { useFormStatus } from 'react-dom'
import Spinner from '@/app/ui/forms/Spinner'
import clsx from 'clsx'

export default function Submit({ label, className }: { label: string, className?: string }) {
    const status = useFormStatus()

    const containerStyle = clsx(
        className,
        "relative"
    )

    return (
        <div className={containerStyle}>
            <button
                disabled={status.pending}
                type="submit"
                className="h-[45px] w-full bg-primary rounded-md text-onPrimary hover:bg-onPrimaryContainer shadow-md md-sys-typescale-label-large disabled:bg-surfaceDim">
                {label}
            </button>
            {status.pending && <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-onSurface border-3 size-6" />}
        </div>
    )
}