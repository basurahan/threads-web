export default function TextInput({ name, label, className } : { name: string, label: string, className?: string }) {
    return (
        <div className={className}>
            <label htmlFor={name} className="block text-md ms-1 mb-1">{label}</label>
            <input type="text" name={name} id={name} className="block h-[40px] w-full outline-none border-[2px] border-[var(--color-mute)] focus:border-[var(--color-primary)] rounded-[var(--radius-md)] text-xl p-1"/>
        </div>
    )
}