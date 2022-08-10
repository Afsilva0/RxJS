import { BehaviorSubject } from 'rxjs';

export function exampleBehaviorSubject() {
  const behaviorSubject = new BehaviorSubject(1);
  behaviorSubject.next(1);

  // Verifica si tiene alguien suscripto
  console.log(behaviorSubject.observed);

  // Suscripción a BehaviorSubject
  behaviorSubject.subscribe({
    next: (a) => console.log(a),
  });

  behaviorSubject.next(2);
  behaviorSubject.next(3);
  behaviorSubject.complete();
  behaviorSubject.next(4);

  // Se Desuscribe BehaviorSubject
  behaviorSubject.unsubscribe();

  console.log(behaviorSubject.observed);
}
