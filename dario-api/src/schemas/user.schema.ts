import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsEmail } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    @IsNumber()
    userId: number;

    @Prop()
    name: string;

    @Prop()
    @IsEmail()
    email: string;

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);