import { Body, Controller, Post } from "@nestjs/common";
import { CreateAdminDto } from "./dto";
import { CreateResponse } from "../../common/dto/response.dto";
import { Admin } from "src/models";
import { AdminFactoryService } from "./factory";
import { AuthService } from "./auth.service";

@Controller('dashboard/auth')
export class AuthController {
    constructor(
        private adminFactoryService: AdminFactoryService,
        private authService: AuthService
    ) { }

    @Post('signup')
    async signup(@Body() createAdminDto: CreateAdminDto) {
        // console.log(createAdminDto);
        
        const createAdminResponse = new CreateResponse<Admin>()
        try {
            const admin = this.adminFactoryService.createAdmin(createAdminDto)
            // console.log(admin);
            
            const createdAdmin = await this.authService.signup(admin)
            // console.log(createdAdmin);
            
            createAdminResponse.success = true;
            createAdminResponse.data = createdAdmin
        } catch (error) {
            createAdminResponse.success = false
            throw error
        }
        return createAdminResponse
    }
}