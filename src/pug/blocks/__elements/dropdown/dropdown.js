let dropdown, itemsText, itemsPlus, itemsMinus, arr;
itemsText = document.getElementsByClassName('items__count__text');
dropdown = document.getElementsByClassName('dropdown');

//функция для правильной подстановки нужного окончания
const goodNaming = (value,arr) => {
  switch(value) {
    case 0: 
      return arr[0];
    case 1:
      return arr[1];
    case 2:
    case 3:
    case 4:
      return arr[2];
    default:
      if (value > 20) {
        if (value > 99) {
          return goodNaming(value % 100,arr);
        }
        return goodNaming(value % 10,arr);
      }
      return arr[0];
  }
}
for (i=0; i<dropdown.length; i++) {
    dropdown[i].addEventListener('click', function(event,dropdown) {
      dropdown= event.target;
      //проверка какой массив выбрать с удобствами или гостями
      // console.log(dropdown);
      //если 0, то минус не активен
      let text = dropdown.getElementsByClassName('items__count__text'),minus = dropdown.getElementsByClassName('items__count__minus');
      for (j=0; j<text.length; j++) {
        if (text[j].innerHTML == '0') 
          minus[j].classList.toggle('disable');
      }
      //проверка нажатия на место нажатия. Чтобы это не применялось во время нажатия на тело dropdown
      if (dropdown.id=="dropdown") {
        //открываю тело dropdown
          dropdown.children[0].classList.toggle('show');
        //меняется стрелочка down на up
          dropdown.classList.toggle('arrow--up');
          dropdown.classList.toggle('arrow--down');
        //счетчик в items обрабатывает нажатия на минус и плюс
          dropdown.children[0].addEventListener('click',(e)=>{
            arr = [' гостей',' гость',' гостя'];
            let count;
            //функция, которая принимает количество гостей и выдает строку
            let summGuest = (items)=> {
              let guest = 0, baby = 0;
              /**первый не правильно работающий метод */
              // switch(e.target.parentElement.parentElement.children[0].innerText) {
              //   case 'взрослые':
              //     for (k=0; k < items.length-2; k++) {
              //       guest = counting(+items[k].children[1].children[1].innerHTML, guest)
              //     }
              //     break;
              //   case 'дети':
              //       for (k=0; k < items.length-2; k++) {
              //         guest = counting(+items[k].children[1].children[1].innerHTML, guest)
              //       }
              //       console.log(items[k].children[1].children[1].innerHTML);
              //     break;
              //   case 'младенцы':
              //       for (k=0; k < items.length-1; k++) {
              //         baby = counting(+items[k].children[1].children[1].innerHTML, baby)
              //       }
              //       console.log(baby);
              //     break;

              // }
              /**втоорй не правильно работающий метод */
              // for (k=0; k < items.length-1; k++) { 
              //   if(e.target.parentElement.parentElement.children[0].innerText == "младенцы") {
              //     baby++;
              //   } else {
              //     guest += +items[k].children[1].children[1].innerHTML;
              //   }
              // }
              //вызываю функцию подставления правильного окончания
              return guest + goodNaming(guest, arr) + baby + ' младенцев';
            };

            //проверка нажатий на - и +
            switch(e.target.innerHTML) {

              //проверка нажатия на минус
              case '-':
                count = +e.target.nextSibling.innerHTML;
                if (count == 1) //отключаем кнопку минус, если сейчас будет 0
                  e.target.classList.toggle('disable');
                if (count>=1) //проверяем возможно ли еще отнимать
                  count--;
                  e.target.nextSibling.innerHTML = count;
              break;

              //проверка нажатия на плюс
              case '+':
                  count = +e.target.previousSibling.innerHTML;
                  if (count == 0)//делаем кнопку минус активной
                    e.target.previousSibling.previousSibling.classList.toggle('disable');
                  count++;
                  e.target.previousSibling.innerHTML=count;
                  dropdown.firstChild.data = summGuest(dropdown.children[0].children);
              break;
            }
          });
        }

      //Использую кнопку "применить" скрывая содержимое при нажатии
      let dropdown__aply = document.querySelector('.dropdown__apply');
      dropdown__aply.addEventListener('click', function(e) {
        e.target.parentElement.parentElement.classList.toggle('show');
        e.target.parentElement.parentElement.parentElement.classList.toggle('arrow--up');
        e.target.parentElement.parentElement.parentElement.classList.toggle('arrow--down');
      })
    });
}

