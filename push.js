const { execSync } = require('child_process');
const path = require('path');

const git = path.join('D:', 'Git', 'cmd', 'git.exe');
const cwd = __dirname;

function run(cmd) {
  console.log(`> ${cmd}`);
  const result = execSync(cmd, { cwd, encoding: 'utf8', stdio: 'pipe' });
  console.log(result.trim());
  return result.trim();
}

try {
  run(`"${git}" add -A`);
  const status = run(`"${git}" status --short`);
  if (!status) console.log('(没有新变更)');

  run(`"${git}" commit -m "更新数学内容"`);
  run(`"${git}" push`);
  console.log('\n=== 推送成功！ ===');
} catch (e) {
  console.error('\n错误:', e.stderr || e.message);
}
