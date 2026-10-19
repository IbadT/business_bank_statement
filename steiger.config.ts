import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Не маркируем как ошибку слайсы, использующиеся на одной странице
    files: ['./src/features/**', './src/entities/**', './src/widgets/**'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
])
