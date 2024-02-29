import * as React from 'react'
import useSWR from 'swr'

export interface IStudentDetailsProps {
    studentId: string
}

const MS_PER_HOUR = 60 * 60 * 1000

export default function StudentDetails({ studentId }: IStudentDetailsProps) {
    const { data, error, isValidating, mutate } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: true
        // dedupingInterval: MS_PER_HOUR
    })

    const handleMutate = () => {
        mutate({name: "duccc"}, false)
    }
    return (
        <div>
            Name: {data?.name ?? 'No Name'} <button onClick={handleMutate}>Mutate</button>
        </div>
    )
}