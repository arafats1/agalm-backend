import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
    constructor(private prisma: PrismaService) {}
    
  create(createItemDto: CreateItemDto) {
    // return 'This action adds a new item';
    return this.prisma.item.create({ data: createItemDto });
  }

  findAll() {
    // return `This action returns all items`;
    return this.prisma.item.findMany();
  }

  findPopularItems() {
    return this.prisma.item.findMany({where: {itemSaleTag: "Popular item"}})
  }

  findDailyDeals() {
    return this.prisma.item.findMany({where: {itemSaleTag: "Daily Deals"}})
  }
  findProducts() {
    return this.prisma.item.findMany({where: {itemType: "product"}})
  }
  findProduct(id: number) {
    return this.prisma.item.findUnique({where: {id: id}})
  }

  findProperty() {
    return this.prisma.item.findMany({where: {itemType: "property"}})
  }
  findPropertyById(id: number) {
    return this.prisma.item.findUnique({where: {id: id}})
  }
  findService() {
    return this.prisma.item.findMany({where: {itemType: "service"}})
  }
  findServiceById(id: number) {
    return this.prisma.item.findUnique({where: {id: id}})
  }
  findOne(id: number) {
    // return `This action returns a #${id} item`;
    return this.prisma.item.findUnique({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
