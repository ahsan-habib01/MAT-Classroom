const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./MAT-Client/src', (filePath) => {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.tsx') && !filePath.endsWith('.js') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // remove any " dark:SOMETHING" or "dark:SOMETHING "
  content = content.replace(/\s?dark:[^\s"']+/g, '');
  
  // replace specific colors
  content = content.replace(/blue-600/g, 'primary');
  content = content.replace(/blue-700/g, 'primary-hover');
  content = content.replace(/blue-100/g, 'primary-light');
  
  content = content.replace(/orange-500/g, 'secondary');
  content = content.replace(/orange-600/g, 'secondary-hover');
  content = content.replace(/orange-100/g, 'secondary-light');

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Update complete.');
