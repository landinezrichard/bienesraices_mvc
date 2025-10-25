const formularioLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};

const formularioRegistro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crear Cuenta",
  });
};

const formularioOlvidoPassword = (req, res) => {
  res.render("auth/olvido-password", {
    pagina: "Recupera tu acceso a Bienes Raíces",
  });
};

export { formularioLogin, formularioRegistro, formularioOlvidoPassword };
