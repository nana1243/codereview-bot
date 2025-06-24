# github-action-test
github codereview action bot!
# 🤖 Code Review Bot with Gemini 1.5 Flash

이 프로젝트는 Google의 Gemini 1.5 Flash 모델을 활용하여 Pull Request 발생 시 자동으로 코드 변경 사항을 분석하고 리뷰 코멘트를 생성해주는 GitHub Actions 기반 코드 리뷰봇입니다.

## 🛠️ 주요 기능

- Pull Request가 생성되거나 변경되었을 때(`opened`, `reopened`, `synchronize`), 코드 변경사항을 자동 분석
- Google Generative AI(Gemini 1.5 Flash)를 사용한 AI 기반 코드 리뷰 자동 생성
- GitHub PR에 인라인 리뷰 코멘트로 결과 자동 등록

---

## ⚙️ 구성 요소

### 📂 Workflow: `.github/workflows/code-review.yml`

- 트리거:
    - `pull_request` 이벤트(`opened`, `reopened`, `synchronize`)
    - 수동 실행(`workflow_dispatch`)
- 주요 단계:
    1. Repository Checkout
    2. Node 환경 세팅
    3. Google Generative AI 설치 (`@google/generative-ai`)
    4. `git diff` 를 통해 변경 사항 추출
    5. Gemini 1.5 Flash를 통해 리뷰 생성
    6. PR에 자동 리뷰 코멘트 추가

---

## 🔑 Secrets 설정

해당 워크플로우를 정상 작동시키기 위해 다음 두 가지 GitHub Secrets가 필요합니다:

| Secret Name         | 설명                                  |
|---------------------|----------------------------------------|
| `GEMINI_API_KEY`    | Google Generative AI API 키             |
| `GH_TOKEN`          | PR 코멘트를 작성할 GitHub Token (기본값: `secrets.GITHUB_TOKEN`) |

---

## ✅ 설치 및 사용 방법

1. `@google/generative-ai`를 사용하기 위한 Google Cloud API 키 발급  
   → [Google Generative AI 공식 페이지](https://makersuite.google.com/app)에서 발급 가능

2. `.github/workflows/code-review.yml` 파일을 추가

3. 위 `Secrets` 항목에 키 추가

4. PR을 열거나 변경하면 자동으로 코드 리뷰 수행됨

---

## 💬 결과 예시 (출력 포맷)

```json
[
  {
    "path": "src/utils/math.ts",
    "line": 42,
    "text": "Consider simplifying this logic or breaking it into smaller functions for better readability.",
    "side": "RIGHT"
  }
]
