const $gender = document.querySelector('.gender');
const $job = document.querySelector('.job');
const $next = document.querySelector('.gender > .next')
const $singer = document.querySelector('.singer');
const $start = document.querySelector('.start');
const $battle = document.querySelector('.battle');
const $h3 = document.querySelector('.battle h3');
const $leftImg = document.querySelector('.left > img');
const $rightImg = document.querySelector('.right > img');
//gender 선택 시작
let jobKey = '';
let genderChoice ='';
let NewidealType = [];
let numArr = [];
let count = 0;
let check = [];
let match8Index = [];
let match4Index = [];
let match2Index = [];
let match1Index = [];
let match8 = [];
let match4 = [];
let match2 = [];
let match1 = [];
let tournament =[]  
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
const ranDom = n => {
  while (!(numArr.length === n)){
    while (1){
      let num = getRandomInt(0, n)
      if(!numArr.includes(num)){
       numArr.push(num);
       break;
      }   
    }
  }
}
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
  } else if(e.target.matches('.job > .all')){
    jobkey = 'all'
  } else return;
  console.log(jobkey);
}
$start.onclick = () => {
   NewidealType = idealType.filter(ideal => {
    return jobkey==='all' ? ideal.gender === genderChoice : 
    ideal.gender === genderChoice && ideal.job === jobkey 
  });
  if (jobkey === 'all' ) {
    ranDom(32);
    numArr.length = 16;
    randomItem(NewidealType);
    NewidealType.length = 16;
  }
  $job.classList.remove('active');
  $battle.classList.add('active');
  tournament = matchImage(NewidealType);
  renderImage(tournament,0);
 } 
 const randomItem = () => {
  NewidealType = NewidealType.map((item, i, arr) => arr[numArr[i]]);
  }
  const matchImage = (match) => {
    const res = match.map(item => {
      console.log(item);
      return item.path});
    console.log(res);
    return res;
  }
const renderImage = (pathSet, n) => {
  console.log(pathSet[2*n]);
  $leftImg.setAttribute('src', pathSet[2*n]);
  $rightImg.setAttribute('src', pathSet[2*n+1]);
}
$battle.onclick = e => {
  count = count + 1;
  // if (e.target === $leftImg) {
  //   NewidealType[0].lank = 1;
  // } else {
  //   NewidealType[0].lank = 1;
  // }
  console.log(count);
  console.log(tournament)
  if(count < 8){
    renderImage(tournament,count);
    if(e.target.parentNode.matches('.left')){
      match8Index.push(2*count);
    }else{
      match8Index.push(2*count+1);
    }
  }
  if(count >=8 && count<12) {
    renderImage(tournament,count-8);
    if(e.target.parentNode.matches('.left')){
      match4Index.push(2*(count-8));
    }else{
      match4Index.push(2*(count-8)+1);
    }
  }
  if(count >=12 && count<14){
    renderImage(tournament,count-12);
    if(e.target.parentNode.matches('.left')){
      match2Index.push(2*(count-12));
    }else{
      match2Index.push(2*(count-12)+1);
    }
  }
  if(count === 14){
    renderImage(tournament,count-14);
    if(e.target.parentNode.matches('.left')){
      match1Index.push(2*(count - 14));
    }else{
      match1Index.push(2*(count-14)+1);
    }
  }
  if (count === 8) {
    $h3.textContent = '8강';
  } else if(count === 12) {
    $h3.textContent = '4강';
  } else if(count === 14){
    $h3.textContent = '결승'
  } else if(count === 15){
    $h3.textContent = ''
  }
  if(count===8){
    match8 = NewidealType.filter((_,i) => match8Index.includes(i))
    console.log(match8);
    tournament= matchImage(match8);
  };
  if(count===12){
    match4 = match8.filter((_,i) => match4Index.includes(i))
    console.log(match4);
    tournament=matchImage(match4);
  };
  if(count===14){match2 = match4.filter((_,i) => match2Index.includes(i));
    console.log(match2);
    tournament = matchImage(match2);
  }
  if(count===15){match1 = match2.filter((_,i) => match1Index.includes(i));
    console.log(match1);  
    tournament = matchImage(match1);
    e.target.classList.add('champion');
  }
}
if (count === 15) {
  renderImage(tournament, count -15);
}
// const matchImage = match => {
//   let res = match.map(item => item.path);
//   return res;
//   console.log(NewidealType)
// }
// const renderImage = (pathset, n) => {
//   $leftImg.setAttribute('src', pathset[2*n]);
//   $rightImg.setAttribute('src', pathset[2*n+1]);
// }