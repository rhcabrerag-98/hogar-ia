describe("Registro de usuario exitoso", () => {
  it("Debería permitir el registro de un nuevo usuario", () => {
    cy.viewport(867, 731);
    cy.visit("http://localhost:3000/");

    // Generar datos aleatorios
    const nombres = [
      "Ronald",
      "Carlos",
      "Ana",
      "María",
      "Luis",
      "Pedro",
      "Elena",
    ];
    const apellidos = [
      "Cabrera",
      "Guevara",
      "Fernández",
      "Pérez",
      "López",
      "Martínez",
    ];

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio =
      apellidos[Math.floor(Math.random() * apellidos.length)];
    const nombreCompleto = `${nombreAleatorio} ${apellidoAleatorio}`;

    const randomPhone = `9${Math.floor(10000000 + Math.random() * 90000000)}`; // Genera un número en formato 9XXXXXXXX
    const randomEmail = `testuser${Date.now()}@gmail.com`;

    const caracteres =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
    const randomPassword = Array(10)
      .fill("")
      .map(() => caracteres[Math.floor(Math.random() * caracteres.length)])
      .join("");

    // Navegar a la página de registro
    cy.get("header a > svg").click();
    cy.contains("Regístrate").should("be.visible").click();

    // Completar el formulario de registro con datos aleatorios
    cy.get("input[name='fullName']").type(nombreCompleto);
    cy.get("input[name='phone']").type(randomPhone);
    cy.get("input[name='email']").type(randomEmail);
    cy.get("input[type='password']").type(randomPassword);

    // Enviar el formulario
    cy.contains("button", "Registrarme").should("be.visible").click();

    // Esperar a que el registro se procese
    cy.wait(3000);

    // Hacer clic en el perfil del usuario
    cy.get("a[href='/account']").click();
    
    // Verificar que el registro fue exitoso
    cy.contains("button", "Cerrar sesión").should("be.visible");
  });
});
