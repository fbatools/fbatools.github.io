const fs = require('fs');
const path = require('path');

const sourceDir = "C:\\Users\\Prasoon\\Downloads\\New folder";
const destDir = "e:\\HELIUM10-BLOG-GITHUB\\src\\assets";
const blogDir = "e:\\HELIUM10-BLOG-GITHUB\\src\\content\\blog";

const mapping = {
    "helium-10-free-trial-discount-code.jpg": "helium-10-free-trial.md",
    "helium-10-magnet-keyword-tool.jpg": "how-to-use-helium-10-magnet.md",
    "helium-10-tutorial-for-beginners-fba.jpg": "helium-10-for-beginners.md",
    "is-helium-10-worth-it-review-2026.jpg": "is-helium-10-worth-it.md",
    "helium-10-xray-chrome-extension-guide.jpg": "helium-10-chrome-extension.md",
    "amzscout-vs-helium-10-budget-tools.jpg": "amzscout-vs-helium-10.md",
    "helium-10-black-box-product-research.jpg": "helium-10-black-box-tutorial.md",
    "how-to-use-helium-10-cerebro-keyword-research.jpg": "how-to-use-helium-10-cerebro.md",
    "smartscout-vs-helium-10-wholesale-fba.jpg": "helium-10-vs-smartscout.md",
    "helium-10-vs-jungle-scout-comparison-2026.jpg": "helium-10-vs-jungle-scout.md",
    "amazon-fba-product-research-strategy-2026.jpg": "amazon-fba-product-research-guide.md",
    "smartscout-wholesale-course-review.jpg": "smartscout-wholesale-course.md",
    "best-helium-10-alternatives.jpg": "helium-10-alternatives.md",
    "helium-10-listing-builder-optimization.jpg": "helium-10-listing-builder.md"
};

for (const [img, md] of Object.entries(mapping)) {
    const srcPath = path.join(sourceDir, img);
    const destPath = path.join(destDir, img);
    
    if (fs.existsSync(srcPath)) {
        // copy image
        fs.copyFileSync(srcPath, destPath);
        console.log("Copied", img);
        
        // update md file frontmatter
        const mdPath = path.join(blogDir, md);
        if (fs.existsSync(mdPath)) {
            let content = fs.readFileSync(mdPath, 'utf8');
            // Check if heroImage already exists to avoid duplicates
            if (content.includes('heroImage:')) {
                content = content.replace(/^heroImage:.*$/m, `heroImage: "../../assets/${img}"`);
                fs.writeFileSync(mdPath, content);
                console.log("Replaced existing heroImage in", md);
                continue;
            }

            const lines = content.split('\n');
            let foundSecond = false;
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '---') {
                    lines.splice(i, 0, `heroImage: "../../assets/${img}"`);
                    foundSecond = true;
                    break;
                }
            }
            
            if (foundSecond) {
                fs.writeFileSync(mdPath, lines.join('\n'));
                console.log("Added heroImage to", md);
            } else {
                console.log("Failed to find frontmatter end in", md);
            }
        } else {
            console.log("Markdown file not found:", md);
        }
    } else {
        console.log("Source image not found:", srcPath);
    }
}
