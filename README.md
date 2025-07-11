# Sh4re!

**정보 수업을 위한 똑똑한 과제 관리 플랫폼, 'Sh4re!'**

---

## 프로젝트 구조

### 1. 패키지별 의존성 설치

각 패키지에서 아래 명령어를 실행하세요.

```bash
cd packages/ui
pnpm install
```

```bash
cd packages/app
pnpm install
```

### 2. 서버 실행

root에서:

```bash
pnpm run dev
```

### 3. Storybook 실행

UI 패키지에서:

```bash
pnpm run storybook
```

---

## 커밋 컨벤션

아래와 같은 커밋 타입을 사용합니다.

| 타입     | 설명                                                    |
| -------- | ------------------------------------------------------- |
| feat     | 새로운 기능 추가                                        |
| fix      | 버그 수정                                               |
| docs     | 문서 수정                                               |
| style    | 코드 포맷팅, 세미콜론 등 비즈니스 로직에 영향 없는 변경 |
| refactor | 코드 리팩토링                                           |
| chore    | 빌드, 설정, 패키지 등 기타 변경                         |
