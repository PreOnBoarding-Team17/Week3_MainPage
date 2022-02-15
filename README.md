# Week3_Assignment\_\_Main Page 🏠

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 목록 📍](#2-구현-목록-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://17seoul-mainpage.netlify.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 3주차 5번째 기업 과제
- 주제 : 땅콩스쿨 메인 페이지 제작
- 기간 : 2022.02.14 ~ 2022.02.16

<br />

## 2. 구현 목록 📍

- [x] 현재 게시되어 있는 [땅콩스쿨 홈페이지](https://ddangkongschool.com/)의 메인 화면과 동일한 레이아웃 구현
- [x] 홈페이지와 동일한 반응형 디자인
- [x] [북클래스 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/blob/dev/components/LiveVideo/index.tsx)에서 태블릿 이미지 내부에 영상 자동 재생
- [x] [소개 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/blob/dev/components/About/index.tsx)에 애니메이션이 재생되는 로고 GIF 추가
- [x] [전문가 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/components/CheckedBooks)에 순서대로 체크 이미지가 나오는 애니메이션
- [x] [베스트셀러 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/components/BestSeller)에서 도서 이미지가 우에서 좌로 무한히 흐르는 형태의 애니메이션
- [x] [특징 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/components/Feature)에서 좌 -> 우로 책갈피가 순서대로 나오는 애니메이션
- [x] [리뷰 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/components/Review)에서 좌/우 버튼을 통한 전환, 무한 로테이션
- [x] [다운로드 페이지](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/components/Download)에서 버튼이 내려가고 말풍선이 나오는 애니메이션

<br />

## 3. 프로젝트 구조 🌲

```bash
/
├── components
│   ├── common
│   │    ├── Navigation
│   │    ├── Footer
│   │    ├── Title
│   │    ├── Text
│   │    └── DownloadButton
│   ├── Main
│   ├── About
│   ├── CheckedBooks
│   ├── ReadingBooks
│   ├── LiveVideo
│   ├── ReadingDiary
│   ├── Bestseller
│   ├── Feature
│   ├── Review
│   └── Download
├── cypress
├── pages
│   ├── _app.tsx
│   └── index.tsx
├── public
│   └── assets
├── styles
│   ├── GlobalStyles.tsx
│   └── Mixin.tsx
└── utils
    ├── constants
    ├── hooks
    └── interfaces
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                                                         |
| ------------------------------------------ | --------------------------------------------------------------------------------- |
| 🥇 공동 작업                               | 초기 환경 설정, cypress를 활용한 E2E 테스트                                       |
| [황상섭](https://github.com/sangseophwang) | 북클래스, 책 읽기, 독서 일기, 베스트셀러, 특징 컴포넌트 구현, 리팩토링, 문서 작성 |
| [정인권](https://github.com/developjik)    | 메인, 소개, 전문가, 다운로드, 푸터 컴포넌트, 애니메이션 효과 구현                 |
| [현다솜](https://github.com/som-syom)      | 네비게이션, 다운로드 버튼, 리뷰 컴포넌트 구현                                     |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

### [1] 컨벤션은 다음과 같이 정했습니다 ✨

| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 🚑️ chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/PreOnBoarding-Team17/Week3_MainPage/issues/1)서 확인해보실 수 있습니다!

<br/>

### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

[풀리퀘스트 링크](https://github.com/PreOnBoarding-Team17/Week3_MainPage/pulls?q=is%3Apr+is%3Aclosed)

<img width="1068" alt="스크린샷 2022-02-15 오후 11 03 10" src="https://user-images.githubusercontent.com/98322239/154154222-03aa2fbb-c7d3-497e-ae05-f33770902704.png">


<br/>

### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

[이슈 링크](https://github.com/PreOnBoarding-Team17/Week3_MainPage/issues)

<img width="1277" alt="스크린샷 2022-02-15 오후 11 02 01" src="https://user-images.githubusercontent.com/98322239/154154197-4970658d-06b3-445e-bad8-8f46e8b6ba9b.png">

<br/>

### [4] cypress로 팀원들과 E2E 테스트를 진행했습니다 🧪

[테스트코드 링크](https://github.com/PreOnBoarding-Team17/Week3_MainPage/tree/dev/cypress/integration)

![스크린샷 2022-02-16 오전 6 41 03](https://user-images.githubusercontent.com/98322239/154154389-6a2b8e60-49a8-437e-bf6e-7acf0dc10da8.png)


<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
git clone https://github.com/PreOnBoarding-Team17/Week3_MainPage.git
```

2. 프로젝트 패키지 설치

```plaintext
yarn install
```

3. 프로젝트 실행

```plaintext
yarn dev
```

4. cypress 실행

```plaintext
yarn cypress open
```
