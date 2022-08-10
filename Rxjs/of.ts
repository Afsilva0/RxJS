import { of, map } from 'rxjs';

export function exampleOf() {
  // Of simula un Observable
  of('World')
    .pipe(map((name) => `Hello, ${name}!`))
    .subscribe(console.log);
}
