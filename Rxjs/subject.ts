import { Subject } from 'rxjs';

export function exampleSubject() {
  //  Creación de Subject envio push de forma perezosa
  const subject = new Subject();
  subject.next('1');

  // Verifica si tiene alguien suscripto
  console.log(subject.observed);

  // Suscripción a Subject
  subject.subscribe({
    next: (a) => console.log(a),
  });

  subject.next(2);
  subject.next(3);
  subject.complete();
  subject.next(4);

  // Se Desuscribe Subject
  subject.unsubscribe();

  console.log(subject.observed);
}
