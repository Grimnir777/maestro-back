import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const description = 
  'Welcome to the  Maestro swagger !\n ' + 
  'Here you will find every endpoints available in order to save your partitions ';

  // Swagger documentation
  const options = new DocumentBuilder()
  .setTitle('Maestro backend')
  .setDescription(description)
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  


  // Start app
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
