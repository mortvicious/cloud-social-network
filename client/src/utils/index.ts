export class Dict {

  public static keys<T extends Object>(obj: T) {
    return Object.keys(obj) as Array<keyof T>
  } 

}