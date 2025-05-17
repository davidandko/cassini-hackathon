import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "./Dashboard/Icons.tsx"
import React from "react";

export function ServicesPreview() {
    // Mock data - replace with real data from your API
    const featuredServices = [
        {
            id: "gluco-ai",
            name: "GlucoAI",
            category: "Diabetes",
            description: "AI-powered blood sugar predictions and personalized recommendations",
            rating: 4.8,
            reviews: 142,
            dataUsed: ["glucose", "activity", "medication"],
            premium: false,
            logo: <Icons.ai className="h-8 w-8 text-blue-500" />
        },
        {
            id: "cardio-care",
            name: "CardioCare+",
            category: "Hypertension",
            description: "Heart health monitoring with personalized exercise plans",
            rating: 4.6,
            reviews: 89,
            dataUsed: ["blood pressure", "weight", "activity"],
            premium: true,
            logo: <Icons.heart className="h-8 w-8 text-red-500" />
        },
        {
            id: "breath-easy",
            name: "BreathEasy",
            category: "COPD",
            description: "Oxygen level tracking and breathing exercise recommendations",
            rating: 4.7,
            reviews: 67,
            dataUsed: ["oxygen saturation", "air quality"],
            premium: false,
            logo: <Icons.airQuality className="h-8 w-8 text-green-500" />
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {featuredServices.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow h-full flex flex-col">
                    <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                            <div className="rounded-lg bg-secondary p-2 flex-shrink-0">
                                {service.logo}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <CardTitle className="text-lg">{service.name}</CardTitle>
                                    {service.premium && (
                                        <Badge variant="premium" className="text-xs">
                                            Premium
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription>{service.category}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="mb-4">{service.description}</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Icons.star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-muted-foreground ml-1">
                  {service.rating} ({service.reviews} reviews)
                </span>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Uses your:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.dataUsed.map((data) => (
                                        <Badge key={data} variant="secondary" className="text-xs">
                                            {data}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="sm">
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
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}