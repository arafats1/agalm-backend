import { ApiProperty } from "@nestjs/swagger";
export class CreateItemDto {
    @ApiProperty()
    name: string;
    // @ApiProperty()
    // image: string;
    @ApiProperty()
    itemSaleTag: string;
    @ApiProperty()
    itemType: string;
}
