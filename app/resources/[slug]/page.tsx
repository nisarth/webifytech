import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, Share2, MessageSquare } from "lucide-react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/sections/CTA";

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
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

  // Related posts (excluding current)
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
        {/* Progress Bar (Visual only for now) */}
        <div className="fixed top-0 left-0 w-full h-1 bg-[var(--primary)]/10 z-50">
          <div className="h-full bg-[var(--accent)] w-1/4" />
        </div>

        <article className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
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

          {/* Featured Image placeholder/decoration */}
          <div className={`aspect-[21/9] ${post.id === 'article-1' ? 'bg-[url("/assets/blog_physics.png")]' : 'bg-[var(--primary)]/5'} bg-cover bg-center rounded-[40px] mb-16 shadow-2xl relative overflow-hidden group`}>
            {!post.image.includes('.png') && (
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[var(--primary)]/20 font-display font-black text-6xl opacity-10">WEBIFY TECH</span>
               </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent" />
          </div>

          {/* Content Mockup (Following User's Master Prompt Structure) */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[var(--primary)] prose-p:text-[var(--muted)] prose-p:font-body prose-li:text-[var(--muted)] prose-li:font-body">
            <h2 className="text-3xl mt-12 mb-6">Introduction to {post.primaryKeyword}</h2>
            <p>
              In the rapidly evolving digital landscape of 2025, {post.primaryKeyword} has become more than just a 
              technical requirement—it&apos;s a fundamental pillar of business success. As digital saturation reaches
              new heights, companies in the U.S. and beyond are realizing that a generic online presence is no 
              longer sufficient. Performance, security, and user experience have shifted from luxury features to 
              essential survival traits.
            </p>
            
            <blockquote className="my-12 p-8 bg-[var(--primary)]/5 border-l-4 border-[var(--accent)] rounded-r-2xl">
              <p className="text-2xl font-display font-bold text-[var(--primary)] mb-2">
                "Digital interaction is the first point of contact for 97% of modern consumers. If that 
                experience isn&apos;t flawless, you aren&apos;t just losing a lead; you&apos;re losing market share."
              </p>
              <footer className="text-sm font-body font-bold text-[var(--muted)]">
                — Senior Strategy Analyst, WebifyTech
              </footer>
            </blockquote>

            <h2 className="text-3xl mt-12 mb-6">The Strategic Importance of Internal Linking</h2>
            <p>
              One of the most overlooked aspects of {post.primaryKeyword} is the architecture of internal authority.
              By strategically linking to your <Link href="/services" className="text-[var(--accent)] hover:underline">Premier Services</Link> 
              and <Link href="/portfolio" className="text-[var(--accent)] hover:underline">Success Cases</Link>, you create a 
              navigational web that guides both users and search engine crawlers toward your high-value pages.
            </p>

            <h2 className="text-3xl mt-12 mb-6">The WebifyTech Advantage</h2>
            <p>
              At <Link href="/" className="text-[var(--accent)] hover:underline">WebifyTech</Link>, we don&apos;t just build websites; 
              we build conversion engines. Our approach to {post.primaryKeyword} involves a deep integration of 
              technical excellence and behavioral psychology. Whether you&apos;re exploring 
              {post.secondaryKeywords.map((tag, i) => (
                <span key={tag}>
                  {i > 0 && ", "} 
                  <span className="font-bold text-[var(--primary)]">{tag}</span>
                </span>
              ))}, our team delivers measurable growth.
            </p>

            {/* Money Page Links Section (Link Juice) */}
            <div className="my-16 p-10 bg-[var(--primary)] text-white rounded-[40px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-2xl font-display font-bold mb-6 relative z-10">Maximize Your Results</h3>
               <p className="text-white/80 font-body mb-8 relative z-10">
                 Explore how our specialized services can transform your {post.primaryKeyword} strategy into a revenue-generating asset.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                 {post.internalLinks.map((link) => (
                    <Link 
                      key={link}
                      href={link}
                      className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl transition-all group"
                    >
                      <span className="font-display font-bold text-sm uppercase tracking-widest">
                        {link.replace("/", "") || "Services"}
                      </span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                 ))}
               </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl mt-20 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {post.faq.map((item, i) => (
                <div key={i} className="group">
                  <h3 className="text-xl font-display font-bold text-[var(--primary)] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-xs">
                      {i + 1}
                    </span>
                    {item.question}
                  </h3>
                  <p className="text-[var(--muted)] font-body leading-relaxed pl-11">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles (Preventing Orphans) */}
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
