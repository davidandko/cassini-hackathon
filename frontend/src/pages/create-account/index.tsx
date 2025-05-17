import { useState } from 'react'
import {Button} from "../../components/ui/button.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../components/ui/card.tsx";
import {Label} from "../../components/ui/label.tsx";
import {RadioGroup, RadioGroupItem} from "../../components/ui/radio-group.tsx";
import {Input} from "../../components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../components/ui/select.tsx";

type AccountType = 'standalone' | 'referral'

interface UserData {
    accountType: AccountType
    firstName: string
    lastName: string
    email: string
    phone: string
    country: string
    age: string
    referralCode: string
}

export default function CreateAccountPage() {
    const [step, setStep] = useState<'type' | 'form'>('type')
    const [userData, setUserData] = useState<UserData>({
        accountType: 'standalone',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        age: '',
        referralCode: ''
    })

    const handleAccountTypeChange = (type: AccountType) => {
        setUserData({ ...userData, accountType: type })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleCountryChange = (value: string) => {
        setUserData({ ...userData, country: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', userData)
    }

    const proceedToForm = () => {
        if (userData.accountType === 'referral' && !userData.referralCode) {
            alert('Please enter a referral code')
            return
        }
        setStep('form')
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white border-none shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-blue-800 text-center">
                        {step === 'type' ? 'Choose Account Type' : 'Complete Registration'}
                    </CardTitle>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        {step === 'type' ? (
                            <>
                                <div className="space-y-2">
                                    <Label className="text-blue-700">I want to create a:</Label>
                                    <RadioGroup
                                        defaultValue="standalone"
                                        className="grid gap-4 grid-cols-2 mb-2"
                                        onValueChange={(value: AccountType) => handleAccountTypeChange(value)}
                                    >
                                        <div>
                                            <RadioGroupItem value="standalone" id="standalone" className="peer sr-only" />
                                            <Label
                                                htmlFor="standalone"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-blue-200 bg-white p-4 hover:bg-blue-50 hover:text-blue-600 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                                            >
                                                <span className="font-medium">Standalone Account</span>
                                                <span className="text-xs text-gray-500 text-center mt-2">
                          Create an account without a doctor referral
                        </span>
                                            </Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value="referral" id="referral" className="peer sr-only" />
                                            <Label
                                                htmlFor="referral"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-blue-200 bg-white p-4 hover:bg-blue-50 hover:text-blue-600 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                                            >
                                                <span className="font-medium">Doctor Referral</span>
                                                <span className="text-xs text-gray-500 text-center mt-2">
                          I have a referral code from my doctor
                        </span>
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {userData.accountType === 'referral' && (
                                    <div className="space-y-2 mb-2">
                                        <Label htmlFor="referralCode" className="text-blue-700">
                                            Referral Code
                                        </Label>
                                        <Input
                                            id="referralCode"
                                            name="referralCode"
                                            placeholder="Enter your referral code"
                                            value={userData.referralCode}
                                            onChange={handleInputChange}
                                            className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                        />
                                    </div>
                                )}
                            </>
                        ) : (
                            <div >
                                {userData.accountType === 'standalone' ? (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-blue-700">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="John"
                                                    required
                                                    value={userData.firstName}
                                                    onChange={handleInputChange}
                                                    className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-blue-700">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Doe"
                                                    required
                                                    value={userData.lastName}
                                                    onChange={handleInputChange}
                                                    className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-blue-700">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                value={userData.email}
                                                onChange={handleInputChange}
                                                className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-blue-700">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 123-4567"
                                                required
                                                value={userData.phone}
                                                onChange={handleInputChange}
                                                className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="country" className="text-blue-700">
                                                    Country
                                                </Label>
                                                <Select
                                                    onValueChange={handleCountryChange}
                                                    value={userData.country}
                                                    required
                                                >
                                                    <SelectTrigger className="border-blue-300 focus:ring-blue-200 focus:border-blue-500">
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="us">United States</SelectItem>
                                                        <SelectItem value="ca">Canada</SelectItem>
                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                        <SelectItem value="au">Australia</SelectItem>
                                                        <SelectItem value="de">Germany</SelectItem>
                                                        {/* Add more countries as needed */}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="age" className="text-blue-700">
                                                    Age
                                                </Label>
                                                <Input
                                                    id="age"
                                                    name="age"
                                                    type="number"
                                                    min="1"
                                                    max="120"
                                                    placeholder="30"
                                                    required
                                                    value={userData.age}
                                                    onChange={handleInputChange}
                                                    className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="text-blue-600 mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="48"
                                                height="48"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mx-auto"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-blue-800 mb-2">
                                            Doctor Referral Verified
                                        </h3>
                                        <p className="text-gray-600">
                                            Your referral code <span className="font-semibold">{userData.referralCode}</span> has been accepted.
                                            Please complete your contact information.
                                        </p>

                                        <div className="mt-6 space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-blue-700">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    required
                                                    value={userData.email}
                                                    onChange={handleInputChange}
                                                    className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-blue-700">
                                                    Phone Number
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+1 (555) 123-4567"
                                                    required
                                                    value={userData.phone}
                                                    onChange={handleInputChange}
                                                    className="border-blue-300 focus:ring-blue-200 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        {step === 'form' ? (
                            <>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="border-blue-300 text-blue-700 hover:bg-blue-50"
                                    onClick={() => setStep('type')}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700"
                                >
                                    Complete Registration
                                </Button>
                            </>
                        ) : (
                            <Button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={proceedToForm}
                                disabled={userData.accountType === 'referral' && !userData.referralCode}
                            >
                                Continue
                            </Button>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}