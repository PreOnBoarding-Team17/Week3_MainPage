const NAVIMAGESRC = [
  'assets/Navigation/logo-black.png',
  'assets/Navigation/logo-white.png',
];

const ReadingBooksTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `실시간 방송 형태로 제공되는\n 신개념 책 읽기`;
  } else {
    return `실시간 방송 형태로\n 제공되는\n 신개념 책 읽기`;
  }
};

const ReadingBooksText = (isTablet: boolean) => {
  if (isTablet) {
    return `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.`;
  } else {
    return `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이\n 편하게 수업참여가 가능해요.`;
  }
};

const ReadingDiaryTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `매일 매일\n알아서 기록하는 독서 일기`;
  } else {
    return `매일 매일 알아서\n기록하는 독서 일기`;
  }
};

const ReadingDiaryText = (isTablet: boolean, isPc: boolean) => {
  if (isPc) {
    return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
  } else if (isTablet) {
    return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
  } else {
    return `오늘은 아이가 어떤 책을 읽었는지,\n어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고,\n공유도 가능해요.`;
  }
};

const BestSellerTitle = (isTablet: boolean) => {
  if (isTablet) {
    return `입학 전 1000권 읽기!\n땅콩스쿨로 도전해보세요.`;
  } else {
    return `입학 전 1000권 읽기!\n땅콩스쿨로\n도전해보세요.`;
  }
};

const BestSellerText = (isTablet: boolean) => {
  if (isTablet) {
    return `매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`;
  } else {
    return `매달 새로운 32권의\n어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`;
  }
};

