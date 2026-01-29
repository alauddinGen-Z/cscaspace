import { ArrowRight, Award, BookOpen, GraduationCap, Shield, Sparkles, University, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="glass mx-4 mt-4 rounded-xl px-6 py-4 flex items-center justify-between max-w-7xl lg:mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-foreground">CSCA SPACE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">How It Works</a>
            <a href="#universities" className="text-sm text-muted hover:text-foreground transition-colors">Universities</a>
            <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Button size="sm">Request Access</Button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

          <div className="relative max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Early Access Program Open
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Apply with{" "}
              <span className="gradient-text">AI Precision</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              The Intelligent Bridge to Your Grant in China. We connect ambitious students
              with top Chinese universities through an AI-powered application platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">15K+</div>
                <div className="text-sm text-muted">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section id="universities" className="py-16 px-4 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm text-muted mb-8 uppercase tracking-wider">
              Accepted by China&apos;s Top Institutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
              {/* University Logo Placeholders */}
              <div className="flex items-center gap-3 text-muted">
                <University className="w-8 h-8" />
                <span className="font-medium">Tsinghua University</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <University className="w-8 h-8" />
                <span className="font-medium">Peking University</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <University className="w-8 h-8" />
                <span className="font-medium">Fudan University</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <University className="w-8 h-8" />
                <span className="font-medium">Zhejiang University</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bridge Diagram - How It Works */}
        <section id="how-it-works" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="accent" className="mb-4">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Digital Bridge to China Education
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                Our AI-powered platform connects you directly with Chinese universities,
                streamlining the entire scholarship application process.
              </p>
            </div>

            {/* Bridge Diagram: 3 Connected Cards */}
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connection Lines (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-[calc(33.33%-1rem)] w-[calc(33.33%+2rem)] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 right-[calc(33.33%-1rem)] w-[calc(33.33%+2rem)] h-0.5 bg-gradient-to-r from-accent/50 to-primary/50 -translate-y-1/2" />

              {/* Card 1: Student */}
              <Card className="relative glass-card hover:border-primary/30 transition-colors cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>International Student</CardTitle>
                  <CardDescription>Your Journey Begins Here</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                      Create secure profile
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Upload documents
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Award className="w-4 h-4 text-primary" />
                      Select scholarships
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 2: Platform (Center/Highlighted) */}
              <Card className="relative glass-card border-accent/30 glow-accent hover:border-accent/50 transition-colors cursor-pointer group animate-float">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="accent" className="mx-auto mb-2">AI-Powered</Badge>
                  <CardTitle>CSCA SPACE Platform</CardTitle>
                  <CardDescription>Intelligent Processing</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <Sparkles className="w-4 h-4 text-accent" />
                      AI document review
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Smart matching
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Real-time tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 3: University */}
              <Card className="relative glass-card hover:border-primary/30 transition-colors cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Chinese University</CardTitle>
                  <CardDescription>Your Destination</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-muted space-y-2">
                    <li className="flex items-center gap-2 justify-center">
                      <Award className="w-4 h-4 text-primary" />
                      Receive applications
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                      Verified candidates
                    </li>
                    <li className="flex items-center gap-2 justify-center">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Issue acceptances
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Arrow Indicators (Mobile) */}
            <div className="flex flex-col items-center gap-2 my-8 md:hidden">
              <ArrowRight className="w-6 h-6 text-primary rotate-90" />
              <span className="text-xs text-muted">Seamless Flow</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose CSCA SPACE?
              </h2>
              <p className="text-muted max-w-xl mx-auto">
                Enterprise-grade security meets cutting-edge AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card hover:border-primary/20 transition-colors cursor-pointer">
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Bank-Level Security</CardTitle>
                  <CardDescription>
                    Your documents are encrypted with AES-256 and stored in compliance with international data protection standards.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-card hover:border-primary/20 transition-colors cursor-pointer">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>AI-Powered Matching</CardTitle>
                  <CardDescription>
                    Our algorithms analyze your profile against 500+ universities to find the perfect scholarship match.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="glass-card hover:border-primary/20 transition-colors cursor-pointer">
                <CardHeader>
                  <Award className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Expert Guidance</CardTitle>
                  <CardDescription>
                    Get personalized advice from our team of former CSC scholarship recipients and education consultants.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is CSCA SPACE?</AccordionTrigger>
                <AccordionContent>
                  CSCA SPACE is an AI-powered platform that helps international students apply for Chinese government scholarships (CSC) and connect with top Chinese universities. We streamline the entire application process from document preparation to university matching.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Which universities are supported?</AccordionTrigger>
                <AccordionContent>
                  We partner with over 500 Chinese universities including Tsinghua University, Peking University, Fudan University, Zhejiang University, and many more. Our network covers both CSC-designated universities and provincial scholarship programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How does the AI matching work?</AccordionTrigger>
                <AccordionContent>
                  Our AI analyzes your academic background, research interests, language proficiency, and career goals to match you with universities and programs that best fit your profile. We consider acceptance rates, program quality, and scholarship availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use bank-level AES-256 encryption for all documents and personal information. Our servers are ISO 27001 certified, and we comply with GDPR and other international data protection regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>When can I start using the platform?</AccordionTrigger>
                <AccordionContent>
                  We are currently in early access. Join our waitlist below to be among the first to access the platform when we launch. Early access members receive priority support and exclusive benefits.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="glass glow-primary p-8 md:p-12 text-center">
              <div className="mb-6">
                <Badge className="mb-4">Limited Early Access</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Request Early Access
                </h2>
                <p className="text-muted">
                  Join our waitlist to be the first to experience the future of scholarship applications.
                </p>
              </div>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg">
                  Request Access
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>

              <p className="text-xs text-muted mt-4">
                By joining, you agree to our Terms of Service and Privacy Policy.
              </p>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-foreground">CSCA SPACE</span>
          </div>

          <p className="text-sm text-muted">
            &copy; 2026 CSCA SPACE. The Intelligent Bridge to Your Grant in China.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
