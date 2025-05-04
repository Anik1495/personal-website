
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Linkedin, User, BookText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
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

  const references = [
    {
      name: "Dr. Md. Asadur Rahman, PhD",
      position: "Assistant Professor",
      department: "Dept of Biomedical Engineering",
      institution: "Military Institute of Science and Technology",
      email: "asadur@bme.mist.ac.bd"
    },
    {
      name: "Major Md. Ashrafuzzaman, PhD",
      position: "Former Associate Professor",
      department: "Dept of Biomedical Engineering",
      institution: "Military Institute of Science and Technology",
      email: "ashraf@bme.mist.ac.bd"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold mb-2 text-cvblue">Contact Me</h1>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch for collaboration opportunities, research inquiries, or professional engagements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-medium mb-4">Contact Information</h3>
                  
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
                    
                    <div className="flex items-start">
                      <BookText className="text-cvblue mr-3 mt-1" size={20} />
                      <div>
                        <p className="font-medium">Google Scholar</p>
                        <a 
                          href="https://scholar.google.com/citations?user=sGR4nnUAAAAJ&hl=en" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cvblue hover:underline"
                        >
                          Google Scholar Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-medium mb-4">References</h3>
                  
                  <div className="space-y-6">
                    {references.map((ref, index) => (
                      <div key={index} className="space-y-1">
                        <h4 className="font-medium text-cvblue">{ref.name}</h4>
                        <p className="text-gray-700">{ref.position}</p>
                        <p className="text-gray-700">{ref.department}</p>
                        <p className="text-gray-700">{ref.institution}</p>
                        <a href={`mailto:${ref.email}`} className="text-cvblue hover:underline">
                          {ref.email}
                        </a>
                        
                        {index < references.length - 1 && (
                          <hr className="my-4 border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif font-medium mb-4">Send Me a Message</h3>
                  
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
                        rows={7}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-cvblue hover:bg-blue-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4">Collaboration Opportunities</h3>
                <p className="text-gray-700">
                  I'm open to collaborations on research projects related to Health Informatics, 
                  Digital Signal Processing, and Machine Learning applications in healthcare. 
                  If you have a project or idea that aligns with my expertise, please reach out using 
                  the contact form or via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
