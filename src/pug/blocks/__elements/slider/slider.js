//эти переменные следят, чтобы не было бесконечного переключения картинок
var min = 0,max = 11;
let leftArrow = document.getElementsByClassName('slider__control__left-arrow'), rightArrow = document.getElementsByClassName('slider__control__right-arrow'), sliderImg = document.getElementsByClassName('slider__img');
//собираем все слайдеры на странице
for(i=0; i<sliderImg.length; i++) {
  //при наведении активируем управление слайдером
  sliderImg[i].addEventListener('mouseover', (e)=> {
    e.target.nextElementSibling.style.display='flex';
    e.target.nextElementSibling.nextElementSibling.style.display='flex';
  })
  //убираем панель управления слайдером
  sliderImg[i].addEventListener('mouseout', (e)=> {
    e.target.nextElementSibling.style.display='none';
    e.target.nextElementSibling.nextElementSibling.style.display='none';
  })
  //листаем влево картинки
  leftArrow[i].addEventListener('click', function(el) {
    let img = el.target.parentElement.previousElementSibling, numImg; 
    numImg = img.classList[1][5];
    if (img.classList[1].length == 7)
      numImg = img.classList[1][5]+img.classList[1][6];
    if (numImg != min)
    {
      img.classList.remove(img.classList[1]);
      img.classList.add('img--'+--numImg);
    } else {
      numImg=11;
      img.classList.remove(img.classList[1]);
      img.classList.add('img--'+ numImg);
    }
  });
    //листаем вправо картинки
    rightArrow[i].addEventListener('click', function(el) {
      let img = el.target.parentElement.parentElement.children[0], numImg;
      numImg = img.classList[1][5];
      if (img.classList[1].length == 7)
        numImg = img.classList[1][5]+img.classList[1][6];
      if (numImg != max)
      {
        img.classList.remove(img.classList[1]);
        img.classList.add('img--'+ ++numImg);
      } else {
        numImg=0;
        img.classList.remove(img.classList[1]);
        img.classList.add('img--'+ numImg);
      }
    });
}