const CardFirstText = (isPc: boolean, isTablet: boolean) => {
  if (isPc)
    return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
  else if (isTablet)
    return `휴대폰이나 태블릿으로 시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
  else
    return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
};

const CardSecondText = (isPc: boolean, isTablet: boolean) => {
  if (isPc)
    return `화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.`;
  else if (isTablet)
    return `화면에 그림도 그려보고, 읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향수업을 경험해보세요.`;
  else
    return `화면에 그림도 그려보고, 읽은 책으로\n선생님과 퀴즈도 풀어보는\n양방향 수업을 경험해보세요.`;
};

const CardThirdText = (isPc: boolean, isTablet: boolean) => {
  if (isPc) return `친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.`;
  else if (isTablet)
    return `친숙한 캐릭터와 목소리로 수업에 대한\n부담을 낮춰보세요.`;
  else return `친숙한 캐릭터와 목소리로\n 수업에 대한 부담을 낮춰보세요.`;
};

const LiveVideoTitle = (isPc: boolean) => {
  if (isPc) {
    return `랜선 라이브\n북클래스`;
  } else {
    return `랜선 라이브 북클래스`;
  }
};

const LiveVideoText = (isPc: boolean) => {
  if (isPc) {
    return `친구들과 함께\n그림 그리기, 퀴즈 풀기,\n선생님과 대화하며 경험해요!`;
  } else {
    return `친구들과 함께 그림 그리기, 퀴즈 풀기,\n선생님과 대화하며 경험해요!`;
  }
};

const AboutText = (isPc: boolean) => {
  if (isPc) {
    return `실시간(LIVE)으로, 아이들이 좋아하는, 캐릭터 선생님을 통해,\n 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.`;
  } else {
    return `실시간(LIVE)으로, 아이들이 좋아하는\n 캐릭터 선생님을 통해,\n 친구들과 함께 창의독서, 퀴즈 등을\n 재미있게 즐길 수 있는 온라인 서비스입니다.`;
  }
};

const CheckedBooksTitle = (isPc: boolean, isTablet: boolean) => {
  if (isPc) {
    return `교육 전문가들이\n선정한 도서`;
  } else if (isTablet) {
    return `교육 전문가들이 선정한 도서`;
  } else {
    return `교육 전문가들이\n선정한 도서`;
  }
};

const CheckedBooksText = (isPc: boolean, isTablet: boolean) => {
  if (isPc)
    return `호두랩스의 교육 전문가들이\n교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를\n직접 선정해요!`;
  else if (isTablet)
    return `호두랩스의 교육 전문가들이 교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를 직접 선정해요!`;
  else
    return `호두랩스의 교육 전문가들이 교과 수록,\n초등 필독 도서 등 아동 교육에 적합한 도서를\n직접 선정해요!`;
};

const CheckedBookContents = [
  {
    checked: '/assets/check-animation/first.gif',
    book: '/assets/book1.png',
  },
  {
    checked: '/assets/check-animation/second.gif',
    book: '/assets/book2.png',
  },
  {
    checked: '/assets/check-animation/third.gif',
    book: '/assets/book3.png',
  },
];

const MAIN_CONTENT_TEXT = [
  ['책 읽는 재미,'],
  ['땅콩스쿨이', '#fec442'],
  ['만들어줄게요!'],
];

const DONWLOAD_TITLE = '지금 다운로드 받으세요!';
const DOWNLOAD_BTN_TEXT = '앱 다운로드 하기';
const DOWNLOAD_CONTENT_TEXT_FUNC = (isPc: boolean) => [
  {
    text: '책을 보는\n새로운 방법',
    fontSize: '36px',
  },
  {
    text: isPc
      ? '지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!'
      : '지금 가입하시면\n매주 8권의 동화책을 보실 수 있어요!',
    fontSize: '13px',
    lineHeight: '1.8',
  },
  {
    text: '회원가입에 걸리는 시간 단 3초',
    fontSize: '13px',
    lineHeight: '1.8',
  },
];

const FOOTER_INFO_TITLE = '(주)호두랩스';

const FOOTER_INFO_CONTENT = [
  '대표 : 김민우 | 사업자등록번호 : 431-88-01287 ',
  '서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)',
  '제주특별시 서귀포시 중정로 86, 304',
  '통신판매업 신고번호 : 2019-서울강남-00301호',
];

const FOOTER_INFO_TAG = '© Hodoo Labs. ALL RIGHTS RESERVED';

const FOOTER_MENU_LIST = [
  ['고객센터', '채팅상담'],
  ['이용약관', '개인정보 처리방침', '환불정책'],
];

const FOOTER_IMAGE_SRC = [
  '/assets/Footer/instagram.png',
  '/assets/Footer/blog.png',
];

const REVIEW_SWIPER_TEXT = [
  [
    {
      name: 'dahyedahyunmom_amiejjerry',
      content: `밖에가서 놀고싶어도
“땅콩할 시간이야!”
라는 말에 군말없이 들어와 착석하는
마법같은 시간..
줄 줄 책을 읽고 생각 말하라고 하는게 아니라,
재미있게 대화하며 반응하며 읽고,
생각을 말하게 해준다.
월, 화, 수, 목 네 권의 책을 읽었던 것을
다양한 활동으로 키워드를 통해 확실하게
기억할 수 있도록 해주는 금요일 Fun Day의
다지기 활동이 엄마로서 제일 마음에 든다!`,
    },
    {
      name: 'lohasunnymom',
      content: `내 방에 괴물이 나타났다!
자립심을 길러줄 수 있는 책!
땅콩리딩 말미에 책의 키워드를 알려주니
넘 좋은듯해요. 아이와 이야기를 할 때
저도 포인트를 잘 잡아줄 수 있더라고요.
이 책이 말하고 싶어하는 것이 무엇인지
아이와 이야기해보고 우리가 해야할 것들에
대해서도 재잘재잘 나누어보았죠.
우리 아이들도 방은 있지만
아직 따로 자는건 무서워하는데, 이 책을 읽더니
“엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~`,
    },
    {
      name: 'lovely_yunji',
      content: `로즈는 저녁 8시!
매일 25분씩 친구들과 책을 읽어요.
무용 다녀와 졸린 날도 눈 비비며 얼마나
기다리는지 몰라요.
스스로도 나는 책은 그렇게 안좋다고 하던 아이가
콧노래 흥얼흥얼 가방 속에 내일 읽을
책을 넣고 간식,밥 먹으러 내려오며
책 꼭 쥐고 와선 보는 모습이 어찌나 예쁜지…
하루 25분? 모바일로 책을?
반신반의하며 시작했던 땅콩리딩!
저희집은 대박~ 입니다^^`,
    },
    {
      name: 'sunnylub83',
      content: `5시 50분만 되면.
땅콩스쿨 언제하냐고 묻는 소연이.
항상 진지하게 언니 책상에서 시작.
오늘은 콧구멍 큰 디노네?
디노랑 책읽고 질문에도 손들고 대답하고
싶어하는 소연이. 사실 소연이는 도연이보다 책과
친하지 않은 아이라 걱정을 많이 했는데.
이렇게 수업으로라도 매일매일 보게 해주니
너무나 좋다! 오늘의 키워드는 “자립심”
“엄마,나도 오늘 자립심 갖고 스스로 자볼게요.”
오늘 책도 잘 읽은듯 하구나~`,
    },
    {
      name: 'youngsetmom',
      content: `찐 행복한 얼굴^^
이토록 재미있는 책읽기 프로그램은 없었다!
금요일은 일주일동안 읽은
4권의 책을 게임을 하며
다시 한번 정리하는 시간~
춤도 추고 그림도 그리고
숨은 그림찾기에
주제 키워드도 알아가는 시간~
오늘부터 새로 등장한 친구 버디가
중간 중간 이름 불러주며 칭찬해주니
더 기분 업!업!`,
    },
  ],
  [
    {
      name: 'dahyedahyunmom_amiejjerry',
      content: `밖에가서 놀고싶어도 “땅콩할 시간이야!”
라는 말에 군말없이 들어와 착석하는 마법같은 시간..
줄 줄 책을 읽고 생각 말하라고 하는게 아니라,
재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.
월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를 통해 확실하게
기억할 수 있도록 해주는 금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!`,
    },
    {
      name: 'lohasunnymom',
      content: `내 방에 괴물이 나타났다! 자립심을 길러줄 수 있는 책!
땅콩리딩 말미에 책의 키워드를 알려주니 넘 좋은듯해요.
아이와 이야기를 할 때 저도 포인트를 잘 잡아줄 수 있더라고요.
이 책이 말하고 싶어하는 것이 무엇인지 아이와 이야기해보고
우리가 해야할 것들에 대해서도 재잘재잘 나누어보았죠.
우리 아이들도 방은 있지만 아직 따로 자는건 무서워하는데,
이 책을 읽더니 “엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~`,
    },
    {
      name: 'lovely_yunji',
      content: `로즈는 저녁 8시! 매일 25분씩 친구들과 책을 읽어요.
무용 다녀와 졸린 날도 눈 비비며 얼마나 기다리는지 몰라요.
스스로도 나는 책은 그렇게 안좋다고 하던 아이가 콧노래 흥얼흥얼 가방 속에
내일 읽을 책을 넣고 간식,밥 먹으러 내려오며 책 꼭 쥐고 와선 보는 모습이
어찌나 예쁜지… 하루 25분? 모바일로 책을?
반신반의하며 시작했던 땅콩리딩! 저희집은 대박~ 입니다^^`,
    },
    {
      name: 'sunnylub83',
      content: `5시 50분만 되면. 땅콩스쿨 언제하냐고 묻는 소연이. 항상 진지하게 언니 책상에서 시작.
오늘은 콧구멍 큰 디노네? 디노랑 책읽고 질문에도 손들고 대답하고 싶어하는 소연이.
사실 소연이는 도연이보다 책과 친하지 않은 아이라 걱정을 많이 했는데.
이렇게 수업으로라도 매일매일 보게 해주니 너무나 좋다! 오늘의 키워드는 “자립심”
“엄마,나도 오늘 자립심 갖고 스스로 자볼게요.”
오늘 책도 잘 읽은듯 하구나~`,
    },
    {
      name: 'youngsetmom',
      content: `찐 행복한 얼굴^^
이토록 재미있는 책읽기 프로그램은 없었다!
금요일은 일주일동안 읽은 4권의 책을 게임을 하며 다시 한번 정리하는 시간~
춤도 추고 그림도 그리고 숨은 그림찾기에 주제 키워드도 알아가는 시간~
오늘부터 새로 등장한 친구 버디가
중간 중간 이름 불러주며 칭찬해주니 더 기분 업!업!`,
    },
  ],
  [
    {
      name: 'dahyedahyunmom_amiejjerry',
      content: `밖에가서 놀고싶어도 “땅콩할 시간이야!” 라는 말에 군말없이 들어와 착석하는 마법같은 시간..
줄 줄 책을 읽고 생각 말하라고 하는게 아니라,
재미있게 대화하며 반응하며 읽고, 생각을 말하게 해준다.
월, 화, 수, 목 네 권의 책을 읽었던 것을 다양한 활동으로 키워드를 통해 확실하게 기억할 수 있도록
해주는 금요일 Fun Day의 다지기 활동이 엄마로서 제일 마음에 든다!`,
    },
    {
      name: 'lohasunnymom',
      content: `내 방에 괴물이 나타났다! 자립심을 길러줄 수 있는 책! 땅콩리딩 말미에 책의
키워드를 알려주니 넘 좋은듯해요. 아이와 이야기를 할 때 저도 포인트를 잘 잡아줄 수 있더라고요.
이 책이 말하고 싶어하는 것이 무엇인지 아이와 이야기해보고 우리가 해야할 것들에 대해서도
재잘재잘 나누어보았죠. 우리 아이들도 방은 있지만 아직 따로 자는건 무서워하는데,
이 책을 읽더니 “엄마, 오늘은 나도 혼자 자볼래요!” 하더라고요~`,
    },
    {
      name: 'lovely_yunji',
      content: `로즈는 저녁 8시! 매일 25분씩 친구들과 책을 읽어요.
무용 다녀와 졸린 날도 눈 비비며 얼마나 기다리는지 몰라요.
스스로도 나는 책은 그렇게 안좋다고 하던 아이가 콧노래 흥얼흥얼 가방 속에 내일 읽을 책을 넣고
간식,밥 먹으러 내려오며 책 꼭 쥐고 와선 보는 모습이 어찌나 예쁜지… 하루 25분? 모바일로 책을?
반신반의하며 시작했던 땅콩리딩! 저희집은 대박~ 입니다^^`,
    },
    {
      name: 'sunnylub83',
      content: `5시 50분만 되면. 땅콩스쿨 언제하냐고 묻는 소연이. 항상 진지하게 언니 책상에서 시작.
오늘은 콧구멍 큰 디노네? 디노랑 책읽고 질문에도 손들고 대답하고 싶어하는 소연이.
사실 소연이는 도연이보다 책과 친하지 않은 아이라 걱정을 많이 했는데.
이렇게 수업으로라도 매일매일 보게 해주니 너무나 좋다! 오늘의 키워드는 “자립심”
“엄마,나도 오늘 자립심 갖고 스스로 자볼게요.” 오늘 책도 잘 읽은듯 하구나~`,
    },
    {
      name: 'youngsetmom',
      content: `찐 행복한 얼굴^^
이토록 재미있는 책읽기 프로그램은 없었다!
금요일은 일주일동안 읽은 4권의 책을 게임을 하며 다시 한번 정리하는 시간~
춤도 추고 그림도 그리고 숨은 그림찾기에 주제 키워드도 알아가는 시간~
오늘부터 새로 등장한 친구 버디가 중간 중간 이름 불러주며 칭찬해주니 더 기분 업!업!`,
    },
  ],
];

const getReviewItems = (isPc: boolean, isTablet: boolean) => {
  if (isPc) return REVIEW_SWIPER_TEXT[2];
  else if (isTablet) return REVIEW_SWIPER_TEXT[1];
  else return REVIEW_SWIPER_TEXT[0];
};

export {
  NAVIMAGESRC,
  getReviewItems,
  ReadingBooksTitle,
  ReadingBooksText,
  ReadingDiaryTitle,
  ReadingDiaryText,
  BestSellerTitle,
  BestSellerText,
  CardFirstText,
  CardSecondText,
  CardThirdText,
  LiveVideoTitle,
  LiveVideoText,
  AboutText,
  CheckedBooksTitle,
  CheckedBooksText,
  CheckedBookContents,
  MAIN_CONTENT_TEXT,
  DONWLOAD_TITLE,
  DOWNLOAD_BTN_TEXT,
  DOWNLOAD_CONTENT_TEXT_FUNC,
  FOOTER_INFO_CONTENT,
  FOOTER_INFO_TITLE,
  FOOTER_INFO_TAG,
  FOOTER_MENU_LIST,
  FOOTER_IMAGE_SRC,
};
