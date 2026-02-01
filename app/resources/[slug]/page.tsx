import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";
import fs from "fs/promises";
import path from "path";
import { parseMarkdown } from "@/lib/markdown";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | WebifyTech Insights`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["WebifyTech"],
    },
  };
}

async function getPostContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (error) {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const rawContent = await getPostContent(params.slug);

  if (!post) {
    notFound();
  }

  // Parse markdown and resolve internal links
  let htmlContent = "";
  if (rawContent) {
    htmlContent = parseMarkdown(rawContent);
    // Resolve [LINK: page] placeholders
    htmlContent = htmlContent
      .replace(/\[LINK: services\]/g, '<a href="/services" class="text-[var(--accent)] hover:underline font-bold">Premier Services</a>')
      .replace(/\[LINK: portfolio\]/g, '<a href="/portfolio" class="text-[var(--accent)] hover:underline font-bold">Success Cases</a>')
      .replace(/\[LINK: contact\]/g, '<a href="/contact" class="text-[var(--accent)] hover:underline font-bold">Get Started</a>')
      .replace(/\[LINK: about\]/g, '<a href="/about" class="text-[var(--accent)] hover:underline font-bold">Our Team</a>')
      .replace(/\[LINK: resources\]/g, '<a href="/resources" class="text-[var(--accent)] hover:underline font-bold">More Insights</a>')
      .replace(/\[LINK: home\]/g, '<a href="/" class="text-[var(--accent)] hover:underline font-bold">WebifyTech</a>');
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://webify-tech.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "WebifyTech",
      "url": "https://webify-tech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WebifyTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webify-tech.com/assets/logo.svg"
      }
    },
    "datePublished": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://webify-tech.com/resources/${post.slug}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <Script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <Header />
      
      <main className="pt-32 pb-20 overflow-hidden">
        <article className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-2 text-sm font-body font-bold text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-[var(--primary)]/5 text-[var(--primary)] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[var(--primary)]/10">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)] font-body font-bold uppercase tracking-widest">
                <Clock size={12} />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="type-scale-h1 text-[var(--primary)] mb-8 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-[var(--muted)] leading-relaxed font-body italic border-l-4 border-[var(--accent)] pl-6 py-2">
              {post.excerpt}
            </p>
          </div>

          <div className={`aspect-[21/9] bg-cover bg-center rounded-[40px] mb-16 shadow-2xl relative overflow-hidden group`} style={{ backgroundImage: `url(${post.image})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent" />
          </div>

          {rawContent ? (
            <div 
              className="prose prose-lg max-w-none prose-headings:font-display"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--primary)] prose-p:text-[var(--muted)] prose-p:font-body prose-li:text-[var(--muted)] prose-li:font-body">
              <p>Content is loading or temporarily unavailable. Please check back soon.</p>
            </div>
          )}

          <div className="mt-24 pt-24 border-t border-[var(--primary)]/10">
            <h2 className="text-2xl font-display font-bold text-[var(--primary)] mb-12">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(p => (
                <Link 
                  key={p.slug}
                  href={`/resources/${p.slug}`}
                  className="group flex gap-6 items-center p-6 bg-[var(--primary)]/5 rounded-3xl border border-transparent hover:border-[var(--accent)]/20 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest mb-2 block">
                      {p.category}
                    </span>
                    <h4 className="font-display font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors line-clamp-2 mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[var(--muted)] font-body line-clamp-2">
                       {p.excerpt}
                    </p>
                  </div>
                  <ArrowRight size={20} className="text-[var(--primary)]/20 group-hover:text-[var(--accent)] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
