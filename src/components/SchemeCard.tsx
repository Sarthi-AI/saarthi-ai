
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Scheme {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  category: string[];
  state: string;
  sector: string;
  // language: string;
  apply_link: string;
}

interface SchemeCardProps {
  scheme: Scheme;
  language: string;
  animationDelay?: number;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, animationDelay = 0 }) => {
  return (
    <Card className="animate-fade-in w-full" style={{ animationDelay: `${animationDelay}ms` }}>
      <CardHeader className="bg-primary-light rounded-t-lg pb-2">
        <CardTitle className="text-primary text-xl">{scheme.name}</CardTitle>
        <CardDescription className="font-medium text-gray-600">
          {scheme.sector} | {scheme.state === "All" ? "All States" : scheme.state}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="mb-3">{scheme.description}</p>
        <div className="mb-3">
          <h4 className="font-semibold text-gray-700">Eligibility:</h4>
          <p>{scheme.eligibility}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {scheme.category.map((tag, index) => (
            <span
              key={index}
              className="bg-accent px-2 py-1 rounded-full text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-end">
        <Button
          className="bg-secondary hover:bg-secondary-dark"
          onClick={() => window.open(scheme.apply_link, '_blank')}
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchemeCard;
