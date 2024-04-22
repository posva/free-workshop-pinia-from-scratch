# Mastering Pinia Exercise Platform

## 💻 System Requirements

- Recent Node version. Recommended the latest LTS version
- Recent npm version. Recommended the version installed with LTS node
- pnpm v8 (**required** to install the dependencies in this project)
  - I recommend you to use `corepack` (comes with Node) with `corepack enable` and then, within this `code/` folder, run `corepack prepare pnpm@8.6.4 --activate`
- (Recommended) `ni`/`nr` from [@antfu/ni](https://github.com/antfu/ni) to easily add packages and run commands
- If you are using VSCode, make sure to **disable Vetur and install all recommended extensions** with
  `Shift + cmd + P` + `show recommended extensions`.

## 🎛️ Setup

Install the dependencies of the project using [`pnpm`](https://pnpm.io/):

```bash
pnpm i
```

## 🧑‍💻 Working on the Exercises

Start the project with `nr dev` or `pnpm run dev` and visit <http://localhost:5173>. Note 3 servers will be running in
parallel and require ports 5173, 7777, and 5555. **Make sure to not have any application running on those ports**

If you want, you can also run the 3 commands separetly:

- `pnpm run dev:test-server`: runs the tests
- `pnpm run dev:vite`: runs the exercise platform
- `pnpm run dev:api`: runs a fake API server

### 📂 Structure

- All exercises can be found within the `src/exercises` folders. You **won't need to change files outside of that folder**
- Most exercises run some automated tests to help you with the exercises, keep an eye on the console as some tests give
  you customized tips 😉

### ✅ Verifying your solution

If you have failing tests, you can visit [http://localhost:51205/\_\_vitest\_\_/](http://localhost:51205/__vitest__/) to
get more information about the failing tests.
