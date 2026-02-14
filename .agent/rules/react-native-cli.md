---
trigger: always_on
---

# React Native CLI 개발 가이드

- 모든 응답과 코드는 **React Native CLI** 환경을 기준으로 작성 (Expo 아님)
- TypeScript + Functional Component 기본 사용
- 코드 예시는 **TypeScript**로 작성하고 주석은 **한글**로 작성

## 핵심 원칙

- Expo가 아닌 순수 React Native CLI 방식 사용
- 네이티브 모듈 직접 연동 가능 (android/, ios/ 폴더 직접 수정)
- StyleSheet.create() 사용하여 스타일 작성
- React Navigation 사용 (네비게이션)
- 네이티브 설정 변경 시 항상 재빌드 필요

## 네이티브 모듈 연동

- iOS: `cd ios && pod install` 필수 실행
- Android: Gradle 동기화 확인
- 권한 설정: AndroidManifest.xml, Info.plist 수정
- Autolinking 자동 활용

## 빌드 오류 해결

- iOS 오류: Xcode에서 Clean Build Folder 후 재빌드
- Android 오류: `./gradlew clean` 실행
- Metro 캐시 문제: `npx react-native start --reset-cache`

## 성능 최적화

- React.memo, useMemo, useCallback 적극 활용
- FlatList 사용 시 getItemLayout, keyExtractor 최적화
- Hermes 엔진 활성화 (Android 성능 향상)

## 코드 작성 규칙

- 컴포넌트는 재사용 가능하게 설계
- Props에 명확한 TypeScript 타입 정의
- 환경변수는 react-native-config 사용