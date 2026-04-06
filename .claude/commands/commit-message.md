---
description: Create a commint message by analyzing git diff
allowed-tools: Bash(git status:*), Bash(git diff --staged)
---

# context

- current git status: `git status`
- current git diff of staged: `git diff --staged`

# your task:

analyze the above staged git changes and create commit message. Use present tense and explain "why" the changes were made, not just "what" changes were made.

# commit types with emojis:
Only use the following emojis:
- ✨ `feat:` - New Feature
- 🐛 `fix:` - Bug fix
- ♻️ `refactor:` - Refactor code
- 📝 `docs:` - Documentation
- 🚀 `perf:` - Performance improvements
- 🧪 `test:` - Adding or correcting tests
- 🎨 `style:` - UI/UX, CSS, or formatting changes
- 🔧 `chore:` - Maintenance or config updates
- 🔒 `sec:` - Security fixes


# use the following format for making the commit message

```
<emoji> <type>: <concise_description>
<optional_body_explaining_why> 
```

# output

1. show summary of changes currently staged
2. propose commit message with approperiate emoji
3. as for confirmation before commiting

DO NOT auto-commit - wait for the approval, and commit only if users says so. 