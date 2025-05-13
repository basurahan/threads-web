export default function Submit({ label, className } : { label: string, className?: string }) {
    return (
        <div className={className}>
            <button type="submit" className="h-[40px] w-full bg-primary p-1 rounded-[var(--radius-md)] text-[var(--color-onPrimary)] hover:bg-primaryVariant">{label}</button>
        </div>
    )
}