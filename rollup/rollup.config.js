import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from 'rollup-plugin-terser'

const buildOptions = {
  // 多入口配置
  input: ['src/index.js', 'src/util.js'],
  output: [
    // 多产物配置
    {
      dir: 'dist/es',
      format: "es",
      // 加入 terser 插件，用来压缩代码
      plugins: [terser()]
    },
    {
      dir: 'dist/cjs',
      format: "cjs"
    }
  ],
  // 通过 plugins 参数添加插件
  plugins: [resolve(), commonjs()],
}

export default buildOptions
