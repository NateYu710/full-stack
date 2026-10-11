'use strict';

const prices = [1000, 2000, 3000];

const regularPrices = prices.map(function (price) {
  return price * 2;
});
//[ 2000, 4000, 6000 ]

console.log(regularPrices);

const arrowPrices = prices.map((price) => price * 2);
console.log(arrowPrices);
//[ 2000, 4000, 6000 ]

const theater = {
  store: '청량리역점',
  titles: ['오딧세이', '옵세션'],
  showMovieList: function () {
    console.log(this);
    // showMovieList: () => {
    //console.log(this)
    //}

    //화살표 함수는 자신만의 this가 없고, 바깥 범위의 this를 사용한다
    this.titles.forEach((title) => {
      console.log(this.store + ': ' + title);
    });
    // this.titles.forEach(function (title) {
    //   console.log(this.score + ': ' + title);
    // });
    /**
     * console.log(this.score + ': ' + title);
       TypeError: Cannot read properties of undefined (reading 'score')
     */
    // forEach 안의 일반 함수는 바깥 객체의 this를
    // 이어받지 않아서 this.score를 읽을 수 없다
  },
};

theater.showMovieList();
/**
 * store: '청량리역점',
  titles: [ '오딧세이', '옵세션' ],
  showMovieList: [Function: showMovieList] // theater 객체 전체가 반환됨
}
청량리역점: 오딧세이
청량리역점: 옵세션
 */

/**
 * 정리: this는 “지금 이 함수를 실행할 때 연결된 객체가 누구냐”를 나타내는 특별한 값
 */
