"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const grades = [
    "Nursery",
    "LKG",
    "UKG",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
]

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        // Student
        fullName: "",
        dob: "",
        gender: "",
        photo: null as File | null,

        // Parent
        parentName: "",
        relationship: "",
        phone: "",
        email: "",
        occupation: "",
        parentAddress: "",

        // Academic
        gradeApplying: "",
        currentSchool: "",
        lastGrade: "",
        reason: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0] ?? null

            setFormData((prev) => ({
                ...prev,
                [name]: file,
            }))
            return
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSelect = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log(formData)

        toast.success("Admission application submitted successfully!")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="grid gap-10 lg:grid-cols-3 lg:mt-12 mt-8 w-full"
        >
            {/* Student */}
            <div className="space-y-5 w-full">
                <h3 className="text-xl font-semibold">Student Information</h3>

                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter student's full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2 w-full">
                    <Label>Gender *</Label>

                    <Select
                        onValueChange={(value) =>
                            handleSelect("gender", value as string)
                        }
                    >
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="photo">Photo of Student *</Label>
                    <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                    <p className="text-muted-foreground text-xs">
                        Passport size photo
                    </p>
                </div>
            </div>

            {/* Parent */}
            <div className="space-y-5 w-full">
                <h3 className="text-xl font-semibold">
                    Parent / Guardian Information
                </h3>

                <div className="space-y-2">
                    <Label htmlFor="parentName">
                        Parent / Guardian Name *
                    </Label>
                    <Input
                        id="parentName"
                        name="parentName"
                        placeholder="Enter name"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2 w-full">
                    <Label>Relationship *</Label>

                    <Select
                        onValueChange={(value) =>
                            handleSelect("relationship", value as string)
                        }
                    >
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Father">Father</SelectItem>
                            <SelectItem value="Mother">Mother</SelectItem>
                            <SelectItem value="Guardian">Guardian</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                        id="occupation"
                        name="occupation"
                        placeholder="Enter occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="parentAddress">Address</Label>
                    <Input
                        id="parentAddress"
                        name="parentAddress"
                        placeholder="Enter address (if different)"
                        value={formData.parentAddress}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Academic */}
            <div className="space-y-5 w-full">
                <h3 className="text-xl font-semibold">
                    Academic Information
                </h3>

                <div className="space-y-2 w-full">
                    <Label>Grade Applying For *</Label>

                    <Select
                        onValueChange={(value) =>
                            handleSelect("gradeApplying", value as string)
                        }
                    >
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>

                        <SelectContent>
                            {grades.map((grade) => (
                                <SelectItem
                                    key={grade}
                                    value={grade}
                                >
                                    {grade}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="currentSchool">
                        Current School
                    </Label>
                    <Input
                        id="currentSchool"
                        name="currentSchool"
                        placeholder="Enter current school"
                        value={formData.currentSchool}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2 w-full">
                    <Label>Last Grade Completed *</Label>

                    <Select
                        onValueChange={(value) =>
                            handleSelect("lastGrade", value as string)
                        }
                    >
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>

                        <SelectContent>
                            {grades.map((grade) => (
                                <SelectItem
                                    key={grade}
                                    value={grade}
                                >
                                    {grade}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="reason">
                        Why do you want to join our school?
                    </Label>

                    <Textarea
                        id="reason"
                        name="reason"
                        placeholder="Write your answer..."
                        rows={6}
                        value={formData.reason}
                        onChange={handleChange}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-600"
                >
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </form>
    )
}

export default AdmissionForm