import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService){}

  create(createCategoryDto: CreateCategoryDto) {
    // return 'This action adds a new category';
    return this.prisma.category.create({ data: createCategoryDto });
  }

  findAll() {
    // return `This action returns all categories`;
    return this.prisma.category.findMany()
  }

  findOne(id: number) {
    // return `This action returns a #${id} category`;
    return this.prisma.category.findUnique({ where: {id}});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    // return `This action updates a #${id} category`;
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} category`;
    return this.prisma.category.delete({ where: { id } });
  }
}
