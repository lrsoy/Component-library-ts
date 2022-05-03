export function parseEnv(env: Record<string, any>) {

  const envs: any = JSON.parse(JSON.stringify(env));
  Object.entries(envs).forEach(([key, value]) => {
    if (value === 'true' || envs[key] === 'false') { // 处理布尔值
      envs[key] = value == 'true' ? true : false;
    } else if (/^\d+$/.test(value as string)) { // 处理字符串的数值类型的值，将其转换成真正的数字
      envs[key] = Number(value as string);
    } else if (value === null) {
      envs[key] = null
    } else if (value === undefined) {
      envs[key] = undefined
    } else {
      envs[key] = value
    }
  })
  return envs;
}