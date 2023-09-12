import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { HttpStatus } from '@nestjs/common';
import { ApiException } from 'src/exceptions/api.exception';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (ex) {
      throw new ApiException(
        'Failed to save user to DB - check unique fields',
        HttpStatus.BAD_REQUEST,
      );
    }

  }

  async loadJsonFile() {
    fs.readFile('./src/assets/data.json', 'utf8', (error, data) => {
      if (error) {
        throw new ApiException(
          'Failed to read users json file',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    
      const jsonData = JSON.parse(data);
      jsonData.users.forEach(async user => {
        try {
          const createdUser = await this.create(user);
        } catch (ex) {
          throw new ApiException(
            'Upload file failed to save user to DB - check unique fields',
            HttpStatus.BAD_REQUEST,
          );
        }
      })
    })

  }

  findAll() {
    return `This action returns all users`; 
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
