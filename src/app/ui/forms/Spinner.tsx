import styles from '@/app/ui/forms/styles/spinner.module.css'
import clsx from 'clsx'

export default function Spinner({ size, className } : { size: number, className?: string }) {
    return (
        <span 
            className={
                clsx(
                    styles.loader,
                    className
                )
            }
            style={{
                height: size,
                width: size
            }}
        />
    )
}