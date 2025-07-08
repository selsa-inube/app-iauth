const modalWarningContent = {
    icon: "Importante",
    labelUnderstand: "Entiendo",
    modalWarningFirst: {
        textInfo: "La contraseña ingresada es incorrecta, si te equivocas varias veces, tu usuario será bloqueado durante 24 horas.",
    },
    modalWarningSecond: {
        labelButton: "Solicitar desbloqueo",
    },
    numberAttemptsShowFirstWarning: 2,
    patternGetAttempts: new RegExp("([1-5])"),
}

export { modalWarningContent };