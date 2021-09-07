import { ReplaySubject } from 'rxjs';

/**
 * ReplaySubject 有回放的意思, 会帮我们保留最近 N 次的事件资料,并在订阅时重播这些发生过的事件资料给订阅者,跟
 * BehaviorSubject 类似, 都有 cache 的概念,ReplaySubject只是更有弹性
 */

// cache 长度3
const source$ = new ReplaySubject(3);

source$.subscribe(data => console.log(`第一次 ${data}`));
source$.next(1);
source$.next(2);

source$.subscribe(data => console.log(`第二次 ${data}`));
source$.next(3);
source$.next(4);

// 只会打印2 3 4
source$.subscribe(data => console.log(`第三次 ${data}`));
