import { AsyncSubject } from 'rxjs';

/**
 * 只会在 实例执行 complete 方法后 才会让 observer 接收 最后一次 next 的订阅
 */
const source$ = new AsyncSubject();

source$.next(1);
source$.subscribe(data => console.log(`第一次 ${data}`));
source$.next(2);
source$.next(3);
source$.subscribe(data => console.log(`第二次 ${data}`));
source$.next(4);
source$.complete();
source$.subscribe(data => console.log(`第三次 ${data}`));
