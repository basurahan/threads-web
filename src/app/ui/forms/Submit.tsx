export default function Submit({ label, className } : { label: string, className?: string }) {
    return (
        <div className={className}>
            <button type="submit" className="h-[40px] w-full bg-primary rounded-[var(--radius-md)] text-onPrimary hover:bg-onPrimaryContainer shadow-md">{label}</button>
        </div>
    )
}