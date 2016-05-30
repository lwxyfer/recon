# recon

one click to config react development environment


主要在于配置 webpack ，各种特性

## what we get

### babel & webpack：

```
npm i webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
```

config babel presets:
```
// .babelrc
{
    "presets": [
        "es2015",
        "react"
    ]
}
```

#### code spliting

### react:
```
npm i react react-dom react-router --save
```

### Lingting(语法检查):

use airbnb style guides

two tools to use:

- ESLint ：

http://eslint.org/  
https://github.com/babel/babel-eslint
```
npm install --save-dev eslint babel-eslint

// config .eslintrc.js
{
   "parser": "babel-eslint",
    "rules": {
      ...
    }
  }
```
just can be used in command line.

- AtomLinter :  atom plugin. I prefer this to automate linting.

### JSX support

atom & sublime both have plugin.

- atom:https://atom.io/packages/language-babel
- sublime:https://github.com/babel/babel-sublime




## todo

确定开发环境

Unix

$ BABEL_ENV=production [COMMAND]
$ NODE_ENV=production [COMMAND]
Windows

$ SET BABEL_ENV=production
$ [COMMAND]


## reference

[babel-handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md#toc-configuring-babel)
