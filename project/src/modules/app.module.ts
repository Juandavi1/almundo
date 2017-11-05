import { Module } from '@nestjs/common';
import {HotelsController} from "./Controllers/Hotels.controller";
import {HotelsProvider} from "../Providers/Hotels.provider";

@Module({
    modules: [],
    controllers:[HotelsController],
    components:[HotelsProvider]
})
export class ApplicationModule {}

