interface IdLabel
{
  id: number;
}

interface NameLabel
{
  name: string;
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

type Mpungo = 
{
  name: string,
}

type Orisa = 
{
  id: number; 
}

type MpungoOrOrisa<T extends string | number> = T extends string ? Mpungo : Orisa; 

type _mpungo = MpungoOrOrisa<string>;
type _orisa = MpungoOrOrisa<number>;


type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email 
{
  message: string,
}

interface Dog 
{
  bark(): void; 
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T; 
type Str = Flatten<string[]>; 


