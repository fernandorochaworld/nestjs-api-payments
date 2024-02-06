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
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1001",
        "name": "Relogio 01",
        "description": "Relogio 01 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 101
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1002",
        "name": "Relogio 02",
        "description": "Relogio 02 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 102
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1003",
        "name": "Relogio 03",
        "description": "Relogio 03 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 103
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1004",
        "name": "Relogio 04",
        "description": "Relogio 04 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 104
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1005",
        "name": "Laptop 05",
        "description": "Laptop 05 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 105
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1006",
        "name": "Laptop 06",
        "description": "Laptop 06 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 106
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1007",
        "name": "Laptop 07",
        "description": "Laptop 07 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 107
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1008",
        "name": "Laptop 08",
        "description": "Laptop 08 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 108
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1009",
        "name": "Laptop 09",
        "description": "Laptop 09 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 109
    },
    {
        "id": "c488eb5c-9db6-47d0-ae46-f1daa8pr1010",
        "name": "Laptop 10",
        "description": "Laptop 10 description",
        "image_url": "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook.jpg",
        "price": 110
    },
  ]);

  await app.close();
}
bootstrap();
