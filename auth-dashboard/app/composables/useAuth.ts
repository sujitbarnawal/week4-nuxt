export type User = {
    name: string;
    email: string;
}

export const useAuth = () => {
    
    const user = useState<User | null>("user", () => null);
    const cookie = useCookie<User | null>("auth_user");

   
    if (cookie.value && !user.value) {
        user.value = cookie.value;
    }

    const login = async (payLoad: User) => {
        user.value = payLoad;
        cookie.value = payLoad; 
        await navigateTo('/dashboard');
    }

    const logout = async () => {
        user.value = null;
        cookie.value = null; 
        await navigateTo('/');
    }

    return { user, login, logout }
}