# 오늘의 Tutti <img src="https://github.com/user-attachments/assets/56eb34bd-9282-415b-b5c9-1f2e93f89ad3" align=left width=100>

🎵 당신의 완벽한 쇼핑을 위해 도와드릴게요!

![뚜띠_표지](https://github.com/user-attachments/assets/08c1cfef-3c2a-4098-8caf-21c9dc27a50e)


&nbsp;

## 🛍️ Service Overview
**사용자 패턴 분석을 활용한 통합형 쇼핑 플랫폼 구축과 맞춤형 상품 추천 서비스**
- 하이퍼 개인화 (Hyper-personalization)된 쇼핑 서비스
  - AI와 CRM을 활용한 사용자 개인을 위한 맞춤형 경험
- 사용자 감성 분석을 이용한 깨끗한 리뷰 제공
- 반응형 대응으로 디바이스 별 동일한 경험 제공
- 상품 별 상세 페이지의 검색 엔진 최적화

&nbsp;

## 🎵 Tutti's FE Developers

<div align="center">

| <img src="https://avatars.githubusercontent.com/u/31915107?v=4" alt="김금란" width="200" /> | <img src="https://avatars.githubusercontent.com/u/175666538?v=4" alt="이승건" width="200" /> | <img src="https://avatars.githubusercontent.com/u/102457140?v=4" alt="조병찬" width="200" /> |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                       **🎵 [김금란](https://github.com/goldegg127)**                        |                          **🎵 [이승건](http://github.com/vgotu99)**                          |                          **🎵 [조병찬](https://github.com/bbjbc)**                           |

</div>

&nbsp;

## 🚀 Project Setup Guide

1. git clone 후 [pnpm 설치](https://pnpm.io/ko/installation)   
2. pnpm을 사용하여 의존성 설치

   ```
   pnpm install
   ```
3. lefthook 설치 및 실행 (lint 및 prettier 동작)
   ```
   pnpm dlx lefthook install
   ``` 

&nbsp;

## 💻 Development Environment

 1. 필수 확인 사항

      ```
      Next.js: v15.2.3

      Node.js: v20.17.0 (Next.js 15는 Node.js 20.x 이상을 권장)

      pnpm: v10.3.0 (v8.15.0 이상을 권장)
      ```

  2. 주요 라이브러리 버전

      ```
      tanstack query: v5.69.0

      zustand: v5.0.3

      tailwind: v4.0.9
      ```

&nbsp;

## 🛠️ Tech Stack & Why

| **기술 스택**                                                                                                                | **선정 이유**                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)                         | SSR, 정적 사이트 생성, API 라우트 등을 제공하여 성능 최적화와 SEO 향상을 지원합니다. 페이지 라우팅, 이미지 최적화 등 개발자 경험(DX)을 크게 개선해줍니다.                                                                                                     |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)     | 정적 타입 검사를 통해 개발 단계에서 오류를 미리 발견하고 코드 품질을 향상시킵니다. 자동 완성과 타입 추론으로 개발 생산성이 향상되며 대규모 프로젝트의 유지보수성을 크게 개선합니다.                                                                           |
| ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) | 직관적인 유틸리티 클래스로 HTML 내에서 바로 스타일링이 가능해 빠른 UI 개발이 가능합니다. 커스터마이징이 용이하고 일관된 디자인 시스템을 유지할 수 있어 디자인-개발 협업 효율성을 높여줍니다.                                                                  |
| ![Tanstack Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) | 서버 상태 관리를 단순화하고 데이터 페칭, 캐싱, 동기화, 업데이트를 효율적으로 처리합니다. 백그라운드 업데이트, 에러 처리, 로딩 상태 관리 등 복잡한 비동기 로직을 선언적으로 작성할 수 있어 코드 가독성을 높여줍니다.                                           |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                           | 비동기 HTTP 요청을 간편하게 관리할 수 있으며, 응답 및 오류 처리를 효율적으로 수행할 수 있습니다. 특히 인터셉터 기능을 활용하면 요청 또는 응답을 가로채어 인증 토큰을 자동으로 추가하거나, 공통적인 에러 핸들링 로직을 적용할 수 있어 유지보수성이 향상됩니다. |
| ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)                          | 런타임에서 타입 검증을 수행할 수 있어, 안전한 데이터 구조를 유지하는 데 도움을 줍니다. 특히, 폼 검증 및 API 응답 데이터 검증에 유용합니다.                                                                                                                      |
| ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)              | 컴포넌트 기반 개발을 촉진하고 독립적인 환경에서 UI 컴포넌트를 개발할 수 있습니다. 시각적 테스트와 문서화를 동시에 지원하여 팀 협업과 디자인 시스템 구축에 효과적입니다.                                                                                       |
| ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)                      | 중복 패키지를 하드 링크로 관리하여 디스크 공간을 절약하고 설치 속도를 크게 향상시킵니다. 엄격한 패키지 관리로 의존성 문제를 줄여줍니다.                                                                                                                       |
| ![lefthook](https://img.shields.io/badge/lefthook-FF1E1E?style=for-the-badge)                                                | Git 훅을 통한 자동화된 코드 품질 검사로 일관된 코딩 표준을 유지합니다. 커밋 전 린팅, 포매팅, 테스트 실행을 자동화하여 코드 품질을 보장하고 CI/CD 파이프라인의 효율성을 높여줍니다.                                                                            |
| ![zustand](https://img.shields.io/badge/zustand-00B453?style=for-the-badge)                                                  | 간결한 API와 적은 보일러플레이트로 직관적이고 효율적인 상태 관리가 가능합니다. Redux와 같은 기존 상태 관리 라이브러리의 복잡성을 줄이면서 TypeScript와의 호환성이 뛰어나고 미들웨어 지원이 용이합니다.                                                        |

&nbsp;

## 📌 Tutti's Convention

### 커밋 컨벤션

```
feat : 새로운 기능 추가
fix : 수정
docs : 문서 수정
style : 코드 스타일 변경 (코드 로직에 영향을 주지 않는 변경)
refactor : 코드 리팩토링
perf : (Performance) 성능 개선
test : 테스트 작업 관련
chore : 패키지, 설정 파일, 환경 변수 등 기능/버그 수정 외의 잡일
build : 빌드나 배포에 필요한 설정/패키지 변경
ci : CI 설정 파일 및 스크립트 변경
revert : 이전 커밋 되돌리기
```

### 브랜치 전략

`main` branch

- 배포 가능한 안정적인 상태의 코드를 유지합니다.
- 일주일 마다 마일스톤이 종료되면 이 곳에서 배포가 이루어집니다.

`develop` branch

- 개발 중인 페이지 및 기능이 통합되는 브랜치입니다.
- 기능 개발이 완료된 코드가 머지되는 곳입니다.

`feature` branch

- 각 기능 개발을 위한 브랜치입니다.
- issue 하나 당-branch 하나, PR 하나
- 각 브랜치는 생성된 이슈의 번호(issue number)를 포함합니다.

### 네이밍 컨벤션

- **폴더명**
  - `kebab-case` → ex) `navigation-bar`, `server-actions`
  - 최상위 폴더 경로에서 `barrel export`
- **파일명**
  - 기본 파일: `camelCase` → ex) `calculate.ts`, `apiClient.ts`
  - 컴포넌트 파일: `PascalCase` → ex) `Button.tsx`, `ProductList.tsx`
  - 이미지 파일: `snake_case` → ex) `background_image.png`, `profile_avatar.svg`
