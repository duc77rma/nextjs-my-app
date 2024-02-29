import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'
import { authApi } from '../api-client'

export function useAuth(options?: Partial<PublicConfiguration>) {
    const {
        data: profile,
        mutate,
        error
    } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options
    })

    const login = async () => {
        await authApi.login({ username: 'easy', password: '123qwe' })
        await mutate()
    }

    const logout = async () => {
        await authApi.logout()
        await mutate({}, false)
    }
    return { login, logout, profile, error }
}
