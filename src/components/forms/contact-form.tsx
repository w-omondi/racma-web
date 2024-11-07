import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";


// Define Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().email("Invalid email address").min(1, {message: "Email is required."}),
    message: z.string().min(1, {message: "Message is required."}),
});

type ContactFormData = z.infer<typeof contactSchema>;
export const ContactForm = () => {
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
    )
}
export default ContactForm