import { Observable } from 'rxjs';

export interface ServiceInterface<E, ID>
{
  getAll(): Observable<E[]>;
  get(id: ID): Observable<E>;
  insert(e: E): Observable<E>;
  update(id: ID, e: E): Observable<E>;
  delete(id: ID): Observable<any>;
}