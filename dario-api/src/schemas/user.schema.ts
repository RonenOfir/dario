import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { now } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({
        required: true,
        index: true,
        unique: true,
    })
    id: number;

    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({default: now()})
    createdAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);