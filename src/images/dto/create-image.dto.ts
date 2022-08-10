import { ApiProperty } from "@nestjs/swagger";
export class CreateImageDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    userId: number;
    @ApiProperty()
    categoryId: number;
    @ApiProperty()
    itemId: number;
}
