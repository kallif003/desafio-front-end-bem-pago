/* eslint-disable no-unused-vars */
import { createContext } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }: any) {
	return (
		<AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
