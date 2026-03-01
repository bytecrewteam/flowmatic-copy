'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Zap, Check, ArrowRight, Star, MousePointerClick, Timer, Puzzle, Sparkles, Users, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { companyLogos, features, testimonials, faqItems, tasksPerDay } from '@/lib/mock-data';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import React from 'react';

// Updated numbers per spec
const updatedStats = [
  { label: 'Teams', value: '4,200+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Rating', value: '4.8' },
  { label: 'Tasks Automated', value: '840K' },
];

// Updated benefit numbers
const benefit1Stats = [
  { label: 'Time Saved This Month', value: '18.5 hrs', color: 'text-[#00e5b8]' },
  { label: 'Tasks Automated', value: '2,847', color: 'text-[#eeeef8]' },
  { label: 'Error Reduction', value: '97.4%', color: 'text-[#7c5cff]' },
];

const benefit2Stats = [
  { label: 'Team Members', value: '24', color: 'text-[#eeeef8]' },
  { label: 'Active Workflows', value: '34', color: 'text-[#eeeef8]' },
  { label: 'Integrations Used', value: '47', color: 'text-[#7c5cff]' },
];

// Feature icons
const featureIcons = [MousePointerClick, Timer, Puzzle, Sparkles, Users, LineChart];

export default function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060610]">
      <PublicNav />
      
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background gradient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(124, 92, 255, 0.18) 0%, transparent 60%)' }} />
            <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle at 70% 60%, rgba(0, 229, 184, 0.12) 0%, transparent 55%)' }} />
          </div>

          <div className="container mx-auto px-[clamp(16px,5vw,80px)] py-20 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-bold text-[#eeeef8] mb-6 leading-tight">
                Stop managing workflows.
                <br />
                <span className="bg-gradient-to-r from-[#7c5cff] to-[#00e5b8] bg-clip-text text-transparent">
                  Start automating them.
                </span>
              </h1>
              
              <div className="max-w-[560px] mx-auto mb-8">
                <p className="text-lg md:text-xl text-[#6868a0]">
                  Flowmatic connects your tools, eliminates repetitive tasks, and gives your team time back — all without writing a single line of code.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/signup">
                  <Button size="lg" className="px-6 py-3 w-full sm:w-auto active:scale-[0.97] transition-transform">
                    Start for free — no credit card
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="px-6 py-3 w-full sm:w-auto active:scale-[0.97] transition-transform"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch 2-min demo
                </Button>
              </div>

              {/* Social Proof — Fix #8: text-only badges */}
              <div className="mb-16">
                <p className="text-sm text-[#6868a0] mb-6" style={{ fontSize: '0.875rem' }}>Trusted by 4,200+ teams</p>
                <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                  {companyLogos.map((company) => (
                    <div
                      key={company.name}
                      className="text-sm font-semibold tracking-wide"
                      style={{ color: '#3a3a5c', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.75rem' }}
                    >
                      {company.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Mockup — Fix #15: larger, glow ring, badge, URL bar */}
              <div className="relative max-w-[680px] mx-auto">
                {/* Floating live badge */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 whitespace-nowrap z-20"
                  style={{ background: 'rgba(0, 229, 184, 0.12)', border: '1px solid rgba(0, 229, 184, 0.3)', color: '#00e5b8' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e5b8] inline-block" style={{ animation: 'pulse 2s ease infinite' }} />
                  Live · 38 active workflows
                </div>

                {/* Glow ring wrapper */}
                <div
                  className="p-[1px] rounded-[calc(var(--radius-lg)+1px)]"
                  style={{ background: 'conic-gradient(from 180deg, #7c5cff, #00e5b8, #7c5cff)', boxShadow: '0 0 60px rgba(124, 92, 255, 0.3)' }}
                >
                  <div className="bg-[#13132a] rounded-[var(--radius-lg)] overflow-hidden">
                    {/* Top bar with URL */}
                    <div className="h-9 bg-[#0d0d1f] flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <div className="flex-1 mx-8 h-4 bg-[#1f1f3d] rounded-full text-[10px] text-[#3a3a5c] flex items-center justify-center">
                        app.flowmatic.io/dashboard
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-[#0d0d1f] rounded-lg p-4">
                          <p className="text-xs text-[#6868a0] mb-1">Tasks Today</p>
                          <p className="text-2xl font-bold text-[#eeeef8]">1,247</p>
                        </div>
                        <div className="bg-[#0d0d1f] rounded-lg p-4">
                          <p className="text-xs text-[#6868a0] mb-1">Active Flows</p>
                          <p className="text-2xl font-bold text-[#eeeef8]">38</p>
                        </div>
                        <div className="bg-[#0d0d1f] rounded-lg p-4">
                          <p className="text-xs text-[#6868a0] mb-1">Time Saved</p>
                          <p className="text-2xl font-bold text-[#00e5b8]">6.4h</p>
                        </div>
                      </div>
                      {/* Mini chart */}
                      <div className="h-20 flex items-end gap-1 mb-2">
                        {tasksPerDay.slice(-14).map((point, i, arr) => {
                          const maxVal = Math.max(...arr.map(d => d.value));
                          const height = (point.value / maxVal) * 100;
                          const isLast = i === arr.length - 1;
                          return (
                            <div
                              key={point.date}
                              className={`flex-1 rounded-sm ${isLast ? 'bg-[#00e5b8]' : 'bg-[#7c5cff]'}`}
                              style={{ height: `${Math.max(height, 8)}%` }}
                            />
                          );
                        })}
                      </div>
                      <p className="text-[11px] text-[#6868a0]">Automation runs — last 14 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section — Fix #16: accent line on top */}
        <section
          ref={statsRef}
          className="py-20 bg-[#0d0d1f] relative"
          style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        >
          {/* 2px brand gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #7c5cff, #00e5b8)' }} />
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {updatedStats.map((stat, i) => (
                <div key={stat.label} className="text-center relative">
                  {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-[#1f1f3d]" />}
                  <motion.p 
                    className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-[#eeeef8] mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[0.8rem] text-[#6868a0]" style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section — Fix #16: grid pattern overlay */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(rgba(124, 92, 255, 0.02) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(124, 92, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 92, 255, 0.06), transparent 70%)' }} />
          <div className="container mx-auto px-[clamp(16px,5vw,80px)] relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-3">
                Everything your team needs to move faster
              </h2>
              <p className="text-base text-[#6868a0] max-w-[560px] mx-auto mb-12">
                Powerful features that make workflow automation accessible to everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <Card hover className="h-full p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,92,255,0.15)] hover:border-[rgba(124,92,255,0.3)] transition-all duration-200 ease-out">
                      <CardContent className="p-0">
                        <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[rgba(124,92,255,0.12)] flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-[#7c5cff]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#eeeef8] mb-2">{feature.title}</h3>
                        <p className="text-sm text-[#6868a0]" style={{ lineHeight: 1.6 }}>{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section 1 — Fix #2: removed inline padding, py-20 */}
        <section className="py-20 bg-[#0d0d1f]">
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-4">
                  From 3 hours to 3 minutes.
                </h2>
                <p className="text-base text-[#6868a0] mb-6">
                  Teams using Flowmatic report eliminating an average of 9 hours of manual work per week per person. That's not a feature — that's a compounding return on your time.
                </p>
                <ul className="space-y-3">
                  {['Faster onboarding', 'Zero data entry errors', 'Always-on automations'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#eeeef8]">
                      <Check className="w-5 h-5 text-[#00e5b8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-[#0d0d1f] border border-[#1f1f3d] rounded-xl" style={{ borderTop: '2px solid var(--color-brand-primary)', background: 'var(--color-surface-raised)' }}>
                  <div className="space-y-0">
                    {benefit1Stats.map((stat, i) => (
                      <div key={stat.label} className="flex justify-between items-center p-4" style={{ borderBottom: i < benefit1Stats.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                        <span className="text-sm text-[#6868a0]">{stat.label}</span>
                        <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section 2 — Fix #2: removed inline padding, py-20 */}
        <section className="py-20">
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-[#0d0d1f] border border-[#1f1f3d] rounded-xl" style={{ borderTop: '2px solid var(--color-brand-primary)', background: 'var(--color-surface-raised)' }}>
                  <div className="space-y-0">
                    {benefit2Stats.map((stat, i) => (
                      <div key={stat.label} className="flex justify-between items-center p-4" style={{ borderBottom: i < benefit2Stats.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                        <span className="text-sm text-[#6868a0]">{stat.label}</span>
                        <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-4" style={{ maxWidth: '480px' }}>
                  Built for humans.<br />Ready for scale.
                </h2>
                <p className="text-base text-[#6868a0] mb-6">
                  Whether you're a 5-person startup or a 500-person enterprise, Flowmatic grows with you. Set up in minutes. Scale without limits.
                </p>
                <ul className="space-y-3">
                  {['Enterprise-grade security', 'Unlimited scaling', '24/7 support'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#eeeef8]">
                      <Check className="w-5 h-5 text-[#00e5b8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works — Fix #2: removed inline padding; Fix #7: flex connector layout */}
        <section className="py-20 bg-[#0d0d1f]">
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-3">
                Up and running in three steps.
              </h2>
            </div>

            <div className="flex items-start gap-0 relative">
              {[
                { step: 1, title: 'Connect your tools', description: 'Link your existing apps in one click. No dev needed.' },
                { step: 2, title: 'Build your workflow', description: 'Use our visual builder to define your automation logic.' },
                { step: 3, title: 'Let it run', description: 'Flowmatic runs your workflows automatically, 24/7.' },
              ].map((item, i) => (
                <React.Fragment key={item.step}>
                  <motion.div
                    className="flex-1 text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#7c5cff] flex items-center justify-center text-xl font-bold text-white mx-auto mb-4 relative z-10" style={{ flexShrink: 0 }}>
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[#eeeef8] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6868a0]">{item.description}</p>
                  </motion.div>
                  {i < 2 && (
                    <div className="flex-none w-16 flex items-center pt-6">
                      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-secondary))' }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials — Fix #2: removed inline padding; Fix #19: quotes, no italic, accent bar */}
        <section className="py-20">
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-3">
                Don't take our word for it.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => {
                const initials = testimonial.name.split(' ').map(n => n[0]).join('');
                const avatarColors = ['#7c5cff', '#00e5b8', '#f5a623'];
                return (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card hover className="h-full group p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,92,255,0.15)] hover:border-[rgba(124,92,255,0.3)] transition-all duration-200 ease-out">
                      <CardContent className="p-0">
                        {/* Accent bar */}
                        <div className="w-8 h-0.5 bg-[#7c5cff] mb-4" />
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                          ))}
                        </div>
                        <p className="text-[15px] text-[#eeeef8] mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                            style={{ backgroundColor: avatarColors[i] }}
                          >
                            {initials}
                          </div>
                          <div>
                            <p className="font-semibold text-[#eeeef8]">{testimonial.name}</p>
                            <p className="text-sm text-[#6868a0]">{testimonial.role} · {testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Preview — Fix #2: removed inline padding; Fix #4: simplified price render; Fix #12: no opacity-90 */}
        <section className="py-20 bg-[#0d0d1f] relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 229, 184, 0.05), transparent 70%)' }} />
          <div className="container mx-auto px-[clamp(16px,5vw,80px)] relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-3">
                Simple, transparent pricing.
              </h2>
            </div>

            {/* FIX: Added overflow:visible so the scaled Pro card isn't clipped by grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8" style={{ overflow: 'visible' }}>
              {[
                { name: 'Free', price: '$0', period: ' forever', features: ['5 workflows', '1,000 tasks/mo', '3 integrations'], highlight: false },
                { name: 'Pro', price: '$29', period: '/mo', popular: true, features: ['Unlimited workflows', '50,000 tasks/mo', '2,000+ integrations', 'AI suggestions'], highlight: true },
                { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited everything', 'SSO & SAML', 'Dedicated CSM'], highlight: false },
              ].map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-6 bg-[#0d0d1f] border border-[#1f1f3d] rounded-xl ${plan.popular ? 'relative' : ''}`}
                  style={plan.popular ? { 
                    transform: 'scale(1.04)', 
                    border: '2px solid #7c5cff',
                    boxShadow: '0 0 40px rgba(124, 92, 255, 0.25)',
                    background: '#13132a',
                    position: 'relative',
                    zIndex: 10,
                  } : {}}
                >
                  {plan.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                      style={{ background: '#7c5cff' }}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-[#eeeef8] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#eeeef8]">{plan.price}</span>
                    <span className="text-[#6868a0]">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#6868a0]">
                        <Check className="w-4 h-4 text-[#00e5b8]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.name === 'Enterprise' ? 'secondary' : 'primary'} 
                    className="w-full"
                    style={plan.name === 'Enterprise' ? { border: '1px solid white', background: 'transparent' } : {}}
                  >
                    {plan.name === 'Enterprise' ? 'Talk to sales' : plan.name === 'Free' ? 'Get started' : 'Start free trial'}
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/pricing" className="text-[#7c5cff] hover:text-[#00e5b8] transition-colors">
                See full pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — Fix #2: removed inline padding */}
        <section className="py-20">
          <div className="container mx-auto px-[clamp(16px,5vw,80px)]">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-3">
                Questions we get a lot.
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA Section — Fix #2: removed inline padding; Fix #16: stronger gradient */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{ 
            background: 'radial-gradient(ellipse at 50% 50%, rgba(124, 92, 255, 0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0, 229, 184, 0.08) 0%, transparent 50%), linear-gradient(135deg, rgba(124, 92, 255, 0.18) 0%, rgba(0, 229, 184, 0.06) 100%)',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124, 92, 255, 0.2), transparent)', zIndex: 0 }} aria-hidden="true" />
          <div className="container mx-auto px-[clamp(16px,5vw,80px)] relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#eeeef8] mb-4">
                Ready to get your time back?
              </h2>
              <p className="text-lg text-[#6868a0] mb-8">
                Join 4,200+ teams already running on Flowmatic.
              </p>
              <Link href="/signup">
                <Button size="lg" className="px-8 py-3">
                  Start free — no credit card
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-[#6868a0] mt-4">
                Setup takes under 5 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Modal — Fix #5: dummy video UI */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setVideoModalOpen(false)}
          />
          <div className="relative w-full max-w-3xl bg-[#0d0d1f] rounded-xl overflow-hidden">
            <div className="aspect-video relative bg-[#060610] flex flex-col items-center justify-center">
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 92, 255, 0.04) 0%, rgba(0, 229, 184, 0.03) 50%, rgba(124, 92, 255, 0.04) 100%)',
                }}
              />
              {/* Play button */}
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center relative z-10 cursor-pointer"
                style={{ background: '#7c5cff', boxShadow: '0 0 40px rgba(124, 92, 255, 0.4)' }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              {/* Bottom controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
                {/* Timeline bar */}
                <div className="w-full h-1 bg-[#1f1f3d] rounded-full mb-3 relative">
                  <div className="h-full w-1/4 bg-[#7c5cff] rounded-full" />
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6868a0]">0:24 / 2:07</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6868a0" strokeWidth="2" className="w-5 h-5">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </div>
              </div>
            </div>
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-[#13132a] rounded-lg text-[#6868a0] hover:text-[#eeeef8] transition-colors"
              aria-label="Close video"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
