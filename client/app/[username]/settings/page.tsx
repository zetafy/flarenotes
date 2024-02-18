"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const formSchema = z.object({
    username: z.string().min(2).max(50).min(4, { message: "Username must be at least 4 characters long." }),
    email: z.string().regex(emailRegex, "Please enter a valid email address"),
    password: z.string().regex(passwordRegex, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
    description: z.string().min(0).max(300, { message: "Your description exceeds the 300 character limit." })
});




interface Params {
    params: { username: string }
}

export default function SettingsPage({ params }: Params) {
    const { username } = params;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-black">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto dark:bg-black">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Username:</FormLabel>
                                    <FormControl>
                                        <Input id="user" placeholder="Username" {...field} />

                                    </FormControl>
                                    <FormMessage>
                                        {error && <p>{error.message}</p>}
                                    </FormMessage>
                                </FormItem>)} />

                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field: countryField }) => (
                                <FormItem>
                                    <FormLabel>Country:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Country" {...countryField} />
                                    </FormControl>

                                </FormItem>)} />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Password:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {error && <p>{error.message}</p>}
                                    </FormMessage>
                                </FormItem>)} />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {error && <p>{error.message}</p>}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field, fieldState: { error } }) => (
                                <FormItem>
                                    <FormLabel>Description:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage>
                                        {error && <p>{error.message}</p>}
                                    </FormMessage>
                                </FormItem>
                            )}
                        />



                        <Button type="submit">Save</Button>
                    </form>
                </Form>
            </div>
        </div >
    );
}
