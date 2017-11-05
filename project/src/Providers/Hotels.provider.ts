import {HotelsService} from "../modules/Services/Hotels.service";

export const HotelsProvider = { provide: 'HotelsService', useClass: HotelsService };
