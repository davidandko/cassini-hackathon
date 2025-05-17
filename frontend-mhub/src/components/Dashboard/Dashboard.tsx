import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import {Progress} from "@/components/ui/progress.tsx";
import { Icons } from "./Icons";
import {BarChart, LineChart} from "@/components/Dashboard/Charts.tsx";

export function MedicalDashboard() {
    const diseaseInfo = {
        name: "Type 2 Diabetes",
        diagnosisDate: "March 15, 2022",
        severity: "Moderate",
        description: "A chronic condition that affects the way your body processes blood sugar (glucose)."
    };

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


    const connectedDevices = [
        {
            id: "device-1",
            name: "Fitbit Sense",
            type: "smartwatch",
            lastSynced: "2 hours ago",
            battery: 78,
            metrics: ["heart rate", "steps", "sleep"]
        },
        {
            id: "device-2",
            name: "Freestyle Libre",
            type: "glucose monitor",
            lastSynced: "1 hour ago",
            battery: 45,
            metrics: ["blood glucose"]
        }
    ];


    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
            {/* Disease Information Card */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>Your Condition</CardTitle>
                            <CardDescription>Overview and management</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                            <Icons.edit className="mr-2 h-4 w-4" />
                            Edit Details
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">{diseaseInfo.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                Diagnosed on {diseaseInfo.diagnosisDate} • {diseaseInfo.severity} severity
                            </p>
                        </div>

                        <p className="text-sm">{diseaseInfo.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-medium mb-2">Treatment Plan</h4>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                                        Metformin 500mg twice daily
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                                        Weekly exercise (150 mins)
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.alert className="mr-2 h-4 w-4 text-yellow-500" />
                                        Low-carb diet (pending nutritionist)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Next Steps</h4>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                    <li className="flex items-center">
                                        <Icons.calendar className="mr-2 h-4 w-4 text-blue-500" />
                                        Doctor visit in 2 weeks
                                    </li>
                                    <li className="flex items-center">
                                        <Icons.bloodTest className="mr-2 h-4 w-4 text-blue-500" />
                                        HbA1c test due next month
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Stats Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Health Snapshot</CardTitle>
                    <CardDescription>Current status at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Blood Sugar (mg/dL)</span>
                            <span className={`text-sm font-medium ${
                                healthMetrics.bloodSugar.current > healthMetrics.bloodSugar.targetRange[1]
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}>
                {healthMetrics.bloodSugar.current}
              </span>
                        </div>
                        <Progress
                            value={(healthMetrics.bloodSugar.current / 200) * 100}
                            indicatorColor={
                                healthMetrics.bloodSugar.current > healthMetrics.bloodSugar.targetRange[1]
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Target: {healthMetrics.bloodSugar.targetRange[0]}-{healthMetrics.bloodSugar.targetRange[1]} mg/dL
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">HbA1c (%)</span>
                            <span className={`text-sm font-medium ${
                                healthMetrics.hba1c.current > 7.0
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}>
                {healthMetrics.hba1c.current}
              </span>
                        </div>
                        <Progress
                            value={(healthMetrics.hba1c.current / 10) * 100}
                            indicatorColor={
                                healthMetrics.hba1c.current > 7.0
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Target: {healthMetrics.hba1c.target}
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Weight (lbs)</span>
                            <span className={`text-sm font-medium ${
                                healthMetrics.weight.current > healthMetrics.weight.target
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}>
                {healthMetrics.weight.current}
              </span>
                        </div>
                        <Progress
                            value={(healthMetrics.weight.current / 250) * 100}
                            indicatorColor={
                                healthMetrics.weight.current > healthMetrics.weight.target
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Target: {healthMetrics.weight.target} lbs
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Blood Sugar Trends Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Blood Sugar Trends</CardTitle>
                    <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <LineChart
                        data={healthMetrics.bloodSugar.history.map((value, index) => ({
                            day: index + 1,
                            value
                        }))}
                        targetRange={healthMetrics.bloodSugar.targetRange}
                    />
                </CardContent>
            </Card>

            {/* Weight Trends Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Weight Progress</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <BarChart
                        data={healthMetrics.weight.history.map((value, index) => ({
                            week: `Week ${index + 1}`,
                            value
                        }))}
                        target={healthMetrics.weight.target}
                    />
                </CardContent>
            </Card>

            {/* Connected Devices Card */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Connected Devices</CardTitle>
                            <CardDescription>IoT devices sharing health data</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                            <Icons.plus className="mr-2 h-4 w-4" />
                            Add Device
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {connectedDevices.map((device) => (
                            <div key={device.id} className="flex items-center p-4 border rounded-lg">
                                <div className="mr-4">
                                    {device.type === "smartwatch" ? (
                                        <Icons.smartwatch className="h-10 w-10 text-blue-500" />
                                    ) : (
                                        <Icons.medical className="h-10 w-10 text-green-500" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{device.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {device.metrics.join(", ")}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">
                                        Last synced: {device.lastSynced}
                                    </p>
                                    <div className="flex items-center mt-1">
                                        <Icons.battery className="h-4 w-4 mr-1" />
                                        <span className="text-xs">{device.battery}%</span>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm" className="ml-4">
                                    <Icons.settings className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Emergency Card */}
            <Card className="bg-red-50 border-red-200">
                <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                        <Icons.alert className="h-5 w-5 mr-2" />
                        Emergency Actions
                    </CardTitle>
                    <CardDescription className="text-red-500">
                        Use in case of severe symptoms
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="destructive" className="w-full">
                        <Icons.emergency className="h-4 w-4 mr-2" />
                        Contact Doctor Now
                    </Button>
                    <Button variant="outline" className="w-full border-red-300 text-red-600">
                        <Icons.phone className="h-4 w-4 mr-2" />
                        Call Emergency Services
                    </Button>
                    <Button variant="outline" className="w-full border-red-300 text-red-600">
                        <Icons.hospital className="h-4 w-4 mr-2" />
                        Locate Nearest Hospital
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}