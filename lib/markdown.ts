export function parseMarkdown(md: string): string {
  // 1. Remove Frontmatter (very basic)
  let content = md.replace(/^---[\s\S]*?---/, '').trim();

  // 2. Headings
  content = content.replace(/^# (.*$)/gim, '<h1 class="type-scale-h1 mb-8">$1</h1>');
  content = content.replace(/^## (.*$)/gim, '<h2 class="text-3xl mt-16 mb-8 text-[var(--primary)] font-display font-bold">$1</h2>');
  content = content.replace(/^### (.*$)/gim, '<h3 class="text-2xl mt-12 mb-6 text-[var(--primary)] font-display font-bold">$1</h3>');

  // 3. Blockquotes
  content = content.replace(/^\> (.*$)/gim, '<blockquote class="my-12 p-10 bg-[var(--primary)]/5 border-l-4 border-[var(--accent)] rounded-r-[30px] italic font-display font-bold text-2xl text-[var(--primary)] leading-relaxed">$1</blockquote>');

  // 4. Tables - Improved logic to group rows
  const tableRows: string[] = [];
  content = content.replace(/\|(.+)\|/gim, (match) => {
    const cells = match.split('|').filter(c => c.trim() !== '');
    if (match.includes('---')) return '<!-- sep -->'; // Marker for separator
    const row = `<tr class="border-b border-[var(--primary)]/10 text-sm">
      ${cells.map(c => `<td class="p-4">${c.trim()}</td>`).join('')}
    </tr>`;
    return row;
  });

  // Wrap consecutive <tr> elements in a table and remove separator markers
  content = content.replace(/((<tr[\s\S]*?<\/tr>)\s*(<!-- sep -->\s*)*)+/gim, (match) => {
    const rows = match.replace(/<!-- sep -->/g, '');
    return `<div class="overflow-x-auto my-12 shadow-xl rounded-3xl border border-[var(--primary)]/10">
      <table class="w-full border-collapse">
        ${rows}
      </table>
    </div>`;
  });

  // 4.5 Code Blocks
  content = content.replace(/```(.*?)\n([\s\S]*?)```/gim, '<pre class="my-12 p-8 bg-[var(--primary)] text-[var(--accent)] rounded-[30px] overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre"><code>$2</code></pre>');

  // 5. Lists
  content = content.replace(/^\- (.*$)/gim, '<li class="mb-3 ml-6 list-disc">$1</li>');
  content = content.replace(/((<li.*<\/li>\s*)+)/gim, '<ul class="my-8 space-y-2">$1</ul>');

  content = content.replace(/^\d\. (.*$)/gim, '<li class="mb-3 ml-6 list-decimal">$1</li>');
  content = content.replace(/((<li.*<\/li>\s*)+)/gim, (match) => {
    if (match.includes('list-decimal')) return `<ol class="my-8 space-y-2">${match}</ol>`;
    return match;
  });

  // 6. Emphasis
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // 7. Links
  content = content.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[var(--accent)] hover:underline font-bold">$1</a>');

  // 8. Paragraphs (split by double newline)
  // Avoid wrapping existing HTML tags
  content = content.split(/\n\s*\n/).map(p => {
    if (p.trim().startsWith('<')) return p;
    return `<p class="mb-8 leading-relaxed text-[var(--muted)] text-lg font-body">${p.trim()}</p>`;
  }).join('');

  return content;
}
