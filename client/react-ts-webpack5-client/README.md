# React项目搭建教程

```js
// 问题:
unable to locate '.../public/**/*' glob

// 解决方案：
// https://github.com/vuejs/vue-cli/issues/6281
This problem only occurs when the public is an empty folder? Why not remove your public folder directly ?
For SPA, this problem occurs If public folder only contains index.html or public folder is empty
```

# warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

如要关闭any类型的警告：

1. 在 .eslintrc.js文件中找到rules配置，添加如下代码
   `"@typescript-eslint/no-explicit-any": ["off"]`
2. 添加完成后，重新运行项目。



# typescript - 如何禁用@typescript-eslint/no-non-null-assertion 规则

![image-20211203161241865](https://gitee.com/ian_kevin126/picturebed/raw/master/windows/img/image-20211203161241865.png)

我要允许 `data!.id`
错误:

> warning Forbidden non-null assertion @typescript-eslint/no-non-null-assertion



当前配置:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
    eqeqeq: 1,
    'react/prop-types': 0,
    '@typescript-eslint/camelcase': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  globals: {
    React: 'writable'
  }
}
```

**最佳答案**

请加`'@typescript-eslint/no-non-null-assertion': 'off'`到您的配置文件，如下所示。

```js
module.exports = {
  ...
  rules: {
    ...
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  ...
}
```























































































