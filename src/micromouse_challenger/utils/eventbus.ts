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

export interface EventBusDispatcher<T> {
  dispatch(event: Event<T>): void;
}

export interface EventBus<T> {
  subscribe(name: string, onEvent: (event: Event<T>) => void): void;
  dispatch(event: Event<T>);
}


