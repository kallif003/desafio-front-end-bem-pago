/* eslint-disable no-unused-vars */
import { createContext } from "react"

export const AuthContext = createContext({})
let data: object = {}
function AuthProvider({ children }: any) {
	const getResquest = (values: any) => {
		data = {
			Stickers: values.Stickers,
			Size: values.Size,
			Text: values.inputText,
			Amounts: values.amounts,
		}
	}

	return (
		<AuthContext.Provider value={{ getResquest, data }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
