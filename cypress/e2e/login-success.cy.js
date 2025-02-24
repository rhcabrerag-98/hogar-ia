describe("login-success.cy.js", () => {
  it("Debe iniciar sesión exitosamente", () => {
    cy.viewport(867, 731);
    cy.visit("http://localhost:3000/");

    // Hacer clic en el botón de login (si es necesario)
    cy.get("header a > svg").click(); 

    // Ingresar email y contraseña
    cy.get("main input[type='email']").type("rhcabrerag@outlook.com");
    cy.get("input[type='password']").type("@bc@BC123");

    // Hacer clic en el botón de login
    cy.get("main button").click();

    // Esperar a que el login se complete
    cy.wait(2000);  // Ajusta según la velocidad de tu app

    // Hacer clic en el perfil del usuario
    cy.get("a[href='/account']").click();

    // Verificar que el botón de "Cerrar sesión" aparece
    cy.contains("button", "Cerrar sesión").should("be.visible");
  });
});