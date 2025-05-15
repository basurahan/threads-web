export default function Submit({ label, className } : { label: string, className?: string }) {
    return (
        <div className={className}>
            <button type="submit" className="h-[40px] w-full bg-[var(--md-sys-color-primary)] rounded-[var(--radius-md)] text-[var(--md-sys-color-on-primary)] hover:bg-[var(--md-sys-color-on-primary-container)] shadow-md">{label}</button>
        </div>
    )
}