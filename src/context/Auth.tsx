/* eslint-disable no-unused-vars */
import { createContext, useState } from "react"

export const AuthContext = createContext({})

function AuthProvider({ children }: any) {
	const [amounts, setAumounts] = useState(0)

	const getResquest = (values: any) => {
		const data = {
			Stickers: values.Stickers,
			Size: values.Size,
			Text: values.inputText,
			Amounts: amounts,
		}
	}

	function addition() {
		setAumounts((amounts) => amounts + 1)
	}

	function subtraction() {
		if (amounts > 0) setAumounts((amounts) => amounts - 1)
	}
	return (
		<AuthContext.Provider
			value={{ amounts, getResquest, addition, subtraction }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
