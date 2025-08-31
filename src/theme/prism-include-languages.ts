import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';
import type {Optional} from 'utility-types';

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism as {additionalLanguages: string[]};

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      require('prismjs/components/prism-markup-templating.js');
    }
    require(`prismjs/components/prism-${lang}`);
  });

  PrismObject.languages.powershell.function = /\b[a-zA-Z][\w-]*(?=\s*\()|ve\b/;
  PrismObject.languages.powershell.keyword = /\b(?:begin|break|catch|class|continue|data|define|do|dynamicparam|else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in|param|process|return|switch|throw|trap|try|until|using|var|while|workflow|ve)\b/i;

  PrismObject.languages.shell = PrismObject.languages.bash;
  PrismObject.languages.cmd = PrismObject.languages.powershell;

  PrismObject.languages.veil = {
    'keyword': /\b(?:fn|let|if|else|while|for|loop|break|continue|return|match|pub|struct|enum|impl|trait|type|use|mod|const|static|export|import|foreign|new|as|rawptr|size_t)\b/,
    'function': /\b[a-z_][a-zA-Z0-9_]*(?=\s*\()/,
    'builtin': /\b(?:println|print|panic)\b/,
    'type': /\b(?:i32|i64|u32|u64|f32|f64|bool|string|void)\b/,
    'string': {
      pattern: /"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/,
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
  };

  delete (globalThis as Optional<typeof globalThis, 'Prism'>).Prism;
  if (typeof PrismBefore !== 'undefined') {
    globalThis.Prism = PrismBefore;
  }
}
