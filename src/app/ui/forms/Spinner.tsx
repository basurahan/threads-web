import styles from '@/app/ui/forms/styles/spinner.module.css'
import clsx from 'clsx'

export default function Spinner({ className }: { className?: string }) {

    const containerStyle = clsx(
        styles.loader,
        className
    )

    return (
        <span className={containerStyle} />
    )
}