import './style.css';

import { of, map, Observable, Subject } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

let subject = new Subject();

let observable = () => {
  return new Observable((subscribe) => {
    subscribe.next('holeeeeeeee');
    subscribe.error('xdddd');
    subscribe.complete();
  });
};

observable().subscribe({
  next: (a) => console.log(a),
  error: (a) => console.log(a),
  complete: () => console.log('finish'),
});

subject.next('1');

console.log(subject.observed);

subject.subscribe({
  next: (a) => console.log(a),
});

subject.next('2');
subject.next('3');

console.log(subject.observed);

// Open the console in the bottom right to see results.
