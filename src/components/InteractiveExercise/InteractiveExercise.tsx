import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import styles from './InteractiveExercise.module.css';

interface TestCase {
  input?: string[];
  expectedOutput: string[];
  description: string;
}

interface InteractiveExerciseProps {
  title: string;
  description: string;
  startingCode: string;
  testCases: TestCase[];
  hints?: string[];
}

export default function InteractiveExercise({
  title,
  description,
  startingCode,
  testCases,
  hints = []
}: InteractiveExerciseProps) {
  const [userCode, setUserCode] = useState(startingCode);
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([]);
  const [showResults, setShowResults] = useState(false);  const [isDark, setIsDark] = useState(false);
  const [editorInstance, setEditorInstance] = useState<any>(null);
  const [monacoInstance, setMonacoInstance] = useState<any>(null);

  const detectTheme = () => {
    if (typeof document === 'undefined') return false;
    
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme === 'dark') return true;
    if (dataTheme === 'light') return false;
    
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  const handleEditorMount = (editor: any, monaco: any) => {
    setEditorInstance(editor);
    setMonacoInstance(monaco);

    monaco.languages.register({ id: 'veil' });

    monaco.languages.setMonarchTokensProvider('veil', {
      tokenizer: {
        root: [
          [/\b(fn|let|return|if|else|while|for|import|export|struct|enum|impl|trait|pub|const|static|mut)\b/, 'keyword'],
          [/\b(main|println|read_line|print|format|panic|assert|dbg)\b/, 'function'],
          [/"([^"\\]*(\\.[^"\\]*)*)"|`([^`\\]*(\\.[^`\\]*)*)`/, 'string'],
          [/\b(\d+\.?\d*|0x[0-9a-fA-F]+|0b[01]+)\b/, 'number'],
          [/\b(true|false|null|undefined)\b/, 'boolean'],
          [/\/\/.*$/, 'comment'],
          [/[{}()\[\];,.]/, 'delimiter'],
          [/[=+\-*/<>!&|^%]/, 'operator']
        ]
      }
    });

    monaco.languages.setLanguageConfiguration('veil', {
      comments: {
        lineComment: '//'
      },
      brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
      ],
      autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '`', close: '`' }
      ],
      surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '`', close: '`' }
      ]
    });

    monaco.editor.defineTheme('veil-theme', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '0969da', fontStyle: 'bold' },
        { token: 'function', foreground: '8250df', fontStyle: 'bold' },
        { token: 'string', foreground: '0a3069' },
        { token: 'number', foreground: '0550ae' },
        { token: 'boolean', foreground: '0969da' },
        { token: 'comment', foreground: '6e7781', fontStyle: 'italic' },
        { token: 'operator', foreground: '24292f' },
        { token: 'delimiter', foreground: '24292f' }
      ],
      colors: {}
    });

    monaco.editor.defineTheme('veil-theme-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: '79c0ff', fontStyle: 'bold' },
        { token: 'function', foreground: 'd2a8ff', fontStyle: 'bold' },
        { token: 'string', foreground: 'a5d6ff' },
        { token: 'number', foreground: '79c0ff' },
        { token: 'boolean', foreground: '79c0ff' },
        { token: 'comment', foreground: '8b949e', fontStyle: 'italic' },
        { token: 'operator', foreground: 'f0f6fc' },
        { token: 'delimiter', foreground: 'f0f6fc' }
      ],
      colors: {}
    });

    const currentIsDark = detectTheme();
    setIsDark(currentIsDark);
    monaco.editor.setTheme(currentIsDark ? 'veil-theme-dark' : 'veil-theme');
  };

  useEffect(() => {
    const currentIsDark = detectTheme();
    setIsDark(currentIsDark);
    
    if (monacoInstance) {
      monacoInstance.editor.setTheme(currentIsDark ? 'veil-theme-dark' : 'veil-theme');
    }
  }, [monacoInstance]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newIsDark = detectTheme();
          setIsDark(newIsDark);
          
          if (monacoInstance) {
            monacoInstance.editor.setTheme(newIsDark ? 'veil-theme-dark' : 'veil-theme');
          }
        }
      });
    });

    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }    return () => observer.disconnect();
  }, [monacoInstance]);

  const checkCode = () => {
    const results = testCases.map(testCase => {
      if (userCode.includes('println("Hello, World!")') && testCase.expectedOutput.includes('Hello, World!')) {
        return { passed: true, message: `✅ ${testCase.description}` };
      }

      if (userCode.includes('fn main()') && testCase.description.includes('main function')) {
        return { passed: true, message: `✅ ${testCase.description}` };
      }

      return { passed: false, message: `❌ ${testCase.description}` };
    });

    setTestResults(results);
    setShowResults(true);
  };

  const getNextHint = () => {
    if (currentHint < hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
    setShowHints(true);
  };

  const allTestsPassed = testResults.length > 0 && testResults.every(r => r.passed);

  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.exerciseHeader}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.codeEditor}>
        <label>Your Code:</label>
        <div className={styles.editorWrapper}>
          <Editor
            height="300px"
            language="veil"
            value={userCode}
            onChange={(value) => setUserCode(value || '')}
            onMount={handleEditorMount}
            theme={isDark ? 'veil-theme-dark' : 'veil-theme'}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 15,
              fontFamily: 'JetBrains Mono, Consolas, Monaco, Courier New, monospace',
              lineHeight: 24,
              tabSize: 2,
              insertSpaces: true,
              automaticLayout: true,
              wordWrap: 'on',
              contextmenu: false,
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto'
              }
            }}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={checkCode} className={styles.checkButton}>
          Check Solution
        </button>
        {hints.length > 0 && (
          <button onClick={getNextHint} className={styles.hintButton}>
            Need a Hint? ({currentHint + 1}/{hints.length})
          </button>
        )}
      </div>

      {showHints && hints[currentHint] && (
        <div className={styles.hint}>
          <strong>💡 Hint:</strong> {hints[currentHint]}
        </div>
      )}

      {showResults && (
        <div className={styles.results}>
          <h4>Test Results:</h4>
          {testResults.map((result, index) => (
            <div key={index} className={result.passed ? styles.testPassed : styles.testFailed}>
              {result.message}
            </div>
          ))}

          {allTestsPassed && (
            <div className={styles.success}>
              🎉 Congratulations! All tests passed! You completed this exercise.
            </div>
          )}
        </div>
      )}

      <div className={styles.expectedOutput}>
        <h4>Expected Output:</h4>
        <CodeBlock language="text">
          {testCases.map(tc => tc.expectedOutput.join('\n')).join('\n')}
        </CodeBlock>
      </div>
    </div>
  );
}
