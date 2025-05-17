import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from '../Dashboard/Icons.tsx'
import { DashboardPreview } from "@/components/dashboard-preview"
import { ServicesPreview } from "@/components/services-preview"
import React from "react"

export function HomePage() {
    const features = [
        {
            icon: <Icons.healthData className="h-8 w-8" />,
            title: "Unified Health Data",
            description: "Aggregate all your medical information in one secure platform"
        },
        {
            icon: <Icons.ecosystem className="h-8 w-8" />,
            title: "Integrated Ecosystem",
            description: "Connect with specialized services that understand your needs"
        },
        {
            icon: <Icons.environment className="h-8 w-8" />,
            title: "Environmental Insights",
            description: "See how air quality, pollen and weather affect your health"
        },
        {
            icon: <Icons.privacy className="h-8 w-8" />,
            title: "Privacy First",
            description: "Your data is always anonymized and under your control"
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
                <div className="container relative z-10 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="px-10">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                Your Health, <span className="text-primary">Enhanced</span>
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground">
                                MediHub connects your medical data with environmental insights and specialized services for smarter health management.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button size="lg" className="px-8">
                                    Get Started
                                </Button>
                                <Button size="lg" variant="outline" className="px-8">
                                    How It Works
                                </Button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <DashboardPreview />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-12 bg-secondary/50">
                <div className="container">
                    <h2 className="text-center text-lg text-muted-foreground mb-8">
                        Medical Data for your needs.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        <Icons.hospital className="h-10 w-10" />
                        <Icons.clinic className="h-10 w-10" />
                        <Icons.researchInst className="h-10 w-10" />
                        <Icons.medicalDevice className="h-10 w-10" />
                        <Icons.pharmacy className="h-10 w-10" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Why Choose MediHub
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            A revolutionary approach to managing chronic conditions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
                        {features.map((feature, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow h-full">
                                <CardHeader>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Visualization Section */}
            <section className="py-20 bg-secondary/50">
                <div className="container px-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="p-4">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Health Meets <span className="text-primary">Environment</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We correlate your health metrics with real-time environmental data to uncover hidden patterns and triggers.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Icons.airQuality className="h-6 w-6 mt-1 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Air Quality Tracking</h3>
                                        <p className="text-sm text-muted-foreground">
                                            See how pollution levels affect your symptoms
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Icons.pollen className="h-6 w-6 mt-1 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Pollen Alerts</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Get notified when allergen levels are high
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Icons.weather className="h-6 w-6 mt-1 text-primary" />
                                    <div>
                                        <h3 className="font-medium">Weather Correlation</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Discover how temperature and humidity impact your condition
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
                            <Icons.dataVisualization className="h-24 w-24 text-muted-foreground" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-20">
                <div className="container">
                    <div className="mx-auto max-w-4xl text-center mb-12">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Explore Our <span className="text-primary">Service Ecosystem</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Connect with specialized apps and services that understand your unique health context.
                        </p>
                    </div>
                    <ServicesPreview />
                    <div className="mt-12 text-center">
                        <Button size="lg">
                            Browse All Services
                        </Button>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-primary/10">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                            Ready to Transform Your Health Management?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Join thousands of users taking control of their health with MediHub.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="px-8">
                                Sign Up Free
                            </Button>
                            <Button size="lg" variant="outline" className="px-8">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}