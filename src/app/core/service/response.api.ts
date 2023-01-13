export class Response<T>
{
  readonly timestamp!: Date;
  readonly code!: number;
  readonly description!: string;
  readonly message!: string;
  readonly body!: string;
  readonly data!: T;
}