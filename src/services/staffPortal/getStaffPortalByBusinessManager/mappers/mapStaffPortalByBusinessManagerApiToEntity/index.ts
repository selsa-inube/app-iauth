import { IOptionsByStaffPortalBusinessManager } from "@ptypes/services/staffPortal/IOptionsByStaffPortalBusinessManager";
import { IStaffPortalByBusinessManager } from "@ptypes/services/staffPortal/IStaffPortalByBusinessManager";

const mapStaffPortalByBusinessManagerApiToEntity = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >,
): IStaffPortalByBusinessManager => {
  const buildResend: IStaffPortalByBusinessManager = {
    abbreviatedName: String(resend.abbreviatedName),
    businessManagerId: String(resend.businessManagerId),
    descriptionUse: String(resend.descriptionUse),
    publicCode: String(resend.publicCode),
    staffPortalCatalogId: String(resend.staffPortalCatalogId),
    staffPortalId: String(resend.staffPortalId),
    url: String(resend.url),
  };
  return buildResend;
};

export {
  mapStaffPortalByBusinessManagerApiToEntity
};
