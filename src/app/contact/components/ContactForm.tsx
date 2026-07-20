"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const FormSubmit = ({
    event,
    fullName,
    email,
    message,
    subject,
}: {
    event: FormEvent<HTMLFormElement>
    fullName: string
    email: string
    message: string
    subject: string | null
}) => {
    event.preventDefault()

    if (!fullName.trim() || !email.trim() || !message.trim()) {
        toast.error("Please fill in all required fields.")
        return
    }

    if (!subject) {
        toast.error("Please select a subject.")
        return
    }

    subject = toSlug(subject)

    toast.success("Message sent successfully!")
    console.log({ fullName, email, message, subject })
}

const toSlug = (label: string) =>
    label.toLowerCase().replace(/\s+/g, "-")


const ContactForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState<string | null>(null)

    const items = [
        { label: "ADMISSIONS INQUIRY", value: "ADMISSIONS INQUIRY" },
        { label: "GENERAL FEEDBACK", value: "GENERAL FEEDBACK" },
        { label: "ACADEMIC QUESTION", value: "ACADEMIC QUESTION" },
        { label: "OTHER", value: "OTHER" },
    ]

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Contact us directly</CardTitle>
                <CardDescription>
                    Have a question or need assistance? Fill out the form below, and our team will get back to you shortly.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={(event) =>
                        FormSubmit({ event, fullName, email, message, subject })
                    }
                >
                    <div className="flex flex-col gap-6">

                        {/* Name  & Phone*/}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="text" placeholder="123-456-7890" required />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        {/* Subject */}
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Subject</Label>

                            <Select value={subject} onValueChange={(val) => setSubject(val)}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Subject</SelectLabel>
                                        {items.map((item) => (
                                            <SelectItem key={item.value} value={item.value}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Message */}
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                maxLength={500}
                                style={{ resize: "none" }}
                                className="h-36"
                                id="message"
                                placeholder="Type your message here."
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full h-14 mt-6 bg-blue-700 hover:bg-blue-600">
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card >
    )
}

export default ContactForm

