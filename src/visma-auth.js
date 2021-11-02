import { BehaviorSubject } from 'rxjs';

const _nameApp = new BehaviorSubject('');

export const nameApp$ = _nameApp.asObservable();

export const changeNameApp = (name) => _nameApp.next(name);
