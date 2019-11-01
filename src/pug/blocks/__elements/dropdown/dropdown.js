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
      let guest = 0, baby = 0, bedroom=0,bed = 0, bathroom = 0;
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
            arr_guest = [' гостей',' гость',' гостя'], arr_baby = [' младенцев',' младенец',' младенца'], arr_bedroom = ['спален','спальня','спальни'], arr_bed = ['кроватей','кровать','кровати'], arr_bathroom = ['ванных комнат','ванная комната','ванных комнаты'];
            let count;
            //функция, которая принимает количество гостей и выдает строку
            let sumGuest = (items,sign)=> {
              let item = e.target.parentElement.parentElement.children[0].innerText;
              if (item == 'ВЗРОСЛЫЕ' || item == 'ДЕТИ' || item == 'МЛАДЕНЦЫ') {
                switch(item) {
                  case 'ВЗРОСЛЫЕ':
                    if(sign=="+") {
                      ++guest;
                    } else {
                      --guest;
                    }
                    break;
                  case 'ДЕТИ':
                    if(sign=="+") {
                      ++guest;
                    } else {
                      --guest;
                    }
                    break;
                  case 'МЛАДЕНЦЫ':
                    if(sign=="+") {
                      ++baby;
                    } else {
                      --baby;
                    }
                    break;
                }
                //вызываю функцию для подставления правильного окончания и возвращаю строку для input
                if(baby == 0) return guest + goodNaming(guest, arr_guest);
                return guest + goodNaming(guest, arr_guest) +', '+ baby + goodNaming(baby, arr_baby);
              } else {
                switch(item) {
                  case 'СПАЛЬНИ':
                    if(sign=="+") {
                      ++bedroom;
                    } else {
                      --bedroom;
                    }
                    break;
                  case 'КРОВАТИ':
                    if(sign=="+") {
                      ++bed;
                    } else {
                      --bed;
                    }
                    break;
                  case 'ВАННЫЕ КОМНАТЫ':
                    if(sign=="+") {
                      ++bathroom;
                    } else {
                      --bathroom;
                    }
                    break;
                }
                //вызываю функцию для подставления правильного окончания и возвращаю строку для input
                if(bathroom == 0) return bedroom +' '+ goodNaming(bedroom, arr_bedroom) + ', '+ bed +' '+ goodNaming(bed, arr_bed);
                return (bedroom + ' ' +goodNaming(bedroom, arr_bedroom)+', ' + bed +' '+ goodNaming(bed, arr_bed) + ', ' + bathroom + ' ' + goodNaming(bathroom, arr_bathroom)).slice(0,27)+'...';
              }
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
                  dropdown.firstChild.data = sumGuest(dropdown.children[0].children,"-");
              break;

              //проверка нажатия на плюс
              case '+':
                  count = +e.target.previousSibling.innerHTML;
                  if (count == 0)//делаем кнопку минус активной
                    e.target.previousSibling.previousSibling.classList.toggle('disable');
                  count++;
                  e.target.previousSibling.innerHTML=count;
                  dropdown.firstChild.data = sumGuest(dropdown.children[0].children,"+");
              break;
            }
          });
        }

      //Использую кнопку "применить" скрывая содержимое при нажатии
      let dropdown__apply = document.getElementsByClassName('dropdown__apply');
      for(let i=0; i<dropdown__apply.length; i++) {
        dropdown__apply[i].addEventListener('click', function(e) {
          e.target.parentElement.parentElement.parentElement.classList.toggle('show');
          e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('arrow--up');
          e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('arrow--down');
        });
      }
      let dropdown__clean = document.querySelector('.dropdown__clean');
      for(let i=0; i<dropdown__apply.length; i++) {
        dropdown__clean[i].addEventListener('click', function(e) {
          console.log(guest,baby);
        });
      }
    });
}