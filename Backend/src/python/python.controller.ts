import { Controller, Get, Body } from '@nestjs/common';
import { PythonService } from './python.service';

@Controller("python")
export class PythonController {
    constructor(private readonly pythonService: PythonService) {

    }


    @Get('manga')
    public async callReManga(@Body() req) {
        const res = this.pythonService.reRenderManga(req)
        return res
    }
}