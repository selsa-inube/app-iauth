import { IOptionsByStaffPortalBusinessManager } from "@ptypes/services/staffPortal/IOptionsByStaffPortalBusinessManager";
import { IStaffPortalByBusinessManager } from "@ptypes/services/staffPortal/IStaffPortalByBusinessManager";
import { mapStaffPortalByBusinessManagerApiToEntity } from "../mapStaffPortalByBusinessManagerApiToEntity";

const mapStaffPortalByBusinessManagerApiToEntities = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >[],
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapStaffPortalByBusinessManagerApiToEntity);
};
export {
  mapStaffPortalByBusinessManagerApiToEntities,
};