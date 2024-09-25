# React Blog

- Feat : 새로운 기능, 특징 추가
- Fix : 수정, 버그 수정
- Docs : 문서에 관련된 내용, 문서 수정
- Comment: 필요한 주석 추가 및 변경
- Style : 스타일링, 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- Refactor : 리팩토링
- Test : 테스트 코드 수정, 누락된 테스트를 추가할 때, 리팩토링 테스트 추가
- Chore: 빌드 업무 수정, 패키지 매니저 수정
- Remove: 파일을 삭제하는 작업만 수행한 경우
- Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

배포 링크 : https://react-blog-app-af335.web.app/

추가해야 되는 내용 : 기술 스택, 구현 내용 등

이건 수정 필요

<br />

# 프로젝트 설명

## 주요 기능

- CRUD 기능 구현
- 사용자 인증 및 권한 관리
- 라우팅과 페이지 구성

## 앱 구조

- (create-react-app) SPA

## 상태관리

- Context API
- 권한관리
- 테마관리(다크모드 기능)

## 애니메이션 & 스타일링

- CSS 사용 (BEM 구조)
- 캐러셀 transition

## 배포

- Firebase

## 컴포넌트

- 헤더, 푸터, 리스트, 폼, 캐러셀

## API

- firebase의 firestore를 이용한 실시간 데이터 생성
- firebase auth를 이용한 사용자 인증 개념

## 사용 스택

- React
- Firebase(로그인, 보안, 통신)
- CSS
- Vercel

## 기타 학습 개념

- 폴더 구조
- CRA 이용 프로젝트 세팅
- React hooks(useEffect, useState, useContext, useCallback)
- React-router-dom 라우터

<br />

# 구현 기능

## 공통 페이지

1.  로그인 페이지

- Firebase Auth 사용자 인증 기본 로그인

2. 메인페이지

- 최신 글 목록, 특징 콘텐츠 보여주기

3. 글 목록 페이지

- 블로그에 작성된 모든 글의 목록 보여주기
- 해당 글 선택시 상세페이지 이동

4. 글 상세 페이지

- 글 제목, 내용, 작성자, 작성일 등 표시

5. 글 수정 페이지(CRUD)

6. 카테고리 메뉴

7. 사용자 프로필 페이지(Velog,Medium st)

## 그 외 기능

1. 다크모드
2. 내가 쓴 글
3. 댓글 CRUD
