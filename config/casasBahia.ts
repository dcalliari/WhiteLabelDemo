export default {
    name: "Casas Bahia",
    primaryColor: "#e74c3c",
    logo: require("@/assets/images/casas-bahia.png"),
    logoWidth: 300,
    logoHeight: 300,
    buttonText: "Comprar na Casas Bahia",
    description: "Bem-vindo à Casas Bahia, onde você encontra tudo o que precisa!",
    additionalTexts: ["Texto Casas Bahia 1", "Texto Casas Bahia 2", "Texto Casas Bahia 3"],
    extraButtons: ["Botão Casas Bahia 1"],
    tabs: [
        { name: "Home", icon: "home", route: "index" },
        { name: "Ofertas", icon: "tag", route: "two" },
        { name: "Perfil", icon: "user", route: "profile" }
    ]
};