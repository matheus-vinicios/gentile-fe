import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceInterface } from './service.interface';
import { Environment } from '../constant/environment.constant';

export abstract class ServiceBase<E, ID> implements ServiceInterface<E, ID>
{
  constructor
  (
    protected httpClient: HttpClient,
    protected path: string
  )
  {
    
  }

  getAll
  (
    limit: number = 10,
    offset: number = 0
  )
  : Observable<E[]>
  {
    return this.httpClient.get<E[]>
    (
      Environment.api + this.path + '?limit=' + limit + '&offset=' + offset
    );
  }

  get
  (
    id: ID
  )
  : Observable<E>
  {
    return this.httpClient.get<E>
    (
      Environment.api + this.path + `${id}`
    );
  }

  insert
  (
    entity: E
  )
  : Observable<E>
  {
    return this.httpClient.post<E>
    (
      Environment.api + this.path,
      entity
    );
  }

  update
  (
    id: ID,
    entity: E
  )
  : Observable<E>
  {
    return this.httpClient.put<E>
    (
      Environment.api + this.path + `${id}`,
      entity
    );
  }

  delete
  (
    id: ID
  )
  : Observable<any>
  {
    return this.httpClient.delete<E>
    (
      Environment.api + this.path + `${id}`
    );
  }
}