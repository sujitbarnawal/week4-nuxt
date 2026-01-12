export type User={
    name:string,
    email:string
}

export const useAuth=()=>{
    const user = useState<User|null>("user",()=>null)

    const login =async (payLoad:User)=>{
        user.value=payLoad
        await navigateTo('/dashboard')
    }

    const logout = async()=>{
        user.value=null
        await navigateTo('/')
    }

    return {user,login,logout}
}