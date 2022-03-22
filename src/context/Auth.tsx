/* eslint-disable no-unused-vars */
import { createContext } from "react"
import { useRouter } from "next/router"

export const AuthContext = createContext({})

let data: object = {}

function AuthProvider({ children }: any) {
	const router = useRouter()
	const getResquest = (values: any) => {
		data = {
			Stickers: values.Stickers,
			Size: values.Size,
			Text: values.inputText,
			Amounts: values.amount,
		}
		router.push("./CheckoutPage")
		console.log(data)
	}

	return (
		<AuthContext.Provider value={{ getResquest, data }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
