export default function Submit({ label, className } : { label: string, className?: string }) {
    return (
        <div className={className}>
            <button type="submit" className="h-[45px] w-full bg-primary rounded-md text-onPrimary hover:bg-onPrimaryContainer shadow-md">{label}</button>
        </div>
    )
}