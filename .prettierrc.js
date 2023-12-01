module.exports = {
  // 一行最多 160 字符
  printWidth: 160,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: true,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，看情况加括号
  arrowParens: 'avoid',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf'
  // parser: 'typescript'
}

// module.exports = {
//     printWidth: 100, //单行长度
//     tabWidth: 2, //缩进长度
//     useTabs: false, //使用空格代替tab缩进
//     semi: true, //句末使用分号
//     singleQuote: true, //使用单引号
//     quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
//     jsxSingleQuote: true, // jsx中使用单引号
//     trailingComma: 'all', //多行时尽可能打印尾随逗号
//     bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
//     jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
//     arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
//     requirePragma: false, //无需顶部注释即可格式化
//     insertPragma: false, //在已被preitter格式化的文件顶部加上标注
//     proseWrap: 'preserve', //不知道怎么翻译
//     htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
//     vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
//     endOfLine: 'lf', //结束行形式
//     embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
// };
