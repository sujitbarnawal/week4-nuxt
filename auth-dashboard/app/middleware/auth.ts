export default defineNuxtRouteMiddleware((to) => {
    const { user } = useAuth()

    if (user.value && to.path === '/') {
        return navigateTo('/dashboard')
    }

    const protectedRoutes = ['/dashboard', '/profile']
    
    if (!user.value && protectedRoutes.includes(to.path)) {
        return navigateTo('/')
    }
})