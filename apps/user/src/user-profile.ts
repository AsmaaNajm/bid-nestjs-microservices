
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from '@app/shared';

@Injectable()
export class UserProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

     get profile() {
        return (mapper: Mapper) => {
            createMap(mapper, CreateUserDto, User);
        };
    }
}