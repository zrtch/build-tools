import * as esbuild from "esbuild";
import path, { dirname } from "path";

const port = 7002;

const config = {
  absWorkingDir: process.cwd(),
  entryPoints: ["./src/index.jsx"],
  bundle: true,
  format: "esm",
  splitting: true,
  sourcemap: true,
  ignoreAnnotations: true,
  metafile: true,
  outdir: "./dist",
};


const context = await esbuild.context(config);
context
  .serve({
    // 静态资源目录
    servedir: "./dist",
    port,
  },)
  .then(() => {
    console.log(`Development server is running on http://localhost:${port}`);
  })
  .catch((err) => {
    console.log("error ==>", err)
    process.exit(1);
  });;
