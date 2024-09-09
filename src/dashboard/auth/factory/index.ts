import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from "../dto";
import { Admin } from "../entity";

export class AdminFactoryService {
    createAdmin(createAdminDto: CreateAdminDto) {
        const newAdmin = new Admin()
        newAdmin.name = createAdminDto.name;
        newAdmin.email = createAdminDto.email;
        newAdmin.password = bcrypt.hashSync(createAdminDto.password, 8);
        return newAdmin
    }

}