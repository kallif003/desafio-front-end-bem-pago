/* eslint-disable react/jsx-key */
import type { NextPage } from "next"
import {
	Header,
	HeaderTitle,
	HeaderContainerImage,
	HeaderImage,
} from "../../components/Header"
import Image from "next/image"
import box from "../../../assets/box.png"
import { H1, H2 } from "../../components/Typography"
import { AuthContext } from "../../context/Auth"
import { useContext } from "react"
import { Formik, Form } from "formik"
import { Footer } from "../../components/Footer"
import { useRouter } from "next/router"
import { SubmitButton, ContainerButton } from "../../components/Buttons"
import {
	RadioDiv,
	RadioContainer,
	Radio,
	TextRadio,
} from "../../components/Radio"
import * as Yup from "yup"

interface Values {
	Payment: string
}
const FormSchema = Yup.object().shape({
	Payment: Yup.string()
		.oneOf(["Cartão", "Pix", "Dinheiro"], "Pagamento invalido")
		.required("Escolha uma forma de pagamento"),
})

const CheckoutPage: NextPage = () => {
	const { data }: any = useContext(AuthContext)
	const router = useRouter()
	return (
		<div>
			<Header>
				<HeaderTitle
					className="md:leading-8  xl:leading-[50px]"
					data-cy="textHeader-checkout-page">
					<H1 color="#ccc" fontWeight="normal ">
						Estamos
					</H1>
					<H1 color="#ccc" fontWeight="normal" className="sm:hidden">
						Pertinho de
					</H1>
					<H1 color="#fff" fontWeight="bold" className="sm:hidden">
						Finalizar o seu pedido
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
				<h1 className="text-white text-center hidden sm:block text-[2rem] font-bold">
					Finalizar
				</h1>
			</Header>
			<H2>Aqui está o seu pedido:</H2>
			<div className="py-2  px-24 flex flex-col sm:items-center sm:px-0">
				<div className="flex flex-row bg-[#2f3676] w-[300px] text-white  py-1 px-2 rounded-md sm:">
					<h2 className="pr-8">Adesivos</h2>
					<h2 className="pr-8">Tamanho</h2>
					<h2>Quantidade</h2>
				</div>
				<div className="flex flex-row bg-[#dddc] w-[300px]  py-1 px-3 rounded-md">
					<h2 className="pr-20">{data.Stickers}</h2>
					<h2 className="pr-24">{data.Size}</h2>
					<h2>{data.Amounts}</h2>
				</div>
				<div className="flex flex-row bg-[#ddd3] w-[300px]  py-1 px-3 rounded-md">
					<h2 className="font-bold pr-44">Valor:</h2>
					<h2>R$20,00</h2>
				</div>
			</div>

			<H2>Formas de pagamento:</H2>
			<Formik
				initialValues={{
					Payment: "",
				}}
				validationSchema={FormSchema}
				onSubmit={(values: Values) => {
					alert("Obrigado, pedido realizado com sucesso")
					router.push("./Homepage")
				}}>
				{(formikProps) => {
					return (
						<Form>
							<RadioDiv className="sm:pr-6">
								<RadioContainer data-cy="radio-checkout-page">
									<Radio type="radio" name="Payment" value="Cartão" />
									<TextRadio>Cartão</TextRadio>
									<Radio type="radio" name="Payment" value="Pix" />
									<TextRadio>Pix</TextRadio>
									<Radio type="radio" name="Payment" value="Dinheiro" />
									<TextRadio>Dinheiro</TextRadio>
								</RadioContainer>
							</RadioDiv>
							<p className="text-red-600 sm:pl-44 pl-[6.6rem]">
								{formikProps.touched.Payment && formikProps.errors.Payment}
							</p>
							<Footer className="mt-20">
								<ContainerButton data-cy="footer-checkout-page">
									<SubmitButton type="submit">Finalizar</SubmitButton>
								</ContainerButton>
							</Footer>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default CheckoutPage
