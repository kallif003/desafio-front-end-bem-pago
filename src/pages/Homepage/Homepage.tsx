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
import MyCheckBox from "../../components/CheckBox/Checkbox"
import { CheckboxDiv } from "../../components/CheckBox"
import MyRadio from "../../components/Radio/Radio"
import { RadioDiv } from "../../components/Radio"
import { ContainerAmount } from "../../components/Amounts"
import Amounts from "../../components/Amounts/Amounts"
import { InputText, ContainerInputText } from "../../components/InputText"
import { Footer } from "../../components/Footer"
import { SubmitButton, ContainerButton } from "../../components/Buttons"

const HomePage: NextPage = () => {
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
			<CheckboxDiv>
				<MyCheckBox name="React" />
				<MyCheckBox name="Next" />
				<MyCheckBox name="Vue" />
			</CheckboxDiv>

			<H2>Escolha o tamanho:</H2>

			<RadioDiv>
				<MyRadio name="P" />
				<MyRadio name="M" />
				<MyRadio name="G" />
			</RadioDiv>

			<H2>Escolha a quantidade:</H2>

			<ContainerAmount>
				<Amounts />
			</ContainerAmount>

			<H2>Observações:</H2>

			<ContainerInputText>
				<InputText />
			</ContainerInputText>

			<Footer>
				<ContainerButton>
					<SubmitButton>Enviar</SubmitButton>
				</ContainerButton>
			</Footer>
		</div>
	)
}

export default HomePage
