// components/dashboard-preview.tsx
import { Card } from "@/components/ui/card";
import { Icons } from './Dashboard/Icons.tsx'
import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {LineChart} from "@/components/Dashboard/Charts.tsx";

export function DashboardPreview() {

    const healthMetrics = {
        bloodSugar: {
            current: 142,
            targetRange: [70, 130],
            trend: "up",
            history: [120, 135, 130, 142, 138, 145]
        },
        hba1c: {
            current: 6.8,
            target: "<7.0",
            history: [7.2, 7.0, 6.9, 6.8]
        },
        weight: {
            current: 185,
            target: 175,
            history: [192, 188, 185, 183, 185]
        }
    };
    return (
        <Card className="relative overflow-hidden border-0 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20" />
            <div className="relative p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="font-medium">Diabetes Management Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Sample preview - your actual data will appear here</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Interactive Demo
                    </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                        { name: "Blood Sugar", value: "142", unit: "mg/dL", trend: "up" },
                        { name: "HbA1c", value: "6.8", unit: "%", trend: "stable" },
                        { name: "Medication", value: "92", unit: "% adherence", trend: "up" },
                    ].map((metric) => (
                        <Card key={metric.name} className="p-4">
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">{metric.name}</span>
                                {metric.trend === "up" ? (
                                    <Icons.trendingUp className="h-4 w-4 text-green-500" />
                                ) : metric.trend === "down" ? (
                                    <Icons.trendingDown className="h-4 w-4 text-red-500" />
                                ) : (
                                    <Icons.trendingFlat className="h-4 w-4 text-blue-500" />
                                )}
                            </div>
                            <div className="mt-1">
                                <span className="text-2xl font-bold">{metric.value}</span>
                                <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <LineChart
                        data={healthMetrics.bloodSugar.history.map((value, index) => ({
                            day: index + 1,
                            value
                        }))}
                        targetRange={healthMetrics.bloodSugar.targetRange}
                    />
                </div>
            </div>
        </Card>
    );
}