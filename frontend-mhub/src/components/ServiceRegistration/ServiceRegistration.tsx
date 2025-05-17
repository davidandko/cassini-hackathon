import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from "react";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Icons} from '../Dashboard/Icons.tsx'

export function ServiceRegistrationPage() {
    // Available disease types
    const diseaseTypes = [
        { id: "diabetes", name: "Diabetes", description: "Type 1 and Type 2 diabetes management" },
        { id: "hypertension", name: "Hypertension", description: "High blood pressure monitoring and treatment" },
        { id: "copd", name: "COPD", description: "Chronic obstructive pulmonary disease care" },
        { id: "heart-failure", name: "Heart Failure", description: "Cardiac function monitoring" },
        { id: "arthritis", name: "Arthritis", description: "Joint health and inflammation tracking" },
    ];

    const dataTypes = [
        { id: "blood-glucose", name: "Blood Glucose", disease: ["diabetes"] },
        { id: "blood-pressure", name: "Blood Pressure", disease: ["hypertension", "heart-failure"] },
        { id: "medication-adherence", name: "Medication Adherence", disease: ["diabetes", "hypertension", "copd", "heart-failure"] },
        { id: "activity-levels", name: "Activity Levels", disease: ["diabetes", "hypertension", "heart-failure", "arthritis"] },
        { id: "weight", name: "Weight", disease: ["diabetes", "heart-failure"] },
        { id: "oxygen-saturation", name: "Oxygen Saturation", disease: ["copd", "heart-failure"] },
        { id: "pain-levels", name: "Pain Levels", disease: ["arthritis"] },
    ];

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Main registration form */}
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Join Our Medical Ecosystem</CardTitle>
                            <CardDescription>
                                Register your service to access anonymized patient data and provide value to our users
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Service Information */}
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Service Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="service-name" className="m-2">Service Name *</Label>
                                        <Input id="service-name" placeholder="e.g., DiabetesAI" />
                                    </div>
                                    <div>
                                        <Label htmlFor="service-url" className="m-2">Website URL *</Label>
                                        <Input id="service-url" placeholder="https://your-service.com" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="service-description" className="m-2">Service Description *</Label>
                                    <Textarea
                                        id="service-description"
                                        placeholder="Briefly describe what your service does and how it helps patients..."
                                        rows={3}
                                    />
                                </div>
                            </div>

                            {/* Disease Specialization */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Disease Specialization *</h3>
                                <p className="text-sm text-muted-foreground">
                                    Select the disease types your service specializes in. You'll need to complete additional verification for each disease type.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {diseaseTypes.map((disease) => (
                                        <Card key={disease.id} className="hover:bg-accent cursor-pointer">
                                            <CardHeader className="p-4">
                                                <div className="flex items-center space-x-3">
                                                    <Checkbox id={`disease-${disease.id}`} />
                                                    <Label htmlFor={`disease-${disease.id}`} className="flex-col items-start">
                                                        <div className="font-medium">{disease.name}</div>
                                                        <div className="text-sm text-muted-foreground">{disease.description}</div>
                                                    </Label>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Data Requirements */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Data Requirements</h3>
                                <p className="text-sm text-muted-foreground">
                                    Select the types of data your service needs to function effectively.
                                </p>

                                <div className="space-y-3">
                                    {dataTypes.map((dataType) => (
                                        <div key={dataType.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                                            <Checkbox id={`data-${dataType.id}`} />
                                            <Label htmlFor={`data-${dataType.id}`} className="flex-1">
                                                <div className="font-medium">{dataType.name}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Relevant for: {dataType.disease.map(d => diseaseTypes.find(dt => dt.id === d)?.name).join(", ")}
                                                </div>
                                            </Label>
                                            <Badge variant="outline" className="text-xs">
                                                {dataType.disease.length === diseaseTypes.length ? "All Diseases" : `${dataType.disease.length} Diseases`}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Integration Type */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">Integration Type *</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Card className="hover:border-primary cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <Checkbox id="integration-api" />
                                                <Label htmlFor="integration-api" className="flex-1">
                                                    <div className="font-medium">API Integration</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Connect directly to our API
                                                    </div>
                                                </Label>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                    <Card className="hover:border-primary cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <Checkbox id="integration-webhook" />
                                                <Label htmlFor="integration-webhook" className="flex-1">
                                                    <div className="font-medium">Webhooks</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Receive real-time updates
                                                    </div>
                                                </Label>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                    <Card className="hover:border-primary cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <Checkbox id="integration-export" />
                                                <Label htmlFor="integration-export" className="flex-1">
                                                    <div className="font-medium">Data Export</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Periodic data dumps
                                                    </div>
                                                </Label>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>

                            {/* Data Usage Agreement */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">Data Usage Agreement</h3>
                                <div className="p-4 border rounded-lg bg-muted/50">
                                    <div className="space-y-2">
                                        <p className="text-sm">
                                            By registering your service, you agree to:
                                        </p>
                                        <ul className="text-sm space-y-2 list-disc pl-5">
                                            <li>Use patient data only for the purposes explicitly approved</li>
                                            <li>Maintain strict data security and privacy standards</li>
                                            <li>Not share or sell data to third parties without explicit consent</li>
                                            <li>Comply with all applicable healthcare regulations (HIPAA, GDPR, etc.)</li>
                                            <li>Submit to periodic audits of your data handling practices</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="agree-terms" required />
                                    <Label htmlFor="agree-terms" className="text-sm">
                                        I agree to the Data Usage Agreement and Terms of Service
                                    </Label>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>
                                <Icons.send className="mr-2 h-4 w-4" />
                                Submit Application
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Sidebar with information */}
                <div className="md:w-80 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Icons.shield className="h-5 w-5 text-green-600" />
                                Our Ecosystem Benefits
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Icons.users className="h-5 w-5 mt-0.5 text-blue-500" />
                                <div>
                                    <h4 className="font-medium">Access to Patients</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Connect with thousands of patients managing chronic conditions
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icons.database className="h-5 w-5 mt-0.5 text-purple-500" />
                                <div>
                                    <h4 className="font-medium">Rich Data</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Comprehensive, longitudinal health data from connected devices
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icons.badgeCheck className="h-5 w-5 mt-0.5 text-amber-500" />
                                <div>
                                    <h4 className="font-medium">Trust & Credibility</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Verified partners gain trust from our patient community
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Icons.zap className="h-5 w-5 text-yellow-500" />
                                Quick Start Guide
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="w-6 h-6 flex items-center justify-center p-0">1</Badge>
                                    <span className="font-medium">Complete this form</span>
                                </div>
                                <p className="text-sm text-muted-foreground pl-8">
                                    Provide details about your service
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="w-6 h-6 flex items-center justify-center p-0">2</Badge>
                                    <span className="font-medium">Verification</span>
                                </div>
                                <p className="text-sm text-muted-foreground pl-8">
                                    Our team reviews your application (2-3 business days)
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="w-6 h-6 flex items-center justify-center p-0">3</Badge>
                                    <span className="font-medium">Technical Integration</span>
                                </div>
                                <p className="text-sm text-muted-foreground pl-8">
                                    Access our developer portal and documentation
                                </p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="w-6 h-6 flex items-center justify-center p-0">4</Badge>
                                    <span className="font-medium">Go Live</span>
                                </div>
                                <p className="text-sm text-muted-foreground pl-8">
                                    Your service appears in our marketplace
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Icons.message className="h-5 w-5 text-blue-500" />
                                Need Help?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                <Icons.mail className="mr-2 h-4 w-4" />
                                Contact Partnerships Team
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}