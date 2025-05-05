"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                We're here to help with any questions about our products or
                services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="mt-2 text-gray-500">
                  Our customer service team is available Monday through Friday,
                  9am to 5pm EST.
                </p>
                <a
                  href="tel:+919119295094"
                  className="mt-4 text-green-600 hover:underline"
                >
                  +91 9119295094
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="mt-2 text-gray-500">
                  For general inquiries, product questions, or customer support.
                </p>
                <a
                  href="mailto:contact@tellmeindia.com"
                  className="mt-4 text-green-600 hover:underline"
                >
                  contact@tellmeindia.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="mt-2 text-gray-500">
                  Visit our headquarters or send mail to:
                </p>
                <address className="mt-4 not-italic text-green-600">
                  INOX, C-409, Block C,
                  <br />
                  Vaishali Nagar, Jaipur, Rajasthan 302021
                  <br />
                  India
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-12 md:py-24 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Send Us a Message
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label>Subject</Label>
                <RadioGroup
                  value={formData.subject}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">General Inquiry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="product" id="product" />
                    <Label htmlFor="product">Product Question</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="order" id="order" />
                    <Label htmlFor="order">Order Support</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wholesale" id="wholesale" />
                    <Label htmlFor="wholesale">Wholesale Inquiry</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Visit Our Location
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-lg">
              Our headquarters is located in beautiful Harmony Hills, California
            </p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.718409518364!2d75.73761311068195!3d26.91243047654991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f19cebd3ed%3A0xb800662237f76ca6!2sVed%20Satwa%20International%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746433164836!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vedsatwa Location"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </div>

          <div className="mt-6 text-center text-gray-500">
            <p>
              Open Monday - Friday: 9:00 AM - 5:00 PM PST
              <br />
              Closed on weekends and major holidays
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
