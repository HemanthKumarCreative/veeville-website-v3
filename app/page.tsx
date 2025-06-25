import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Welcome to Excellence - Your Company",
  description:
    "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
  openGraph: {
    title: "Welcome to Excellence - Your Company",
    description:
      "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    url: "https://yourwebsite.com",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized solutions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get help from our team of experienced professionals 24/7.",
  },
]

const benefits = [
  "Increase productivity by up to 300%",
  "Reduce operational costs significantly",
  "Scale your business effortlessly",
  "Access premium features and tools",
]

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Welcome to Excellence - Your Company",
            description:
              "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
            url: "https://yourwebsite.com",
            mainEntity: {
              "@type": "Organization",
              name: "Your Company",
              description: "Excellence in innovation and business solutions",
            },
          }),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-4">
                Welcome to Excellence
              </Badge>
              <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Elevate Your Business to <span className="text-primary">New Heights</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover excellence with our innovative solutions. We provide top-tier services and products designed to
                transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background text-foreground" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold">
                Why Choose Excellence?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence drives everything we do. Here's what sets us apart from the competition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold mb-4">
                    Transform Your Business Today
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join thousands of satisfied customers who have already experienced the power of our solutions.
                  </p>
                </div>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold">4.9/5 Rating</p>
                    <p className="text-muted-foreground">From 10,000+ customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold">
                Ready to Experience Excellence?
              </h2>
              <p className="text-xl opacity-90">
                Don't wait any longer. Join the thousands of businesses that have already transformed their operations
                with our solutions.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-background text-foreground" asChild>
                <Link href="/contact">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
