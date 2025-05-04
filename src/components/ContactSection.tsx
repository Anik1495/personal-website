
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Linkedin, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would be replaced with actual form submission logic
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I will get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-container">
          <h2 className="section-heading">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-1 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-cvblue mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:ferdous.1495@gmail.com" className="text-cvblue hover:underline">ferdous.1495@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="text-cvblue mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-700">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="text-cvblue mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/ferdous-wahid-26033/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cvblue hover:underline"
                        >
                          in/ferdous-wahid-26033
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <User className="text-cvblue mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Professional Profile</p>
                        <a 
                          href="https://iriic.uiu.ac.bd/ferdous-wahid-anik/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cvblue hover:underline"
                        >
                          IRIIC Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-cvblue hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
