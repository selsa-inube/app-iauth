import { IOptionsByStaffPortalBusinessManager } from "@ptypes/services/staffPortal/IOptionsByStaffPortalBusinessManager";

interface IStaffPortalByBusinessManager {
  abbreviatedName: string;
  businessManagerId: string;
  descriptionUse: string;
  publicCode: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
  url: string;
  optionsByStaffPortalBusinessManager?: IOptionsByStaffPortalBusinessManager[];
  [key: string]: string | IOptionsByStaffPortalBusinessManager[] | undefined;
}

export type { IStaffPortalByBusinessManager };