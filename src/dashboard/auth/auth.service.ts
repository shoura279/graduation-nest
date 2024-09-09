import { BadGatewayException, BadRequestException, ConflictException, HttpException, Injectable } from "@nestjs/common";
import { Admin, AdminDocument, AdminRepository } from "src/models";

@Injectable()
export class AuthService {
    constructor(private adminRepository: AdminRepository) { }
    async signup(admin: Admin): Promise<AdminDocument> {
        const adminExist = await this.adminRepository.exists({ email: admin.email })
        console.log({adminExist});
        
        if (adminExist) {
            throw new ConflictException("user already")
        }
        const createdAdmin = await this.adminRepository.create(admin)
        console.log({createdAdmin});
        
        if (!createdAdmin) {
            throw new BadGatewayException("fail to create admin")
        }
        return createdAdmin
    }
}