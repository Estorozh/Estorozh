//эти переменные следят, чтобы не было бесконечного переключения картинок
var min,max;
let leftArrow = document.getElementsByClassName('slider__control__left-arrow'), rightArrow = document.getElementsByClassName('slider__control__right-arrow'), sliderImg = document.getElementsByClassName('slider__img');
//собираем все слайдеры на странице
for(i=0; i<sliderImg.length; i++) {
  //листаем влево картинки
  leftArrow[i].addEventListener('click', function(el) {
    let img = el.target.parentElement.previousElementSibling, numImg; 
    numImg = img.classList[1][5];
    //находим минимальную картинку
    if (!min && typeof min == 'undefined') {
      min = numImg;
      max = +numImg + 3;
    }
    if (img.classList[1].length == 7)
      numImg = img.classList[1][5]+img.classList[1][6];
    if (numImg != min)
    {
      img.classList.remove(img.classList[1]);
      img.classList.add('img--'+--numImg);
    }
  });
    //листаем вправо картинки
    rightArrow[i].addEventListener('click', function(el) {
      let img = el.target.parentElement.parentElement.children[0], numImg;
      numImg = img.classList[1][5];
      //находим максимальную картинку и присваиваем минимальную
      if (!max && typeof max == 'undefined') {
        min = numImg;
        max = +numImg + 3;
      }
      if (img.classList[1].length == 7)
        numImg = img.classList[1][5]+img.classList[1][6];
        console.log(min, max);
      if (numImg != max)
      {
        img.classList.remove(img.classList[1]);
        img.classList.add('img--'+ ++numImg);
      }
    });
}