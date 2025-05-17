import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Icons } from "../Dashboard/Icons.tsx"
import { Progress } from "@/components/ui/progress"
import React from "react"

export function ServicesMarketplace() {
    // Mock data - replace with real data from your API
    const services = [
        {
            id: "glucose-guard",
            name: "GlucoseGuard",
            logo: "/default-service-logo.png",
            description: "AI-powered blood sugar predictions and personalized recommendations",
            category: "Diabetes",
            rating: 4.8,
            reviews: 124,
            connected: true,
            dataUsed: ["blood-glucose", "activity-levels", "medication-adherence"],
            premium: false
        },
        {
            id: "cardio-care",
            name: "CardioCare",
            logo: "/default-service-logo.png",
            description: "Heart health monitoring with personalized exercise plans",
            category: "Hypertension",
            rating: 4.6,
            reviews: 89,
            connected: false,
            dataUsed: ["blood-pressure", "activity-levels", "weight"],
            premium: true
        },
        {
            id: "arthro-assist",
            name: "ArthroAssist",
            logo: "/default-service-logo.png",
            description: "Joint pain tracking and physical therapy recommendations",
            category: "Arthritis",
            rating: 4.4,
            reviews: 42,
            connected: false,
            dataUsed: ["pain-levels", "activity-levels"],
            premium: false
        },
        {
            id: "pulmonary-plus",
            name: "Pulmonary+",
            logo: "/default-service-logo.png",
            description: "COPD management with oxygen level alerts and breathing exercises",
            category: "COPD",
            rating: 4.7,
            reviews: 67,
            connected: false,
            dataUsed: ["oxygen-saturation", "activity-levels"],
            premium: true
        },
        {
            id: "med-minder",
            name: "MedMinder",
            logo: "/default-service-logo.png",
            description: "Smart medication reminders and adherence tracking",
            category: "General",
            rating: 4.9,
            reviews: 215,
            connected: true,
            dataUsed: ["medication-adherence"],
            premium: false
        },
        {
            id: "diabetes-nutrition",
            name: "Diabetes Nutrition",
            logo: "/default-service-logo.png",
            description: "Personalized meal planning for diabetes management",
            category: "Diabetes",
            rating: 4.5,
            reviews: 93,
            connected: false,
            dataUsed: ["blood-glucose", "weight"],
            premium: false
        }
    ];

    const diseaseFilters = [
        "All Services",
        "Diabetes",
        "Hypertension",
        "COPD",
        "Heart Failure",
        "Arthritis"
    ];

    return (
        <div className="container mx-auto py-8 space-y-6">
            {/* Marketplace Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Services Marketplace</h1>
                    <p className="text-muted-foreground">
                        Discover apps and services that can help you manage your health
                    </p>
                </div>
                <div className="w-full md:w-auto flex gap-2">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by disease" />
                        </SelectTrigger>
                        <SelectContent>
                            {diseaseFilters.map((filter) => (
                                <SelectItem key={filter} value={filter.toLowerCase().replace(' ', '-')}>
                                    {filter}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input placeholder="Search services..." className="md:w-[250px]" />
                </div>
            </div>

            {/* Connected Services Section */}
            <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icons.link className="h-5 w-5 text-blue-500" />
                    Your Connected Services
                </h2>
                {services.filter(s => s.connected).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.filter(s => s.connected).map((service) => (
                            <ServiceCard key={service.id} service={service} connected />
                        ))}
                    </div>
                ) : (
                    <Card className="text-center p-8">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                            <Icons.plug className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 font-medium">No services connected</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Connect to services to enhance your health management
                        </p>
                        <Button variant="outline" className="mt-4">
                            Browse Services
                        </Button>
                    </Card>
                )}
            </div>

            {/* Recommended Services */}
            <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icons.star className="h-5 w-5 text-amber-500" />
                    Recommended For You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.filter(s => !s.connected && s.category === "Diabetes").map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>

            {/* All Services */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Icons.grid className="h-5 w-5 text-green-500" />
                        All Services
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Sort by:</span>
                        <Select defaultValue="popular">
                            <SelectTrigger className="w-[120px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popular">Most Popular</SelectItem>
                                <SelectItem value="rating">Highest Rated</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.filter(s => !s.connected).map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ service, connected = false }: { service: any; connected?: boolean }) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4 pb-3">
                <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center">
                        {service.logo ? (
                            <img src={service.logo} alt={`${service.name} logo`} className="h-10 w-10 object-contain" />
                        ) : (
                            <Icons.appWindow className="h-6 w-6 text-muted-foreground" />
                        )}
                    </div>
                </div>
                <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        {service.premium && (
                            <Badge variant="premium" className="text-xs">
                                Premium
                            </Badge>
                        )}
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Icons.star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviews})</span>
                    </div>
                    <Badge variant="outline">{service.category}</Badge>
                </div>

                <div className="space-y-2">
                    <h4 className="text-sm font-medium">Data Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {service.dataUsed.map((data: string) => (
                            <Badge key={data} variant="secondary" className="text-xs">
                                {data.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
                            </Badge>
                        ))}
                    </div>
                </div>

                {connected && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Data shared last week</span>
                            <span className="font-medium">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                    </div>
                )}
            </CardContent>
            <CardFooter>
                {connected ? (
                    <Button variant="outline" className="w-full" onClick={() => {/* Disconnect logic */}}>
                        <Icons.unlink className="mr-2 h-4 w-4" />
                        Disconnect
                    </Button>
                ) : (
                    <Button className="w-full" onClick={() => {/* Connect logic */}}>
                        {service.premium ? (
                            <>
                                <Icons.sparkles className="mr-2 h-4 w-4" />
                                Upgrade to Connect
                            </>
                        ) : (
                            <>
                                <Icons.link className="mr-2 h-4 w-4" />
                                Connect Service
                            </>
                        )}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}