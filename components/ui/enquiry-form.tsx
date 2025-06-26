"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ContactContent } from "@/content/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Base form schema
const baseFormSchema = {
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
};

// Form type specific schemas
const callbackFormSchema = z.object({
  ...baseFormSchema,
  formType: z.literal("Request a Callback"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyLocation: z.string().optional(),
  message: z.string().optional(),
});

const internshipFormSchema = z.object({
  ...baseFormSchema,
  formType: z.literal("Veeville Internship Program"),
  collegeName: z.string().min(2, "College name must be at least 2 characters"),
  internshipType: z.enum(["design", "development", "marketing"], {
    required_error: "Please select an internship type",
  }),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  portfolioLink: z.string().url("Please enter a valid URL"),
  whyVeeville: z.string().optional(),
  cv: z.any().optional(), // File handling
});

const mediaFormSchema = z.object({
  ...baseFormSchema,
  formType: z.literal("Media Enquiries"),
  publication: z
    .string()
    .min(2, "Publication name must be at least 2 characters"),
  details: z.string().min(10, "Please provide more details"),
});

const employeeVerificationFormSchema = z.object({
  formType: z.literal("Employee Verification"),
});

const workFormSchema = z.object({
  ...baseFormSchema,
  formType: z.literal("Work at Veeville"),
  team: z.enum(["design", "development", "marketing"], {
    required_error: "Please select a team",
  }),
  workExperience: z.string().optional(),
  phone: z.string().optional(),
  linkToWork: z.string().url("Please enter a valid URL").optional(),
  whyVeeville: z
    .string()
    .min(10, "Please tell us why you want to work at Veeville"),
  cv: z.any().optional(), // File handling
});

// Combined schema for all form types
const formSchema = z.discriminatedUnion("formType", [
  callbackFormSchema,
  internshipFormSchema,
  mediaFormSchema,
  employeeVerificationFormSchema,
  workFormSchema,
]);

type FormValues = z.infer<typeof formSchema>;

type FormType =
  | "Request a Callback"
  | "Veeville Internship Program"
  | "Media Enquiries"
  | "Employee Verification"
  | "Work at Veeville";

interface EnquiryFormProps {
  content: ContactContent;
}

export default function EnquiryForm({ content }: EnquiryFormProps) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const { toast } = useToast();
  const [formType, setFormType] = useState<FormType>("Request a Callback");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formType: "Request a Callback",
      name: "",
      email: "",
      companyName: "",
      companyLocation: "",
      message: "",
    } as FormValues,
  });

  const { isSubmitting } = form.formState;

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleFormTypeChange = (value: FormType) => {
    setFormType(value);

    // Reset form with new defaults based on form type
    let defaultValues: Partial<FormValues> = {
      formType: value,
      name: "",
      email: "",
    };

    switch (value) {
      case "Request a Callback":
        defaultValues = {
          ...defaultValues,
          companyName: "",
          companyLocation: "",
          message: "",
        };
        break;
      case "Veeville Internship Program":
        defaultValues = {
          ...defaultValues,
          collegeName: "",
          internshipType: "design",
          startDate: "",
          endDate: "",
          portfolioLink: "",
          whyVeeville: "",
        };
        break;
      case "Media Enquiries":
        defaultValues = {
          ...defaultValues,
          publication: "",
          details: "",
        };
        break;
      case "Work at Veeville":
        defaultValues = {
          ...defaultValues,
          team: "design",
          workExperience: "",
          phone: "",
          linkToWork: "",
          whyVeeville: "",
        };
        break;
    }

    form.reset(defaultValues as FormValues);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("cv", file);
      setSelectedFileName(file.name);
    }
  };

  async function onSubmit(data: FormValues) {
    try {
      // Create FormData for file uploads
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      form.reset();
      setSelectedFileName("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  const renderFormFields = () => {
    switch (formType) {
      case "Request a Callback":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Your Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email ID *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Company Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Company Location
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company location"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Tell Us More
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] w-full resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );

      case "Veeville Internship Program":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Your Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email ID *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="collegeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      College Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your college name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="internshipType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Type of Internship *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select internship type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Start Date *
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      End Date *
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="portfolioLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Portfolio Link *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-portfolio.com"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel className="text-sm font-medium">CV *</FormLabel>
              <div className="relative">
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
                <div className="flex items-center border rounded-md p-2">
                  <span className="flex-1 truncate text-sm">
                    {selectedFileName || "Choose a file"}
                  </span>
                  <Button
                    type="button"
                    variant="secondary"
                    className="ml-2"
                    onClick={() =>
                      document
                        .querySelector<HTMLInputElement>('input[type="file"]')
                        ?.click()
                    }
                  >
                    Browse
                  </Button>
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="whyVeeville"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Why Veeville?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you want to join Veeville..."
                      className="min-h-[120px] w-full resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );

      case "Media Enquiries":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Your Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email ID *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="publication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Publication *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your publication name"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    More Details *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your enquiry..."
                      className="min-h-[120px] w-full resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );

      case "Employee Verification":
        return (
          <div className="flex items-center justify-center py-8">
            <div className="text-center space-y-4 max-w-md mx-auto">
              <p className="text-muted-foreground">
                If you need any help with verifying the employment of a current
                or former Veeville employee, please email{" "}
                <a
                  href="mailto:getpersonal@veeville.com"
                  className="text-[#5a4a42] hover:text-[#333333] underline transition-colors duration-200 font-medium"
                >
                  getpersonal@veeville.com
                </a>
              </p>
            </div>
          </div>
        );

      case "Work at Veeville":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Your Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email ID *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="team"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Please choose a team *
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="workExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Work Experience
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Years of experience"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1234567890"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="linkToWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Link To Work
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-portfolio.com"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
              <FormLabel className="text-sm font-medium">Upload CV *</FormLabel>
              <div className="relative">
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
                <div className="flex items-center border rounded-md p-2">
                  <span className="flex-1 truncate text-sm">
                    {selectedFileName || "Choose a file"}
                  </span>
                  <Button
                    type="button"
                    variant="secondary"
                    className="ml-2"
                    onClick={() =>
                      document
                        .querySelector<HTMLInputElement>('input[type="file"]')
                        ?.click()
                    }
                  >
                    Browse
                  </Button>
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="whyVeeville"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Why Veeville? *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us why you want to join Veeville..."
                      className="min-h-[120px] w-full resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5a4a42] hover:bg-[#333333] text-white">
          Enquire Now
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[600px] h-[90vh] max-h-[800px] flex flex-col overflow-hidden">
        <DialogHeader className="px-6 py-4">
          <DialogTitle className="text-xl font-semibold">
            How can we help you?
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Please fill out the form below and we'll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 overflow-y-auto px-6"
          >
            <div className="space-y-6 pb-6">
              <FormField
                control={form.control}
                name="formType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      How can we help you? *
                    </FormLabel>
                    <Select
                      onValueChange={(value: FormType) => {
                        field.onChange(value);
                        handleFormTypeChange(value);
                      }}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select form type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Request a Callback">
                          Request a Callback
                        </SelectItem>
                        <SelectItem value="Veeville Internship Program">
                          Veeville Internship Program
                        </SelectItem>
                        <SelectItem value="Media Enquiries">
                          Media Enquiries
                        </SelectItem>
                        <SelectItem value="Employee Verification">
                          Employee Verification
                        </SelectItem>
                        <SelectItem value="Work at Veeville">
                          Work at Veeville
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-6">{renderFormFields()}</div>
            </div>
          </form>
        </Form>
        {formType !== "Employee Verification" && (
          <DialogFooter className="px-6 py-4 border-t">
            <Button
              type="submit"
              className="w-full bg-[#5a4a42] hover:bg-[#333333] text-white transition-colors"
              disabled={isSubmitting}
              onClick={form.handleSubmit(onSubmit)}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
