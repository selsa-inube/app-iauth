import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { MdOutlinePersonOutline, MdLockOutline } from "react-icons/md";


const StyledMdOutlinePersonOutline = styled(MdOutlinePersonOutline)`
    color: ${inube.palette.neutral.N900}
`

const StyledMdLockOutline = styled(MdLockOutline)`
    color: ${inube.palette.neutral.N900}
`

export {
    StyledMdOutlinePersonOutline,
    StyledMdLockOutline
}