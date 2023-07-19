import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export abstract class Event<T> {
  
  readonly id: string;
  readonly ocurredAt: Date;
  readonly payload: T;

  constructor(payload: T) {
    this.id = uuidv4();
    this.ocurredAt = new Date();
    this.payload = payload;
  }

  abstract get name(): string;
  
}

export interface EventBus {
  onEvent<T extends Event<any>>(name?: string): Observable<T>
  dispatch<T extends Event<any>>(event: T): void;
}







