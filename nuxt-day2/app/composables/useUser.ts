import type { User } from "~/types/UserType"
export const useUser=()=>{
    const user = useState<null|User>("user",()=>null)
    return {user}
}