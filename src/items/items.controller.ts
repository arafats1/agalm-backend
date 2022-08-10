import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { constants } from 'http2';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
  @Get('popular')
  findPopularItems() {
    return this.itemsService.findPopularItems();
  }
  @Get('daily-deals')
  findDailyDeals() {
    return this.itemsService.findDailyDeals();
  }
  @Get('products')
  findProducts() {
    return this.itemsService.findProducts();
  }
  @Get('products/:id')
  findProduct(@Param('id') id: string) {
    return this.itemsService.findProduct(+id);
  }

  @Get('property')
  findProperty() {
    return this.itemsService.findProperty();
  }
  @Get('property/:id')
  findPropertyById(@Param('id') id: string) {
    return this.itemsService.findPropertyById(+id);
  }

  @Get('services')
  findService() {
    return this.itemsService.findService();
  }
  @Get('services/:id')
  findServiceById(@Param('id') id: string) {
    return this.itemsService.findServiceById(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}

