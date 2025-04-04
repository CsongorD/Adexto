import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: compat.extends(
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
      "prettier"
    ),

    rules: {
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/media-has-caption": "warn",
      "@next/next/google-font-display": "warn",
      "@next/next/google-font-preconnect": "warn",
      "@next/next/inline-script-id": "warn",
      "@next/next/no-img-element": "warn",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-assign-module-variable": "warn",
      "@next/next/no-html-link-for-pages": "warn",
      "@next/next/no-async-client-component": "warn",
      "@next/next/no-before-interactive-script-outside-document": "warn",
      "@next/next/no-css-tags": "warn",
      "@next/next/no-document-import-in-page": "warn",
      "@next/next/no-duplicate-head": "warn",
      "@next/next/no-head-element": "warn",
      "@next/next/no-head-import-in-document": "warn",
      "@next/next/no-page-custom-font": "warn",
      "@next/next/no-script-component-in-head": "warn",
      "@next/next/no-styled-jsx-in-document": "warn",
      "@next/next/no-sync-scripts": "warn",
      "@next/next/no-title-in-document-head": "warn",
      "@next/next/no-typos": "warn",
      "@next/next/no-unwanted-polyfillio": "warn",
    },
  },
]);
