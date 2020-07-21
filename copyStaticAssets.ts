import * as shell from "shelljs";

// remove files before copying
shell.rm("-rf", ["dist/public/", "dist/package.json", "dist/package-lock.json"]);

// package.json
shell.cp(["package.json", "package-lock.json"], "dist/");
