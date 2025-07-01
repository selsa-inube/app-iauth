import { inube } from "@inubekit/inubekit"

const mask = {
    maskBackground: {
        backgroundColor: inube.palette.neutral.N30,
        zIndex: -1
    },
    maskModalWarning: {
        backgroundColor: inube.palette.neutralAlpha.N100A,
        zIndex: 99
    }

}

export { mask}