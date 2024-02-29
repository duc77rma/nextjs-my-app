import StudentDetails from '@/components/swr/StudentDetails'
import * as React from 'react'

export default function SWRPage() {
    return <div>
        <h1>SWR demo</h1>

        <ul>
            <li><StudentDetails studentId='fakeId1'/></li>
        </ul>
        <ul>
            <li><StudentDetails studentId='fakeId2'/></li>
        </ul>
        <ul>
            <li><StudentDetails studentId='fakeId3'/></li>
        </ul>
    </div>
}
