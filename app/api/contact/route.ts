import { NextResponse } from "next/server";
import * as z from "zod";

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
  // Note: File handling will be done separately
});

const mediaFormSchema = z.object({
  ...baseFormSchema,
  formType: z.literal("Media Enquiries"),
  publication: z.string().min(2, "Publication name must be at least 2 characters"),
  details: z.string().min(10, "Please provide more details"),
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
  whyVeeville: z.string().min(10, "Please tell us why you want to work at Veeville"),
  // Note: File handling will be done separately
});

// Combined schema for all form types
const formSchema = z.discriminatedUnion("formType", [
  callbackFormSchema,
  internshipFormSchema,
  mediaFormSchema,
  workFormSchema,
]);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body against schema
    const result = formSchema.safeParse(body);
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          error: "Invalid request data",
          details: result.error.issues 
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // TODO: Add your email service integration here
    // Example: Send email using a service like SendGrid, AWS SES, etc.
    console.log("Form submission:", data);

    // For now, we'll just simulate a successful submission
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: "Failed to process your request" 
      },
      { status: 500 }
    );
  }
} 