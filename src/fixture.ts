import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSourse = app.get<DataSource>(getDataSourceToken());
  await dataSourse.synchronize(true);

  const productRepo = dataSourse.getRepository('Product');
  await productRepo.insert([
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380001",
        "name": "Product 1",
        "description": "Product 1 description",
        "image_url": "https://test.test/img.jpg",
        "price": 101
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380002",
        "name": "Product 2",
        "description": "Product 2 description",
        "image_url": "https://test.test/img.jpg",
        "price": 102
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380003",
        "name": "Product 3",
        "description": "Product 3 description",
        "image_url": "https://test.test/img.jpg",
        "price": 103
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380004",
        "name": "Product 4",
        "description": "Product 4 description",
        "image_url": "https://test.test/img.jpg",
        "price": 104
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380005",
        "name": "Product 5",
        "description": "Product 5 description",
        "image_url": "https://test.test/img.jpg",
        "price": 105
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380006",
        "name": "Product 6",
        "description": "Product 6 description",
        "image_url": "https://test.test/img.jpg",
        "price": 106
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380007",
        "name": "Product 7",
        "description": "Product 7 description",
        "image_url": "https://test.test/img.jpg",
        "price": 107
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380008",
        "name": "Product 8",
        "description": "Product 8 description",
        "image_url": "https://test.test/img.jpg",
        "price": 108
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380009",
        "name": "Product 9",
        "description": "Product 9 description",
        "image_url": "https://test.test/img.jpg",
        "price": 109
    },
    {
        "id": "1cb53ac4-3b35-4cac-a68f-eb145c380010",
        "name": "Product 10",
        "description": "Product 10 description",
        "image_url": "https://test.test/img.jpg",
        "price": 110
    }
  ]);

  await app.close();
}
bootstrap();
