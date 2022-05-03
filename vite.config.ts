import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import { ConfigEnv } from 'vite'
import { parseEnv } from './vite/utils'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     /** alias 配置可以是对象，也可以是数组,数组的形式是下面的方式 
//      *  alias 对象的方式配置 { '@', path.resolve(__dirname, 'src')}
//      */
//     alias: alias
//   }
// })


export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode);

  const isBuild = command == 'build';
  const root = process.cwd(); // 获取文件路径，配置文件所在的路径 ‘ .env ’
  const env = parseEnv(loadEnv(mode, root)); // 获取配置项 ‘ .env ’ 文件的内容  
  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}