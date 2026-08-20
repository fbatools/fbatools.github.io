const fs = require('fs');
const path = require('path');
const dir = 'src/content/blog';

fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.md')) return;
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    let lines = content.split('\n');
    
    let newLines = [];
    let fmCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let trimmed = line.trim();
        
        if (trimmed === '---') {
            fmCount++;
            newLines.push(line);
            continue;
        }
        
        if (fmCount < 2) {
            newLines.push(line);
            continue;
        }
        
        // We are outside frontmatter
        let needsBlankLine = false;
        
        // Headings
        if (trimmed.startsWith('#')) needsBlankLine = true;
        // FAQ Questions
        if (trimmed.startsWith('**Q:') || trimmed.startsWith('Q:') || trimmed.startsWith('**Question')) needsBlankLine = true;
        // FAQ Answers
        if (trimmed.startsWith('**A:') || trimmed.startsWith('A:') || trimmed.startsWith('**Answer')) needsBlankLine = true;
        
        // Lists
        if (trimmed.match(/^[0-9]+\./) || trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            let prev = i > 0 ? lines[i-1].trim() : '';
            if (!prev.match(/^[0-9]+\./) && !prev.startsWith('* ') && !prev.startsWith('- ') && prev !== '' && prev !== '---') {
                needsBlankLine = true;
            }
        }
        
        if (needsBlankLine && newLines.length > 0 && newLines[newLines.length - 1].trim() !== '') {
            newLines.push('');
        }
        
        newLines.push(line);
    }
    
    fs.writeFileSync(p, newLines.join('\n'));
    console.log("Fixed formatting for", file);
});
