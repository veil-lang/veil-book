---
sidebar_position: 1
pagination_prev: null
---


# Installation

Get started with Veil in a few simple steps.

**Windows (PowerShell):**
```powershell
iex (iwr -useb https://raw.githubusercontent.com/veil-lang/veil/main/scripts/install.ps1).Content
```

**macOS/Linux:**
```bash
curl -sSf https://raw.githubusercontent.com/veil-lang/veil/main/scripts/install.sh | bash
```

Or build from source:
```shell
git clone https://github.com/veil-lang/veil.git
cd veil
cargo build --release
```

Add Veil to your PATH if needed:

**Windows (PowerShell):**
```powershell
$env:PATH += ";$PWD\target\release"
```
**macOS/Linux:**
```shell
export PATH="$PWD/target/release:$PATH"
```

## 3. Hello World

Create a file called `hello.ve`:
```veil
fn main() {
    println("Hello, World!");
}
```

Run it:
```shell
ve hello.ve
```

You should see:
```
Hello, World!
```

## 4. Next Steps

- Try editing `hello.ve` and running it again
- Explore the [First Program guide](first-program)
- Learn the [Language Basics](language-basics)
- Join the community for help and ideas

---

## Troubleshooting

**ve: command not found**
- Check your PATH
- Restart your terminal
- On Windows, try restarting your computer

**Still need help?**
- [GitHub Issues](https://github.com/veil-lang/veil/issues)
- [Discord](https://dsc.gg/velang)
