import { staffPortalByBusinessManager } from "@services/staffPortal/getStaffPortalByBusinessManager";
import { getBusinessManagers } from "@services/staffPortal/getBusinessManager";
import { IUseBusinessData } from "@ptypes/hooks/useBusinessData/IUseBusinessData";
import { useState } from "react";
import { urlDefault } from "@config/hook/urlDefault";

const useBusinessData = (params: IUseBusinessData) => {
    const { portalCode } = params;
    const [urlLogo, setUrlLog] = useState<string>(urlDefault.logoUrl);
    (async () => {
        let businessManagerId = await staffPortalByBusinessManager(portalCode);
        const businessManagerData = await getBusinessManagers(businessManagerId[0].businessManagerId);
        console.log("ñññññññññññññññññññññññññññññ  ", businessManagerData)
        setUrlLog(businessManagerData.urlLogo || urlDefault.logoUrl);
    })();

    console.log("Business Manager Data:", urlLogo);

    return {
        urlLogo
    }

};

export { useBusinessData };