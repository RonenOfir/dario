import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsEmail } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import {now, Document} from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({default: now()})
    createdAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);