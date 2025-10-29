import { Injectable, signal } from '@angular/core';
import { AppSettings, defaults } from '../config';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private optionsSignal = signal<AppSettings>(defaults);
  private notify$ = new BehaviorSubject<Record<string, any>>({});

  constructor() {
    this.notify$.next(this.optionsSignal());
  }

  // Observable for notification updates
  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }

  // Get the current options
  getOptions(): AppSettings {
    return this.optionsSignal();
  }

  setOptions(options: Partial<AppSettings>) {
    this.optionsSignal.update((current) => ({
      ...current,
      ...options,
    }));
    this.notify$.next(this.optionsSignal);
    
  }

  setLanguage(lang: string) {
    this.setOptions({ language: lang });
  }

  getLanguage() {
    return this.getOptions().language;
  }
}