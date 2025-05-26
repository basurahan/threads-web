import type { Metadata } from 'next'
import { Manrope, Work_Sans } from 'next/font/google'
import '@/app/theme.css'

const manRope = Manrope({
    variable: "--md-ref-typeface-brand",
    subsets: ["latin"],
    weight: ["400"]
})

const workSans = Work_Sans({
    variable: "--md-ref-typeface-plain",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Threads",
    description: "A showcase of my react server component skill",
};

interface IRoootLayout {
    readonly children: React.ReactNode
}

export default function RootLayout({ children }: IRoootLayout) {
    return (
        <html lang="en">
            <body className={`${manRope.variable} ${workSans.variable} antialiased ref light override-toastify`}>
                {children}
            </body>
        </html>
    );
}
