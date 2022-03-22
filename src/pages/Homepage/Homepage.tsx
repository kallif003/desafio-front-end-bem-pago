/* eslint-disable no-unused-vars */
import { useState, useContext } from "react"
import type { NextPage } from "next"
import Image from "next/image"
import box from "../../../assets/box.png"
import {
	Header,
	HeaderTitle,
	HeaderImage,
	HeaderContainerImage,
} from "../../components/Header"
import { H1, H2 } from "../../components/Typography"

import {
	CheckboxContainer,
	Checkbox,
	CheckboxDiv,
	TextCheckBox,
} from "../../components/CheckBox"

import {
	RadioDiv,
	RadioContainer,
	Radio,
	TextRadio,
} from "../../components/Radio"
import { ContainerAmount } from "../../components/Amounts"
import Amounts from "../../components/Amounts/Amounts"
import { InputText, ContainerInputText } from "../../components/InputText"
import { Footer } from "../../components/Footer"
import { SubmitButton, ContainerButton } from "../../components/Buttons"
import { Formik, Form, FormikHelpers, Field } from "formik"
import { AuthContext } from "../../context/Auth"

import * as Yup from "yup"

interface Values {
	Stickers: string[]
	Size: string
	inputText: string
	amount: number
}

const FormSchema = Yup.object().shape({
	Stickers: Yup.array()
		.of(Yup.string())
		.min(1, "Escolha pelo menos um adesivo"),
	Size: Yup.string()
		.oneOf(["P", "M", "G"], "Tamanho invalido")
		.required("Escolha um tamanho"),
	inputText: Yup.string(),
	amount: Yup.number().min(1, "Selecione uma quantidade").required(),
})

const HomePage = () => {
	const [checked, setChecked] = useState(false)
	const CustomInputComponent = (props: any) => <InputText {...props} />
	const { getResquest, data }: any = useContext(AuthContext)

	return (
		<div>
			<Header>
				<HeaderTitle className="md:leading-8  xl:leading-[50px]">
					<H1 color="#ccc" fontWeight="normal ">
						Formulário
					</H1>
					<H1 color="#ccc" fontWeight="normal" className="sm:hidden">
						para compra de
					</H1>
					<H1 color="#fff" fontWeight="bold" className="sm:hidden">
						Pacotes de adesivos
					</H1>
				</HeaderTitle>

				<HeaderContainerImage>
					<HeaderImage>
						<Image src={box} alt="box" width={150} height={150} />
					</HeaderImage>
					<HeaderImage className="">
						<Image src={box} alt="box" width={270} height={270} />
					</HeaderImage>
					<HeaderImage>
						<Image src={box} alt="box" width={150} height={150} />
					</HeaderImage>
				</HeaderContainerImage>
				<h1 className="text-white text-center hidden sm:block text-[2rem]">
					Formulário
				</h1>
			</Header>

			<H2>Escolha seus adesivos:</H2>
			<Formik
				initialValues={{
					Stickers: [] as string[],
					Size: "",
					inputText: "",
					amount: 0,
				}}
				validationSchema={FormSchema}
				onSubmit={(values: Values) => {
					getResquest(values)
				}}>
				{(formikProps) => {
					console.log(formikProps.errors)
					return (
						<Form>
							<CheckboxDiv>
								<CheckboxContainer
									active={formikProps.values.Stickers.includes("React")}>
									<Checkbox type="checkbox" name="Stickers" value="React" />
									<TextCheckBox
										active={formikProps.values.Stickers.includes("React")}>
										React
									</TextCheckBox>
								</CheckboxContainer>

								<CheckboxContainer
									active={formikProps.values.Stickers.includes("Next")}>
									<Checkbox type="checkbox" name="Stickers" value="Next" />
									<TextCheckBox
										active={formikProps.values.Stickers.includes("Next")}>
										Next
									</TextCheckBox>
								</CheckboxContainer>

								<CheckboxContainer
									active={formikProps.values.Stickers.includes("Vue")}>
									<Checkbox type="checkbox" name="Stickers" value="Vue" />
									<TextCheckBox
										active={formikProps.values.Stickers.includes("Vue")}>
										Vue
									</TextCheckBox>
								</CheckboxContainer>
								<p className="text-red-600 pl-2">
									{formikProps.touched.Stickers && formikProps.errors.Stickers}
								</p>
							</CheckboxDiv>

							<H2>Escolha o tamanho:</H2>

							<RadioDiv>
								<RadioContainer>
									<Radio type="radio" name="Size" value="P" />
									<TextRadio>P</TextRadio>
									<Radio type="radio" name="Size" value="M" />
									<TextRadio>M</TextRadio>
									<Radio type="radio" name="Size" value="G" />
									<TextRadio>G</TextRadio>
								</RadioContainer>
							</RadioDiv>
							<p className="text-red-600 pl-[107px]">
								{formikProps.touched.Size && formikProps.errors.Size}
							</p>

							<H2>Escolha a quantidade:</H2>

							<ContainerAmount>
								<Amounts
									setFieldValue={formikProps.setFieldValue}
									value={formikProps.values.amount}
								/>
								<p className="text-red-600 pl-2 pt-1 sm:px-5">
									{formikProps.touched.amount && formikProps.errors.amount}
								</p>
							</ContainerAmount>

							<H2>Observações:</H2>

							<ContainerInputText>
								<Field
									name="Input"
									as={CustomInputComponent}
									data-testid="textbox"
								/>
							</ContainerInputText>

							<Footer>
								<ContainerButton>
									<SubmitButton type="submit">Enviar</SubmitButton>
								</ContainerButton>
							</Footer>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default HomePage
