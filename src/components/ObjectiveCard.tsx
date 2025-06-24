import React from "react";
import { AnimatedCard } from "./ui/animated-card";
import { Calendar, Users, BarChart3, Target, Award } from "lucide-react";

interface Objective {
  text: string;
  icon: React.ReactNode;
}

interface ObjectiveCardProps {
  title: string;
  status?: "active" | "planned";
  objectives: Objective[];
  showFocusArea?: boolean;
}

export const ObjectiveCard = ({
  title,
  status = "planned",
  objectives,
  showFocusArea = false,
}: ObjectiveCardProps) => {
  return (
    <AnimatedCard title={title} status={status}>
      <div className="space-y-1">
        <h4 className="text-sm text-arshield-gray font-medium mb-3">Strategic Objectives</h4>
        <ul className="space-y-4">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="text-arshield-orange flex-shrink-0 mt-0.5">
                {objective.icon}
              </div>
              <span className="text-arshield-gray text-sm">{objective.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {showFocusArea && (
        <div className="mt-6 flex items-center">
          <Award className="h-5 w-5 text-arshield-orange mr-2" />
          <span className="text-arshield-orange font-medium text-sm">Current Focus Area</span>
        </div>
      )}
    </AnimatedCard>
  );
};

// Example usage component
export const ObjectiveCardExample = () => {
  const objectives = [
    {
      text: "Launch MSSP services",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      text: "Form core security team",
      icon: <Users className="h-5 w-5" />,
    },
    {
      text: "Establish hybrid SOC setup",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      text: "Onboard first 50 clients",
      icon: <Users className="h-5 w-5" />,
    },
    {
      text: "Achieve ₹4.15 Cr revenue",
      icon: <Target className="h-5 w-5" />,
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <ObjectiveCard 
        title="Foundation Year" 
        status="active" 
        objectives={objectives}
        showFocusArea={true}
      />
    </div>
  );
}; 