- **변수 및 함수**

  - 변수명: `camelCase` → ex) `userName`, `itemCount`
  - 함수명: `camelCase` → ex) `fetchProducts()`, `handleSubmit()`
  - 화살표 함수

    - 컴포넌트: 하단에 export default

      ```tsx
      const ProductList = () => {
        return <div>상품 리스트</div>;
      };

      export default ProductList;
      ```

    - 여러 가지 함수: const 앞에 export
      ```tsx
      export const fetchItems = () => {
        /* ... */
      };
      export const updateUser = () => {
        /* ... */
      };
      ```

- **컴포넌트**
  - 컴포넌트명: `PascalCase` → ex) `Header`, `LoginForm`
  - 페이지 컴포넌트: `Page`접미사 사용 → ex) `HomePage`, `CartPage`

&nbsp;

## ⚙️ CI/CD 파이프라인

### 🎨 스토리북 CI/CD

- **자동화 프로세스**
  - 스토리북 파일(`.stories.ts`, `.stories.tsx`)의 변경을 감지합니다.
  - `develop` 브랜치로 PR이 생성되면 자동으로 트리거됩니다.
  - GitHub Actions를 통해 Chromatic에 스토리북을 배포합니다.
  - PR에 자동으로 배포된 스토리북 링크를 댓글로 추가합니다.
- **이점**
  - UI 컴포넌트에 대한 변경사항을 실시간으로 확인 가능합니다.
  - PR 리뷰 시 시각적으로 확인하고 피드백을 주고 받을 수 있습니다.
  - 팀원 간 디자인 시스템 공유에 용이합니다.

### 🚀 프로덕션 배포 CI/CD

- **자동화 프로세스**
  - `main` 브랜치로 코드가 머지될 때 트리거됩니다.
  - Github Actions 워크플로우가 실행되고 빌드 및 테스트 과정이 자동화됩니다.
  - Vercel을 통해 자동 배포됩니다.

&nbsp;

## 💁 역할 분담

