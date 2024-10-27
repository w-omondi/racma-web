"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

// Define Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().email("Invalid email address").min(1, {message: "Email is required."}),
    message: z.string().min(1, {message: "Message is required."}),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactPage() {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form Data:', data);
        // Simulate a form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Your message has been sent successfully!");
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} className="w-full"/>
                                        </FormControl>
                                        <FormDescription>
                                            Enter your full name.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="example@mail.com" type="email" {...field}
                                                   className="w-full"/>
                                        </FormControl>
                                        <FormDescription>
                                            We&#39;ll never share your email.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message here..." {...field}
                                                      className="w-full h-32"/>
                                        </FormControl>
                                        <FormDescription>
                                            Write your message or inquiry.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="mt-8 text-center">
                <h2 className="text-xl font-bold mb-2">Our Address</h2>
                <p className="mb-1">Racma Services</p>
                <p className="mb-1">Hermes House, Opposite Gill House</p>
                <p className="mb-1">Nairobi,Kenya</p>
                <p>Email: racmaservices@gmail.com</p>
                <p>Phone: +254723572919 +254762006440 +254790282248</p>
            </div>
        </div>
    );
}

export default ContactPage;
