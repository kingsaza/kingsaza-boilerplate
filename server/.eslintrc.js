module.exports = {
  extends: ['../.eslintrc.js'],
  ignorePatterns: ['dist/**', '**/*.d.ts'], // 빌드된 파일과 타입 정의 파일 무시
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
};
