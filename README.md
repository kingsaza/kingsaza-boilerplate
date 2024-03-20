## English Version

### Boilerplate: Yarn Workspace with Next.js & Nest.js

This boilerplate is designed as a monorepo using `yarn workspaces` to efficiently manage the frontend and backend applications within a single codebase. It includes a Next.js application for the frontend and a Nest.js application for the backend, showcasing a scalable architecture for full-stack development.

#### Project Structure

- `client`: A Next.js application serving as the frontend.
- `server`: A Nest.js application handling backend operations.

#### Key Features

- **Monorepo with Yarn Workspaces**: Simplifies dependency management across the frontend and backend, facilitating a unified development process.
- **Next.js Client**: Offers server-side rendering and static site generation for a robust frontend experience.
- **Nest.js Server**: Provides a scalable framework for building efficient, server-side applications.

#### Getting Started

To utilize this boilerplate:

```bash
git clone https://github.com/kingsaza/kingsaza-boilerplate/
cd kingsaza-boilerplate
yarn install
```

Running the Client:

```bash
cd client
yarn dev
```

Running the Server:

```bash
cd server
yarn start:dev
```

---

## Korean Version

### Boilerplate: Yarn Workspace를 활용한 Next.js & Nest.js 구조

yarn workspaces를 사용하여 단일 코드베이스 내에서 프론트엔드와 백엔드 애플리케이션을 효율적으로 관리하는 monorepo로 설계되었습니다. 프론트엔드에는 Next.js 애플리케이션을, 백엔드에는 Nest.js 애플리케이션을 포함하여, 풀스택 개발을 위한 확장 가능한 아키텍처를 제시합니다.

#### 프로젝트 구조

client: 프론트엔드로 사용되는 Next.js 애플리케이션입니다.
server: 백엔드 작업을 처리하는 Nest.js 애플리케이션입니다.

#### 주요 특징

Yarn Workspaces를 이용한 Monorepo: 프론트엔드와 백엔드의 의존성 관리를 단순화하여 통합된 개발 프로세스를 촉진합니다.
Next.js 클라이언트: 서버 사이드 렌더링 및 정적 사이트 생성을 제공하여 견고한 프론트엔드 경험을 제공합니다.
Nest.js 서버: 서버 측 애플리케이션을 효율적으로 구축하기 위한 확장 가능한 프레임워크를 제공합니다.

#### 시작하기

클론:

```bash
git clone https://github.com/kingsaza/kingsaza-boilerplate/
cd kingsaza-boilerplate
yarn install
```

클라이언트 실행:

```bash
cd client
yarn dev
```

서버 실행:

```bash
cd server
yarn start:dev
```
