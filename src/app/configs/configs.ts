import { UserType } from "../models/usersType";
import { RoleModel } from "../modules/user/models/privilegesLevelModel";
import { UserTpeModedl } from "../modules/user/models/UserTypeModel";
export enum registrationStrategy {
  regular = 0,
  twoSteps
}

export const configs = {
  accessLevel: [
    new RoleModel({ key: "Sviluppatore", value: 1 }),
    new RoleModel({ key: "Responsabile", value: 2 }),
    new RoleModel({ key: "Utente standard", value: 3 })
  ],
  appName:"arpho's projects",
  userType: [
    { key: "regular", value: UserType.regular },
    { key: "clerk", value: UserType.clerk }
  ],
  offlineEntityNumber: 0,
  i18n:{
    en:{label:"English",
  dictionary:{
    subtitle:""
  }
  }
  },

  locked:false,

  enablingCodeLength: 5,
  registrationStrategy: registrationStrategy.regular

};
