// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

export default describe("testing Home Page and Checkout Page", () => {
	it("Access the Home Page", () => {
		cy.visit("/")
	})
	it("Test header background ", () => {
		cy.get("[data-cy=header]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("div")
				.parents("[data-cy=header]")
				.should("have.css", "background-color", "rgb(47, 54, 118)")
		})
	})
	it("test H1 (Home page)", () => {
		cy.get("[data-cy=textHeader]").within(() => {
			cy.get("h1").should("contain", "Formulário")
			cy.get("h1").should("contain", "para compra de")
			cy.get("h1").should("contain", "Pacotes de adesivos")
		})
	})
	it("test H2 (Home page)", () => {
		cy.get("h2").should("contain", "Escolha seus adesivos:")
		cy.get("h2").should("contain", "Escolha o tamanho:")
		cy.get("h2").should("contain", "Escolha a quantidade:")
		cy.get("h2").should("contain", "Observações:")
		cy.get("label").should("contain", "React")
	})
	it("label test", () => {
		cy.get("label").should("contain", "React")
		cy.get("label").should("contain", "Next")
		cy.get("label").should("contain", "Vue")
		cy.get("label").should("contain", "P")
		cy.get("label").should("contain", "M")
		cy.get("label").should("contain", "G")
	})
	it("checkbox test ", () => {
		cy.get("[data-cy=checkbox]").within(() => {
			cy.get('[type="checkbox"]')
				.check()
				.should("have.css", "background-color", "rgba(0, 0, 0, 0)")
		})
	})
	it("radio test ", () => {
		cy.get("[data-cy=radio]").within(() => {
			cy.get('[type="radio"]').check()
		})
	})
	it("testing (buttons plus and minus )", () => {
		cy.get("[data-cy=minus]")
			.click()
			.should("have.css", "background-color", "rgb(47, 54, 118)")
		cy.get("[data-cy=plus]")
			.click()
			.should("have.css", "background-color", "rgb(47, 54, 118)")
		cy.get("[data-cy=label").type("0")
		cy.get("[data-cy=label").click()
	})
	it("text area test ", () => {
		cy.get("[data-cy=textbox]")
			.type("Adesivos foscos")
			.should("have.value", "Adesivos foscos")
			.should("have.css", "background-color", "rgb(221, 227, 232)")
			.should("have.focus")
	})
	it("test footer background ", () => {
		cy.get("[data-cy=footer]").should(
			"have.css",
			"background-color",
			"rgb(221, 227, 232)"
		)
	})
	it("responsiveness test", () => {
		cy.viewport(400, 680)
		cy.get("h1").should("contain", "Formulário")
	})
	it("submit button testing (Home page)", () => {
		cy.get("[data-cy=footer]").within(() => {
			cy.get("button")
				.click()
				.should("have.css", "background-color", "rgb(47, 54, 118)")
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/CheckoutPage")
			})
		})
	})
	it("test H1 (Checkout page)", () => {
		cy.get("[data-cy=textHeader-checkout-page]").within(() => {
			cy.get("h1").should("contain", "Estamos")
			cy.get("h1").should("contain", "Pertinho de")
			cy.get("h1").should("contain", "Finalizar o seu pedido")
		})
	})
	it("test H2 (Checkout page)", () => {
		cy.get("h2").should("contain", "Aqui está o seu pedido")
		cy.get("h2").should("contain", "Formas de pagamento:")
		cy.get("h2").should("contain", "Adesivos")
		cy.get("h2").should("contain", "Tamanho")
		cy.get("h2").should("contain", "Quantidade")
		cy.get("h2").should("contain", "Valor")
		cy.get("h2").should("contain", "R$20,00")
		cy.get("h2").should("contain", "React")
		cy.get("h2").should("contain", "G")
		cy.get("h2").should("contain", "10")
	})

	it("radio test (Checkout page)", () => {
		cy.get("[data-cy=radio-checkout-page]").within(() => {
			cy.get('[type="radio"]').check()
		})
	})
	it("label test (Checkout page)", () => {
		cy.get("label").should("contain", "Cartão")
		cy.get("label").should("contain", "Pix")
		cy.get("label").should("contain", "Dinheiro")
	})

	it("submit button testing (Checkout page)", () => {
		cy.get("[data-cy=footer-checkout-page]").within(() => {
			cy.get("button")
				.click()
				.should("have.css", "background-color", "rgb(47, 54, 118)")
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/Homepage")
			})
		})
	})
})
