'use client'

import action from '@/app/register/actions'

export default function Nice() {
    return (
        <button onClick={() => { action() }}>Testing</button>
    )
}