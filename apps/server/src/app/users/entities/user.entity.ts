import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'User id' })
  id: string;

  @Column({ type: 'text' })
  @Field(() => String, { description: 'User email' })
  email: string;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean, { description: `Show if user email is verified`})
  isVerified: boolean;

  @Column({ type: 'text' })
  @Field(() => String, { description: 'User password' })
  password: string;

  @Column({ type: 'text', default: '' })
  @Field(() => String, { description: 'User avatar link' })
  avatar: string;

  @Column({ type: 'int', default: 1024*10 })
  @Field(() => Int, { description: 'User total disk space' })
  diskSpace: number;

  @Column({ type: 'int', default: 0 })
  @Field(() => Int, { description: 'User used disk space' })
  spaceUsed: number;
}
