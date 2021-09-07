import { Observable } from 'rxjs';

// Observable 可以传入一个回调函数, 该回调函数的第一个参数为一个 subscriber(订阅者) 处理数据
// 如下面的例子
// subscriber 只处理数据流, 如发送1, 2 ,3 ,4 然后结束
// 是同步的

const source$ = new Observable(subscriber => {
  console.log('订阅开始!');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  console.log('订阅结束!');
  subscriber.complete();
});

// 订阅是同步的 上一个订阅完成后 才会开始下一个订阅
source$.subscribe({
  next: value => console.log(`第一次订阅的结果 ${value}`),
  complete: () => console.log('第一次订阅完成!')
});

source$.subscribe({
  next: value => console.log(`第二次订阅的结果 ${value}`),
  complete: () => console.log('第二次订阅完成!')
});
