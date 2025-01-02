# Blog-App

![React Blog 목업](https://github.com/user-attachments/assets/2598e42b-6311-4909-a760-5f1657442c69)

## 프로젝트 개요
React와 Firebase를 활용한 블로그 웹 애플리케이션으로, 사용자가 글을 작성, 수정, 삭제(CRUD)할 수 있고, Firebase Auth를 통해 사용자 인증 및 권한 관리를 지원합니다. BEM 방법론으로 스타일링을 적용했으며, 다크모드와 같은 상태 관리를 Context API로 구현했습니다.

## 바로가기
[Blog-App](https://react-blog-app-af335.web.app/)

## 테스트 계정
| ID   | PW   |
|---------|---------|
| test1@test.com | password |


## 주요 기능
- **CRUD 기능**: 게시글 생성, 조회, 수정, 삭제 구현
- **사용자 인증 및 권한 관리**: Firebase Auth를 이용한 로그인 및 권한 관리
- **라우팅 및 페이지 구성**: React Router를 사용해 페이지 이동 및 구성
- **다크모드**: Context API를 사용한 테마 전환
- **댓글 기능**: 게시글에 대한 댓글 CRUD 지원

## 기술 스택
- **프론트엔드**: React (create-react-app), CSS (BEM 구조)
- **백엔드**: Firebase (Firestore, Auth)
- **배포**: Firebase Hosting
- **기타**: React Router, React Hooks (useEffect, useState, useContext, useCallback)

## 구현 내용
- **상태 관리**: Context API를 이용해 다크모드와 권한 관리 구현
- **페이지 구성**: 로그인, 메인, 글 목록, 글 상세, 글 수정, 카테고리, 사용자 프로필 페이지 구현
- **애니메이션**: CSS transition을 사용한 캐러셀 애니메이션
- **실시간 데이터 처리**: Firestore를 이용한 실시간 데이터 생성 및 업데이트

## 배포
Firebase CLI를 이용한 Firebase Hosting 배포

## 커밋 규칙
- **Feat**: 새로운 기능, 특징 추가
- **Fix**: 수정, 버그 수정
- **Docs**: 문서에 관련된 내용, 문서 수정
- **Comment**: 필요한 주석 추가 및 변경
- **Style**: 스타일링, 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
- **Refactor**: 코드 리팩토링
- **Test**: 테스트 코드 수정, 추가
- **Chore**: 빌드 업무 수정, 패키지 매니저 수정
- **Remove**: 파일을 삭제하는 작업
- **Rename**: 파일 또는 폴더명 변경

## 기타 학습 내용
- 폴더 구조 설정 및 프로젝트 세팅(CRA)
- React Router와 Firebase의 기본 개념 및 활용
