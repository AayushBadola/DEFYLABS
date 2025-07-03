
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  process: string[];
  gradient: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  process,
  gradient,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { elementRef } = useScrollAnimation({
    animationType: 'scale',
    delay: delay,
    duration: 0.8,
    triggerOnce: true
  });

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/aayush-badola2/consultationmeet'
      });
    }
  };

  return (
    <Card 
      ref={elementRef}
      className="group service-card-hover transition-all duration-700 border-0 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="relative pb-0">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-sky-500 transition-colors duration-300">
            {title}
          </CardTitle>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-sky-500 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-sky-500 transition-all duration-300" />
          )}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="space-y-3 mb-6">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={feature} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {isExpanded && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Complete Features:</h4>
              <div className="grid grid-cols-1 gap-2">
                {features.map((feature, idx) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
              <div className="grid grid-cols-1 gap-2">
                {benefits.map((benefit, idx) => (
                  <div key={benefit} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Our Process:</h4>
              <div className="space-y-2">
                {process.map((step, idx) => (
                  <div key={step} className="flex items-start space-x-2">
                    <span className="text-xs font-bold text-sky-500 mt-0.5">{idx + 1}.</span>
                    <span className="text-xs text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="border-t pt-4 mt-6">
          <Badge variant="outline" className="mb-4">
            Custom Pricing Based on Your Needs
          </Badge>
          
          <Button 
            size="sm" 
            className="w-full gradient-bg modern-hover transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              openCalendly();
            }}
          >
            Get Custom Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
