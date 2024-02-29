import { useAuth } from '@/hooks/use-auth'

export default function Login() {
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false
    })

    console.log("profile", profile);
    

    const handleLogin = async () => {
        try {
            await login()
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <div>
            <h1>Profile: {profile?.username}</h1>
            <h1>Profile: {profile?.email}</h1>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
