const idealType = [
    { id: 1, job: 'singer', content: '김동현' , path: '../남자아이돌/김동현.jpg', gender: 'm' ,lank: 0},
    { id: 2, job: 'singer', content: '김상균' , path: '../남자아이돌/김상균.jpg', gender: 'm' ,lank: 0},
    { id: 3, job: 'singer', content: '김지범' , path: '../남자아이돌/김지범.jpg', gender: 'm' ,lank: 0},
    { id: 4, job: 'singer', content: '김태영' , path: '../남자아이돌/김태영.jpg', gender: 'm' ,lank: 0},
    { id: 5, job: 'singer', content: '대준' , path: '../남자아이돌/대준.jpg', gender: 'm' ,lank: 0},
    { id: 6, job: 'singer', content: '성민' , path: '../남자아이돌/성민.jpg', gender: 'm' ,lank: 0},
    { id: 7, job: 'singer', content: '슬로우모션' , path: '../남자아이돌/슬로우모션.jpg', gender: 'm' ,lank: 0},
    { id: 8, job: 'singer', content: '웨비' , path: '../남자아이돌/웨비.jpg', gender: 'm' ,lank: 0},
    { id: 9, job: 'singer', content: '이태용' , path: '../남자아이돌/이태용.jpg', gender: 'm' ,lank: 0},
    { id: 10,job: 'singer',  content: '재범' , path: '../남자아이돌/재범.jpg', gender: 'm' ,lank: 0},
    { id: 11,job: 'singer',  content: '정국' , path: '../남자아이돌/정국.jpg', gender: 'm' ,lank: 0},
    { id: 12,job: 'singer',  content: '제이홉' , path: '../남자아이돌/제이홉.jpg', gender: 'm' ,lank: 0},
    { id: 13,job: 'singer',  content: '최수빈' , path: '../남자아이돌/최수빈.jpg', gender: 'm' ,lank: 0},
    { id: 14,job: 'singer',  content: '포맨' , path: '../남자아이돌/포맨.jpg', gender: 'm' ,lank: 0},
    { id: 15,job: 'singer',  content: '포틴' , path: '../남자아이돌/포틴.jpg', gender: 'm' ,lank: 0},
    { id: 16,job: 'singer',  content: 'boy' , path: '../남자아이돌/boy.jpg', gender: 'm' ,lank: 0},
    { id: 17,job: 'singer',  content: '김연아' , path: '../여자아이돌/김연아.jpg', gender: 'w' ,lank: 0},
    { id: 18,job: 'singer',  content: '김희선' , path: '../여자아이돌/김희선.jpg', gender: 'w' ,lank: 0},
    { id: 19,job: 'singer',  content: '레이디' , path: '../여자아이돌/레이디.jpg', gender: 'w' ,lank: 0},
    { id: 20,job: 'singer',  content: '리아' , path: '../여자아이돌/리아.jpg', gender: 'w' ,lank: 0},
    { id: 21,job: 'singer',  content: '무궁화소녀' , path: '../여자아이돌/무궁화소녀.jpg', gender: 'w' ,lank: 0},
    { id: 22,job: 'singer',  content: '산다라박' , path: '../여자아이돌/산다라박.jpg', gender: 'w' ,lank: 0},
    { id: 23,job: 'singer',  content: '설현' , path: '../여자아이돌/설현.jpg', gender: 'w' ,lank: 0},
    { id: 24,job: 'singer',  content: '슬기' , path: '../여자아이돌/슬기.jpg', gender: 'w' ,lank: 0},
    { id: 25,job: 'singer',  content: '신예은' , path: '../여자아이돌/신예은.jpg', gender: 'w' ,lank: 0},
    { id: 26,job: 'singer',  content: '윤하' , path: '../여자아이돌/윤하.jpg', gender: 'w' ,lank: 0},
    { id: 27,job: 'singer',  content: '이다혜' , path: '../여자아이돌/이다혜.jpg', gender: 'w' ,lank: 0},
    { id: 28,job: 'singer',  content: '장원영' , path: '../여자아이돌/장원영.jpg', gender: 'w' ,lank: 0},
    { id: 29,job: 'singer',  content: '제니' , path: '../여자아이돌/제니.jpg', gender: 'w' ,lank: 0},
    { id: 30,job: 'singer',  content: '존예진' , path: '../여자아이돌/존예진.jpg', gender: 'w' ,lank: 0},
    { id: 31,job: 'singer',  content: '펀치' , path: '../여자아이돌/펀치.jpg', gender: 'w' ,lank: 0},
    { id: 32,job: 'singer',  content: '하지원' , path: '../여자아이돌/하지원.jpg', gender: 'w' ,lank: 0},
    { id: 33, job: 'actor', content: '강동원', path: '../남자배우/강동원.jpg', gender: 'm', lank: 0 },
    { id: 34, job: 'actor', content: '강하늘', path: '../남자배우/강하늘.jpg', gender: 'm', lank: 0 },
    { id: 35, job: 'actor', content: '김수현', path: '../남자배우/김수현.jpeg', gender: 'm', lank: 0 },
    { id: 36, job: 'actor', content: '김우빈', path: '../남자배우/김우빈.jpg', gender: 'm', lank: 0 },
    { id: 37, job: 'actor', content: '류준열', path: '../남자배우/류준열.jpeg', gender: 'm', lank: 0 },
    { id: 38, job: 'actor', content: '박보검', path: '../남자배우/박보검.jpg', gender: 'm', lank: 0 },
    { id: 39, job: 'actor', content: '박해일', path: '../남자배우/박해일.jpg', gender: 'm', lank: 0 },
    { id: 40, job: 'actor', content: '소지섭', path: '../남자배우/소지섭.jpg', gender: 'm', lank: 0 },
    { id: 41, job: 'actor', content: '원빈', path: '../남자배우/원빈.jpg', gender: 'm', lank: 0 },
    { id: 42, job: 'actor', content: '유승호', path: '../남자배우/유승호.jpg', gender: 'm', lank: 0 },
    { id: 43, job: 'actor', content: '이민호', path: '../남자배우/이민호.jpg', gender: 'm', lank: 0 },
    { id: 44, job: 'actor', content: '이병헌', path: '../남자배우/이병헌.jpg', gender: 'm', lank: 0 },
    { id: 45, job: 'actor', content: '장기용', path: '../남자배우/장기용.jpg', gender: 'm', lank: 0 },
    { id: 46, job: 'actor', content: '정해인', path: '../남자배우/정해인.jpg', gender: 'm', lank: 0 },
    { id: 47, job: 'actor', content: '지창욱', path: '../남자배우/지창욱.jpg', gender: 'm', lank: 0 },
    { id: 48, job: 'actor', content: '하정우', path: '../남자배우/하정우.jpg', gender: 'm', lank: 0 },
    { id: 49, job: 'actor', content: '공효진', path: '../여자배우/공효진.jpeg', gender: 'w', lank: 0 },
    { id: 50, job: 'actor', content: '권나라', path: '../여자배우/권나라.jpeg', gender: 'w', lank: 0 },
    { id: 51, job: 'actor', content: '김고은', path: '../여자배우/김고은.jpeg', gender: 'w', lank: 0 },
    { id: 52, job: 'actor', content: '김다미', path: '../여자배우/김다미.jpg', gender: 'w', lank: 0 },
    { id: 53, job: 'actor', content: '김태리', path: '../여자배우/김태리.jpeg', gender: 'w', lank: 0 },
    { id: 54, job: 'actor', content: '문채원', path: '../여자배우/문채원.jpeg', gender: 'w', lank: 0 },
    { id: 55, job: 'actor', content: '박민영', path: '../여자배우/박민영.jpeg', gender: 'w', lank: 0 },
    { id: 56, job: 'actor', content: '박소담', path: '../여자배우/박소담.jpg', gender: 'w', lank: 0 },
    { id: 57, job: 'actor', content: '박신혜', path: '../여자배우/박신혜.jpeg', gender: 'w', lank: 0 },
    { id: 58, job: 'actor', content: '박은빈', path: '../여자배우/박은빈.jpeg', gender: 'w', lank: 0 },
    { id: 59, job: 'actor', content: '서예진', path: '../여자배우/서예진.jpg', gender: 'w', lank: 0 },
    { id: 60, job: 'actor', content: '서현진', path: '../여자배우/서현진.jpeg', gender: 'w', lank: 0 },
    { id: 61, job: 'actor', content: '소희', path: '../여자배우/소희.jpeg', gender: 'w', lank: 0 },
    { id: 62, job: 'actor', content: '손예찐', path: '../여자배우/손예찐.jpeg', gender: 'w', lank: 0 },
    { id: 63, job: 'actor', content: '송하윤', path: '../여자배우/송하윤.jpeg', gender: 'w', lank: 0 },
    { id: 64, job: 'actor', content: '정소민', path: '../여자배우/정소민.jpeg', gender: 'w', lank: 0 },
  ]