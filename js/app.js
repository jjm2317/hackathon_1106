const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $next = document.querySelector('.gender > .next')
const $singer = document.querySelector('.singer');
const $battle = document.querySelector('.battle');
const $h3 = document.querySelector('.battle h3');
let jobKey = '';
let count = 0;

//gender 선택 시작
let genderChoice;
//gender 선택 이벤트 핸들러 등록
$gender.onclick = e => {
  if(e.target.matches('.gender > next')) return;
  if(e.target.matches ('.gender > .woman')){
    genderChoice = 'w'
  }
  else if(e.target.matches('.gender > .man')){
    genderChoice = 'm'
  } else return; 
}
//gender 선택 끝

// next 버튼을 누르면 gender에 active 삭제, job에 active 추가하는 이벤트 핸들러
$next.onclick = e => {


  if ( !genderChoice ) {
    alert('성별을 선택하세요!');
    return;
  };
  e.target.parentNode.classList.remove('active');
  $job.classList.add('active');
  console.log($job);
}
$job.onclick = e => {
  if (e.target.matches('.job > .prev')) {
    $job.classList.remove('active');
    $gender.classList.add('active');
    jobKey = '';
    genderChoice = '';
  } else if (e.target.matches('.job > .singer')){
    jobkey = 'singer'
  } else if (e.target.matches('.job > .actor')) {
    jobkey = 'actor'
  } else {
    jobkey = 'all'
  }
  console.log(jobKey);
}

console.log($battle);

$battle.onclick = e => {

  console.log(count);
  count = count + 1;
  
  if (count === 8) {
    $h3.textContent = '8강';
  } else if(count === 12) {
    $h3.textContent = '4강';
  } else if(count === 16){
    $h3.textContent = '결승'
    count = 0;
  }
}
let newArr = [];
let numArr = [];

const randomItem = () => {
  newArr = newArr.map((item, i, arr) => arr[numArr[i]]);
  return newArr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

while (!(numArr.length === 16)){
  while (1){
    let num = getRandomInt(1, 17)
    if(!numArr.includes(num)){
     numArr.push(num);
     break;
    }   
  }
}

