# ragemp-swc-starter
A simple and fast RAGE:MP starter that uses SWC to bundle and compile your project.

# Installation
1. `git clone https://github.com/voltration/ragemp-swc-starter.git` to install the repo
2. `cd ragemp-swc-starter` to move into the directory
3. `bun i (or npm install, pnpm i, etc.)` to install the dependencies.
4. `bun run build` to create the dist directory

Go to your RAGE:MP installation and find `server-files`, from there copy the files located inside, and place them in `dist` in this project.

[If you do not have the server-files directory, follow this guide.](https://wiki.rage.mp/index.php?title=Getting_Started_with_Server)

# Developing
* `bun run build` to build your project.
* `bun run dev` to watch over and automatically build when changes occur.


This project was created using `bun init` in bun v1.1.16. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
