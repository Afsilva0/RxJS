import { Observable } from 'rxjs';

export function exampleObservable() {
  //  Creación de Observable envio push de forma perezosa
  const observable = () => {
    return new Observable((subscribe) => {
      subscribe.next(1);
      subscribe.error(2);

      setTimeout(() => {
        subscribe.next(3);
        subscribe.complete();
      }, 1000);
    });
  };

  // Suscripción a Observable
  observable().subscribe({
    next: (a) => console.log(a),
    error: (a) => console.log(a),
    complete: () => console.log('finish'),
  });
}
