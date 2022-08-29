import { IUserCoreModel } from '../../models/User/User.types';

export type AuthenticateContract = {
  user	: IUserCoreModel,
  token	: string,
  // ? По идее ты хранишь ID в двух местах, если судить по интерфейсам. Если ID связанны, то это поле можно игнорировать.  
  id ?: IUserCoreModel['id'],
}