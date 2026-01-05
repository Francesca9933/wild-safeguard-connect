import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TutorialStep {
  target: string;
  message: string;
  multiple?: string[]; // For highlighting multiple elements at once
}

interface TutorialProps {
  onComplete: () => void;
  skipPermissions?: boolean;
}

const Tutorial = ({ onComplete, skipPermissions = false }: TutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showGPSRequest, setShowGPSRequest] = useState(false);
  const [showNotificationRequest, setShowNotificationRequest] = useState(false);

  const steps: TutorialStep[] = [
    {
      target: "",
      message: "With these buttons you can report an animal you have encountered somewhere",
      multiple: ["report-top", "report-bottom"]
    },
    {
      target: "games-bottom",
      message: "Here you can find some funny games to learn something with amusement"
    },
    {
      target: "check-bottom",
      message: "Check if someone saw something along the path of your interest"
    },
    {
      target: "",
      message: "Consult reliable sources from our experts",
      multiple: ["articles-top", "articles-bottom"]
    },
    {
      target: "final",
      message: "Have fun out there, but respect yourself and the wildlife!"
    }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (skipPermissions) {
      onComplete();
    } else if (!showGPSRequest) {
      setShowGPSRequest(true);
    } else if (!showNotificationRequest) {
      setShowNotificationRequest(true);
    } else {
      onComplete();
    }
  };

  const handleGPSRequest = (granted: boolean) => {
    if (granted && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(() => {}, () => {});
    }
    setShowGPSRequest(false);
    setShowNotificationRequest(true);
  };

  const handleNotificationRequest = (granted: boolean) => {
    if (granted && 'Notification' in window) {
      Notification.requestPermission();
    }
    onComplete();
  };

  useEffect(() => {
    const step = steps[currentStep];
    const elements: HTMLElement[] = [];

    if (step.multiple) {
      step.multiple.forEach(id => {
        const el = document.querySelector(`[data-tutorial="${id}"]`) as HTMLElement;
        if (el) elements.push(el);
      });
    } else if (step.target) {
      const el = document.querySelector(`[data-tutorial="${step.target}"]`) as HTMLElement;
      if (el) elements.push(el);
    }

    elements.forEach(el => {
      el.style.position = 'relative';
      el.style.zIndex = '1001';
      el.style.boxShadow = '0 0 0 4px rgba(251, 191, 36, 0.8), 0 0 20px 8px rgba(251, 191, 36, 0.4)';
      el.style.borderRadius = '12px';
      el.style.transition = 'all 0.3s ease';
    });

    return () => {
      elements.forEach(el => {
        el.style.position = '';
        el.style.zIndex = '';
        el.style.boxShadow = '';
        el.style.borderRadius = '';
      });
    };
  }, [currentStep]);

  if (showGPSRequest) {
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70" onClick={() => handleGPSRequest(false)} />
        <Card className="relative z-[1001] max-w-md mx-4 bg-gradient-to-br from-amber-100 to-orange-200 border-4 border-amber-500 shadow-strong">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-amber-900">
                Allow WildCall to access your location to enhance performance and provide better recommendations?
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => handleGPSRequest(false)}
                variant="outline"
                className="flex-1"
              >
                Not Now
              </Button>
              <Button
                onClick={() => handleGPSRequest(true)}
                className="flex-1 bg-primary"
              >
                Allow
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showNotificationRequest) {
    return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70" onClick={() => handleNotificationRequest(false)} />
        <Card className="relative z-[1001] max-w-md mx-4 bg-gradient-to-br from-amber-100 to-orange-200 border-4 border-amber-500 shadow-strong">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-amber-900">
                Enable push notifications to stay updated on wildlife sightings and challenges?
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => handleNotificationRequest(false)}
                variant="outline"
                className="flex-1"
              >
                Not Now
              </Button>
              <Button
                onClick={() => handleNotificationRequest(true)}
                className="flex-1 bg-primary"
              >
                Enable
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const step = steps[currentStep];
  const isFinalStep = step.target === "final";

  const getCardPosition = () => {
    if (isFinalStep) {
      return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    }
    
    // Position based on which buttons are highlighted
    if (step.multiple?.includes('report-bottom') || step.target === 'games-bottom' || step.target === 'check-bottom') {
      return 'top-1/4 left-1/2 -translate-x-1/2'; // Center top for bottom nav items
    }
    
    if (step.multiple?.includes('articles-bottom')) {
      return 'top-1/3 left-1/2 -translate-x-1/2'; // Slightly lower for articles
    }
    
    return 'top-1/3 left-1/2 -translate-x-1/2'; // Default center
  };

  return (
    <div className="fixed inset-0 z-[1000]" onClick={handleNextStep}>
      <div className="absolute inset-0 bg-black/70" />
      
      <div className={`absolute ${getCardPosition()} z-[1001]`}>
        <Card className="max-w-xs bg-gradient-to-br from-amber-100 to-orange-200 border-4 border-amber-500 shadow-strong animate-bounce-subtle">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <span className="text-3xl">🐾</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-amber-900">{step.message}</p>
                <p className="text-xs text-white mt-2 font-light">Tap to continue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tutorial;
