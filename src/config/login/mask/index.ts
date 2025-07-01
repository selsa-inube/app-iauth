import { inube } from "@inubekit/inubekit"

const mask = {
    maskBackground: {
        backgroundColor: inube.palette.neutralAlpha.N30A ,
        zIndex: -1
    },
    maskModalWarning: {
        backgroundColor: inube.palette.neutralAlpha.N100A,
        zIndex: 99
    }

}

export { mask}