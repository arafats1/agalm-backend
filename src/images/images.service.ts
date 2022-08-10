import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagesService {
    constructor(private prisma: PrismaService){}
  create(createImageDto: CreateImageDto) {
    // return 'This action adds a new image';
    return this.prisma.image.create({ data: createImageDto });
  }

  findAll() {
    // return `This action returns all images`;
    return this.prisma.image.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
