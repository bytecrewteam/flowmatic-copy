'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { blogPosts, formatDate } from '@/lib/mock-data';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      
      <main id="main-content" className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <header className="mb-8">
            <Link 
              href="/blog" 
              className="text-sm text-[#6b6b9a] hover:text-[#6c47ff] mb-4 inline-flex items-center gap-1"
            >
              ← Back to blog
            </Link>
            <Badge variant="info" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-[#e8e8f4] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#6b6b9a]">
              <div className="w-10 h-10 rounded-full bg-[#6c47ff] flex items-center justify-center">
                <span className="text-white font-medium">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-[#e8e8f4]">{post.author.name}</p>
                <p>{formatDate(post.publishedAt)} · {post.readTime} min read</p>
              </div>
            </div>
          </header>

          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#6c47ff]/20 to-[#00d4aa]/10 rounded-xl mb-8 flex items-center justify-center">
            <span className="text-6xl">📄</span>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content ? (
              post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold text-[#e8e8f4] mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={i} className="list-disc list-inside text-[#6b6b9a] my-4 space-y-2">
                      {paragraph.split('\n').filter(Boolean).map((item, j) => (
                        <li key={j}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-[#6b6b9a] my-4">{paragraph}</p>;
              })
            ) : (
              <p className="text-[#6b6b9a]">{post.excerpt}</p>
            )}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-[#1e1e35]">
            <p className="text-[#6b6b9a] mb-4">Share this article:</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#161626] rounded-lg text-[#e8e8f4] hover:bg-[#1e1e35]">Twitter</button>
              <button className="px-4 py-2 bg-[#161626] rounded-lg text-[#e8e8f4] hover:bg-[#1e1e35]">LinkedIn</button>
              <button className="px-4 py-2 bg-[#161626] rounded-lg text-[#e8e8f4] hover:bg-[#1e1e35]">Copy link</button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="container mx-auto px-4 max-w-5xl mt-16">
          <h2 className="text-2xl font-bold text-[#e8e8f4] mb-8">Related articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card hover className="h-full">
                  <CardContent className="p-4">
                    <Badge variant="info" className="w-fit mb-2 text-xs">{relatedPost.category}</Badge>
                    <h3 className="font-semibold text-[#e8e8f4] mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-xs text-[#6b6b9a]">{relatedPost.readTime} min read</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
