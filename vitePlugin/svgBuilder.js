const fs = require('fs');
const CryptoJS = require('crypto-js'); // 引入 crypto-js
const readFileSync = fs.readFileSync;
const readdirSync = fs.readdirSync;
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|(\n)/g
function findSvgFile(dir) {
    const svgRes = []
    const dirents = readdirSync(dir, {
        withFileTypes: true
    })
    for (const dirent of dirents) {
        if (dirent.isDirectory()) {
            svgRes.push(...findSvgFile(dir + dirent.name + '/'))
        } else {
            const svg = readFileSync(dir + dirent.name)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, ($1, $2) => {
                    let width = 0
                    let height = 0
                    let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
                        if (s2 === 'width') {
                            width = s3
                        } else if (s2 === 'height') {
                            height = s3
                        }
                        return ''
                    })
                    if (!hasViewBox.test($2)) {
                        content += `viewBox="0 0 ${width} ${height}"`
                    }
                    return `<symbol id="${dirent.name.replace('.svg', '')}" ${content}>`
                })
                .replace('</svg>', '</symbol>')
            svgRes.push(svg)
        }
    }
    return svgRes
}
module.exports.svgBuilder = (path) => {
    const sec = global["dycloud-secret"]   // 获取主项目node传过来的验证码
    const key = "aohaof"  // 安全码
    if (path === '') return
    const res = findSvgFile(path)
    const timestamp = Date.now()
    const secretCode = CryptoJS.SHA256(key).toString(CryptoJS.enc.Hex)  // 指纹哈希
    return {
        name: 'svg-transform',
        transformIndexHtml(html) {
            const keywordMetaTagRegex = /<meta\s+(?:name=["']keywords["']\s+content=["'](.*?)["']|content=["'](.*?)["']\s+name=["']keywords["'])\s*\/?>/i;
            // 这里是你的指纹索引关键部分 暴露给资源引擎的
            const newKeywords = `k8s多集群管理平台,dycloud,后台管理框架,vue后台管理框架,${timestamp},${secretCode}`;
            let newHtml = html;
            if(!compareSecWithSecretCode(sec, key)){  // 如果不符合匹配的安全规则 则把原来的指纹哈希和关键字挂回去
                if (keywordMetaTagRegex.test(html)) {
                    // 如果存在 keywords meta 标签，则把原来标签的content属性值替换为新的
                    newHtml = html.replace(
                        keywordMetaTagRegex,
                        (match, p1, p2) => {
                            const oldKeywords = p1 || p2;
                            return match.replace(oldKeywords, newKeywords);
                        }
                    );
                } else {
                    // 如果不存在 keywords meta 标签，添加一个新的
                    newHtml = html.replace(
                        '<head>',
                        `
        <head>
          <meta name="keywords" content="${newKeywords}">
      `
                    );
                }
            }
            return newHtml.replace(
                '<body>',
                `
      <body>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
          ${res.join('')}
        </svg>
    `
            );
        }
    }
}

function generateKey(secret) {
    // 反转字符串
    let transformedSec = secret.split('').reverse().join('');
    // 进行 SHA256 哈希计算
    transformedSec = CryptoJS.SHA256(transformedSec).toString(CryptoJS.enc.Hex);
    // 进行 Base64 编码
    transformedSec = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(transformedSec));
    return transformedSec;
}

function compareSecWithSecretCode(sec, key) {
    if (typeof sec !== 'string' || !sec) {
        console.error(`Invalid sec: ${sec}`);
        return false;
    }
    // 取下标6到10的字母
    let extractedSec = sec.substring(6, 11);

    console.log(`Extracted sec: ${extractedSec}`);
    console.log(`Key: ${key}`);

    // 比较提取的部分和key是否相同
    return extractedSec === key;
}
