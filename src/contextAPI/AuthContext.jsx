import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    useEffect(()=>{
      const unsubsribe = onAuthStateChanged(auth,(curr_user)=>{
        setUser(curr_user)
      })
      return ()=> unsubsribe()
    },[])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)