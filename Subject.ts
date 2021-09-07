import { Subject } from 'rxjs';

/**
 * Observable 在建立对象时 就已经通过 subscriber 决定好了 数据的流向, 每一个订阅 Observable 的 对象得到的是独立的数据
 * Subject 却是在实例化后, 再决定数据的流向,  每次事件发生时(执行next方法) 就会通知所有的 观察者 (observer)
 */

const source$ = new Subject();

source$.subscribe(data => console.log(`第一次订阅data, ${data}`));
source$.next(1);
source$.next(2);

source$.subscribe(data => console.log(`第二次订阅data, ${data}`));
source$.next(3);
source$.next(4);

source$.subscribe(data => console.log(`第三次订阅data, ${data}`));
source$.next(5);
source$.next(6);
