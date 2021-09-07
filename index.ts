import './style.css';
// import './counter';
import { of, map, filter, fromEvent, Subject } from 'rxjs';
import './Observable';
import './Subject';
import './BehaviorSubject';
import './ReplaySubject';
import './AsyncSubject';
// fromEvent(document, 'click')
//   .pipe(
//     filter((e, index) => {
//       console.log(e);
//       return index % 2 === 0;
//     }),
//     map(e => {
//       const { x, y } = e as MouseEvent;
//       return {
//         x,
//         y
//       };
//     })
//   )
//   .subscribe(position => {
//     console.log(position);
//   });
