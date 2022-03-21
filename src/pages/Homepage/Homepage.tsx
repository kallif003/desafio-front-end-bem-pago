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

interface Values {
	Stickers: string
	Size: string
	inputText: string
}

const HomePage = () => {
	const [checked, setChecked] = useState(false)
	const CustomInputComponent = (props: any) => <InputText {...props} />
	const { getResquest }: any = useContext(AuthContext)
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
					Stickers: "",
					Size: "",
					inputText: "",
				}}
				onSubmit={(values: Values) => {
					getResquest(values)
				}}>
				<Form>
					<CheckboxDiv>
						<CheckboxContainer background={checked ? "#282e64" : "#ddd"} id="s">
							<Checkbox type="checkbox" name="Stickers" value="React" />
							<TextCheckBox>React</TextCheckBox>
						</CheckboxContainer>

						<CheckboxContainer background={checked ? "#282e64" : "#ddd"}>
							<Checkbox type="checkbox" name="Stickers" value="Next" />
							<TextCheckBox>Next</TextCheckBox>
						</CheckboxContainer>

						<CheckboxContainer background={checked ? "#282e64" : "#ddd"}>
							<Checkbox type="checkbox" name="Stickers" value="Vue" />
							<TextCheckBox>Vue</TextCheckBox>
						</CheckboxContainer>
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

					<H2>Escolha a quantidade:</H2>

					<ContainerAmount>
						<Amounts />
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
			</Formik>
		</div>
	)
}

export default HomePage
