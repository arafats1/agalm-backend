import { ApiProperty} from "@nestjs/swagger";


export class CreateCategoryDto {
    @ApiProperty()
    name: string;
    // @ApiProperty()
    // image: string;
    @ApiProperty()
    itemId: number;
    


}


