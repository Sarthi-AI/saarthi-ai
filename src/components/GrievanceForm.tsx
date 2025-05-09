
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { sampleSchemes } from '@/data/sampleSchemes';

// Create a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  age: z.string().refine((val) => {
    const age = parseInt(val);
    return !isNaN(age) && age >= 18 && age <= 120;
  }, { message: 'Age must be between 18 and 120' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters' }),
  schemeId: z.string({ required_error: 'Please select a scheme' }),
  grievanceType: z.string({ required_error: 'Please select a grievance type' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const grievanceTypes = [
  'Eligibility Issues',
  'Application Processing Delays',
  'Benefit Not Received',
  'Incorrect Benefit Amount',
  'Poor Service Experience',
  'Documentation Problems',
  'Other'
];

const GrievanceForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: '',
      email: '',
      phone: '',
      address: '',
      schemeId: '',
      grievanceType: '',
      description: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, this would send data to a server
    console.log('Grievance submitted:', data);
    
    // Find the selected scheme name for the toast message
    const selectedScheme = sampleSchemes.find(scheme => scheme.name === data.schemeId);
    
    toast({
      title: 'Grievance submitted successfully',
      description: `Your complaint regarding ${selectedScheme?.name || 'the scheme'} has been recorded.`,
    });
    
    // Reset the form
    form.reset();
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">File a Grievance</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Your age" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* Grievance Details */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium">Grievance Details</h3>
            
            <FormField
              control={form.control}
              name="schemeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Scheme</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a scheme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sampleSchemes.map((scheme) => (
                        <SelectItem key={scheme.name} value={scheme.name}>
                          {scheme.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="grievanceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grievance Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a grievance type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {grievanceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detailed description of your grievance"
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit" className="w-full md:w-auto">
            Submit Grievance
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GrievanceForm;
