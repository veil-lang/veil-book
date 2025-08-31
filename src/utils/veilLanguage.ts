import type { PrismTheme } from 'prism-react-renderer';

export function addVeilLanguage() {
  if (typeof window !== 'undefined' && window.Prism) {
    window.Prism.languages.veil = window.Prism.languages.extend('rust', {
      'keyword': /\b(?:fn|let|mut|if|else|while|for|loop|break|continue|return|match|pub|struct|enum|impl|trait|type|use|mod|const|static|unsafe|extern|crate|self|super|as|where|move|ref|dyn|async|await|yield|try|catch|throw|finally|with|in|is|not|and|or|class|interface|abstract|virtual|override|private|protected|internal|public|readonly|volatile|transient|synchronized|native|strictfp|final|extends|implements|throws|import|package|namespace|using|var|val|def|case|object|sealed|implicit|explicit|override|virtual|abstract|static|final|native|synchronized|volatile|transient|strictfp|throws|assert|instanceof|typeof|sizeof|alignof|offsetof|decltype|typeid|const_cast|static_cast|dynamic_cast|reinterpret_cast|new|delete|this|null|true|false|undefined|void|auto|register|inline|extern|mutable|template|typename|class|struct|union|enum|namespace|typedef|using|friend|operator|public|private|protected|virtual|static|const|volatile|mutable|explicit|inline|constexpr|noexcept|thread_local|decltype|nullptr|override|final|default|delete|export|module|import|concept|requires|co_await|co_yield|co_return|char8_t|char16_t|char32_t|wchar_t|signed|unsigned|short|long|int|float|double|bool|char|void|size_t|ptrdiff_t|intptr_t|uintptr_t|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|i8|i16|i32|i64|u8|u16|u32|u64|f32|f64|isize|usize|str)\b/,
      'function': /\b[a-z_][a-zA-Z0-9_]*(?=\s*\()/,
      'macro': {
        pattern: /\b[a-z_][a-zA-Z0-9_]*!/,
        alias: 'property'
      },
      'string': {
        pattern: /"(?:[^"\\]|\\.)*"/,
        greedy: true
      },
      'char': {
        pattern: /'(?:[^'\\]|\\.)'/,
        greedy: true
      },
      'number': /\b(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,
      'boolean': /\b(?:true|false)\b/,
      'punctuation': /[{}[\]();,.:]/,
      'operator': /[+\-*/%=!<>&|^~?]/,
      'comment': {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)|(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    });
  }
}
