export function formatSearch(_se: string) {
  let se = decodeURIComponent(_se);
  se = se.substr(1); // 从起始索引号提取字符串中指定数目的字符
  const arr = se.split('&'); // 把字符串分割为字符串数组
  const obj: Record<string, string> = {};
  let tempArray = [];
  arr.forEach((v, i) => {
    // 数组遍历
    console.log(v);
    console.log(i);
    tempArray = v.split('=');
    if (typeof obj[tempArray[0]] === 'undefined') {
      obj[tempArray[0]] = tempArray[1];
    }
  });
  return obj;
}
