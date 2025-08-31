import { useState, useEffect } from 'react';

export function useVeilVersion() {
  const [version, setVersion] = useState('0.1.13');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/veil-lang/veil/main/Cargo.toml')
      .then(response => response.text())
      .then(text => {
        const versionMatch = text.match(/version\s*=\s*"([^"]+)"/);
        if (versionMatch) {
          setVersion(versionMatch[1]);
        }
      })
      .catch(() => {
        setVersion('0.1.13');
      });
  }, []);

  return version;
}