🧑‍💻 **김금란** [@goldegg127](https://github.com/goldegg127)

- 팀간의 협의 및 소통
- 회의 진행 및 서기
- 디자인 토큰 협의 및 유틸 클래스 정의
- 클라이언트 컴포넌트와 서버 컴포넌트의 일관적인 데이터 관리를 위한 쿼리 옵션 정의
- 기타 공통 컴포넌트 제작
- 주문/결제 도메인 담당
  - 주문 프로세스 설계 및 기능 구현
  - 토스페이먼츠 결제 flow 적용
  - 주문 내역 및 상세 조회
  - 주문/결제, 주문 내역, 주문 상세 페이지 반응형 UI

🧑‍💻 **이승건** [@vgotu99](http://github.com/vgotu99)

- axios
  - interceptor를 활용한 JWT silence refresh 인증
  - next.js의 fetch api를 적용해 next.js의 캐싱 지원
- next.js
  - 서버 액션과 api route를 활용한 클라이언트 사이드 보안
- 회원 도메인 담당
  - JWT를 쿠키에 안전하게 저장
  - next-auth를 활용한 소셜로그인 구현
- 리뷰 도메인 담당
  - 서버/클라이언트 컴포넌트를 적절히 혼합해 성능과 인터랙션 지원
- FAQ 도메인 담당
  - 시간 기반 재검증 서버 캐싱을 활용한 정적 페이지 구현
  - 서버 컴포넌트를 유지하기 위해 쿼리 파라미터를 활용한 사용자 인터랙션 처리

🧑‍💻 **조병찬** [@bbjbc](http://github.com/bbjbc)

- 개발 환경 구축 (lefthook, 라이브러리 설치, 코드 품질 관리 도구)
- CI/CD 구축
  - UI 컴포넌트 시각화를 위한 github actions를 통한 chromatic에 자동 배포
  - main 브랜치로의 머지될 때 github actions 트리거
    - github actions를 통한 빌드 및 배포
    - vercel을 통한 자동 배포
- 다수의 UI atom component 설계
- Header, Footer 레이아웃
- 상품 도메인 담당
  - 메인 페이지
  - 카테고리 별 상품
  - 상품 상세 정보
  - 추천 상품 캐러셀 제작
  - 목록 가상화를 통한 최적화
- 장바구니 도메인 담당
  - 비회원/회원에 따른 장바구니에 담는 로직 구분

&nbsp;

## 📒 폴더 구조

```
📁src
    ├─📁apis
    ├─📁app
    │  ├─📂(auth)
    │  │  ├─reset-password
    │  │  ├─signin
    │  │  └─signup
    │  ├─📂(root)
    │  │  ├─cart
    │  │  ├─checkout
    │  │  │  ├─fail
    │  │  │  └─success
    │  │  ├─faqs
    │  │  ├─my
    │  │  │  ├─orders
    │  │  │  │  └─[orderId]
    │  │  │  └─review
    │  │  │      └─write
    │  │  │          └─[orderId]
    │  │  │              └─[productItemId]
    │  │  └─products
    │  │      └─[productId]
    │  ├─📂api
    │  │  ├─auth
    │  │  │  └─[...nextauth]
    │  │  ├─cart
    │  │  │  └─[cartItemId]
    │  │  ├─categories
    │  │  │  └─[categoryId]
    │  │  │      └─products
    │  │  ├─members
    │  │  │  └─mypage
    │  │  ├─orders
    │  │  │  └─checkout
    │  │  ├─payments
    │  │  │  └─confirm
    │  │  │      └─success
    │  │  ├─products
    │  │  │  ├─latest-list
    │  │  │  │  └─page
    │  │  │  ├─recommend
    │  │  │  └─[productId]
    │  │  └─refund
    │  │      └─request
    │  └─📂fonts
    ├─📁assets
    │  └─images
    ├─📁components
    │  ├─📂auth
    │  ├─📂cart
    │  ├─📂category
    │  ├─📂common
    │  │  ├─button
    │  │  └─header
    │  ├─📂faqs
    │  ├─📂icons
    │  ├─📂layout
    │  │  ├─footer
    │  │  └─header
    │  ├─📂main
    │  ├─📂mypage
    │  ├─📂orders-payments
    │  │  ├─OrderHistoryList
    │  │  └─OrderProductList
    │  ├─📂products
    │  │  ├─product-detail
    │  │  └─skeleton
    │  └─📂reviews
    │      ├─create-review
    │      └─product-review
    ├─📁constants
    ├─📁hooks
    │  ├─📂common
    │  └─📂queries
    ├─📁lib
    │  └─📂msw
    │      └─handlers
    ├─📁mocks
    ├─📁providers
    ├─📁queries
    ├─📁schemas
    │  └─📂auth
    ├─📁server-actions
    │  ├─📂auth
    │  ├─📂faq
    │  └─📂review
    ├─📁services
    ├─📁stores
    ├─📁stories
    │  ├─📂button
    │  ├─📂cart
    │  ├─📂orders
    │  └─product
    ├─📁styles
    │  ├─📂feature
    │  └─📂token
    │      ├─colors
    │      └─font
    ├─📁types
    └─📁utils
```
