'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Sparkles, Rocket, Target, Users, Scale } from 'lucide-react';
import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { blogPosts, blogCategories, formatDate } from '@/lib/mock-data';

const categoryGradients: Record<string, string> = {
  'Automation': 'from-[#6c47ff]/30 to-[#6c47ff]/10',
  'Productivity': 'from-[#00d4aa]/30 to-[#00d4aa]/10',
  'Product Updates': 'from-[#f5a623]/30 to-[#f5a623]/10',
  'Case Studies': 'from-[#3b82f6]/30 to-[#3b82f6]/10',
  'Leadership': 'from-[#00c48c]/30 to-[#00c48c]/10',
  'Comparison': 'from-[#ec4899]/30 to-[#ec4899]/10',
};

const categoryIcons: Record<string, React.ElementType> = {
  'Automation': Zap,
  'Productivity': Sparkles,
  'Product Updates': Rocket,
  'Case Studies': Target,
  'Leadership': Users,
  'Comparison': Scale,
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];

  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">The Flowmatic Blog</h1>
            <p className="text-lg text-[#6b6b9a]">
              Automation tips, product updates, and team productivity insights.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block mb-12">
              <Card hover className="overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video md:aspect-auto bg-gradient-to-br ${categoryGradients[featuredPost.category] || 'from-[#6c47ff]/20 to-[#00d4aa]/10'} flex items-center justify-center`}>
                    <Zap className="w-12 h-12 text-white/20" />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <Badge variant="info" className="w-fit mb-3">{featuredPost.category}</Badge>
                    <h2 className="text-2xl font-bold text-[#e8e8f4] mb-2 group-hover:text-[#6c47ff] transition-colors">{featuredPost.title}</h2>
                    <p className="text-[#6b6b9a] mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-[#6b6b9a]">
                      <span>{featuredPost.author.name}</span>
                      <span>•</span>
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#6c47ff]/20 text-[#e8e8f4] border border-[#6c47ff]/30'
                    : 'bg-[#161626] text-[#6b6b9a] hover:text-[#e8e8f4] border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(p => !p.featured).map((post) => {
              const Icon = categoryIcons[post.category] || Zap;
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full group overflow-hidden">
                    <div className={`h-36 bg-gradient-to-br ${categoryGradients[post.category] || 'from-[#6c47ff]/20 to-[#00d4aa]/10'} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white/20" />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="info" className="w-fit mb-3">{post.category}</Badge>
                      <h3 className="text-base font-semibold text-[#e8e8f4] mb-2 line-clamp-2 group-hover:text-[#6c47ff] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6b6b9a] mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-[#6b6b9a]">
                        <span>{post.author.name}</span>
                        <span>•</span>
                        <span>{post.readTime} min</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-[#161626] text-[#e8e8f4]">1</button>
            <button className="w-10 h-10 rounded-lg bg-[#0f0f1c] border border-[#1e1e35] text-[#6b6b9a] hover:text-[#e8e8f4]">2</button>
            <button className="w-10 h-10 rounded-lg bg-[#0f0f1c] border border-[#1e1e35] text-[#6b6b9a] hover:text-[#e8e8f4]">3</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
