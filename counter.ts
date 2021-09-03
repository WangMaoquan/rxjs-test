import { filter, fromEvent, Subject } from 'rxjs';

// 获取按钮
const oStartBtn = document.querySelector('.start');
const oCountBtn = document.querySelector('.count');
const oErrorBtn = document.querySelector('.error');
const oCompleteBtn = document.querySelector('.complete');

// 获取显示区
const oCurrentStatus = document.querySelector('.current_status');
const oCurrentCount = document.querySelector('.current_count');
const oEvenCount = document.querySelector('.even_count');

// 计数器的值
let count = 0;
// 可被观察的对象习惯在结尾加一个$
let count$: Subject<number>;

fromEvent(oStartBtn, 'click').subscribe(() => {
  // 初始化
  count$ = new Subject();
  count = 0;
  oCurrentStatus.innerHTML = '当前状态: 开始计数';
  // 分离出去
  // count$.subscribe(data => {
  //   oCurrentCount.innerHTML = `目前计数: ${data}`;
  //   if (data % 2 === 0) {
  //     oEvenCount.innerHTML = `偶数计数: ${data}`;
  //   }
  // });
  count$.next(count);
});

// 专注于当前计数
count$.subscribe(data => {
  oCurrentCount.innerHTML = `目前计数: ${data}`;
});

// 专注于偶数计数
const evenCount$ = count$.pipe(filter(data => data % 2 === 0));
evenCount$.subscribe(data => {
  oEvenCount.innerHTML = `偶数计数: ${data}`;
});

fromEvent(oCountBtn, 'click').subscribe(() => {
  count$.next(++count);
});
