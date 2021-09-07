import { BehaviorSubject } from 'rxjs';

/**
 * Subject 的实例 如果没有任何事件发生时(执行next方法时) 观察者就不会接收到任何信息, 如果需要一个默认值
 * 可以是用 BehaviorSubject
 */

const source$ = new BehaviorSubject(0);

source$.subscribe(data => console.log(`第一次订阅 ${data}`));

source$.next(1);

source$.subscribe(data => console.log(`第二次订阅 ${data}`));

//BehaviorSubject 产生的对象，有一个属性 value ，可以获取到最近的data
console.log(source$.value);

const source_1$ = source$.asObservable(); // 返回一个 观察者
source_1$.subscribe({
  next: data => console.log(`作为一个observer ${data}`),
  error: error => console.log(`error ${error}`),
  complete: () => console.log('完成')
});

source$.next(2);

// source$.error(1);

source$.complete();
