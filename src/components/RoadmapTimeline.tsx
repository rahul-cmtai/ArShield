import React from "react";
import { Timeline } from "./ui/timeline";
import { Calendar, Users, BarChart3, Target, Award, ChartPie } from "lucide-react";
import { AnimatedCard } from "./ui/animated-card";

interface RoadmapPhase {
  year: string;
  phase: string;
  status: string;
  goals: string[];
}

export function RoadmapTimeline({ roadmapData }: { roadmapData: RoadmapPhase[] }) {
  const timelineData = roadmapData.map((phase) => {
    return {
      title: phase.year,
      content: (
        <AnimatedCard
          title={phase.phase}
          status={phase.status === 'current' ? 'active' : 'planned'}
          className="w-full md:max-w-md"
        >
          <div>
            <h4 className="text-sm text-arshield-gray font-medium mb-2">Strategic Objectives</h4>
            <ul className="space-y-3">
              {phase.goals.map((goal, index) => {
                let icon;
                switch (index % 5) {
                  case 0:
                    icon = <Calendar className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                    break;
                  case 1:
                    icon = <Users className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                    break;
                  case 2:
                    icon = <BarChart3 className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                    break;
                  case 3:
                    icon = <Target className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                    break;
                  case 4:
                    icon = <ChartPie className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                    break;
                  default:
                    icon = <Calendar className="h-5 w-5 text-arshield-orange flex-shrink-0 mt-0.5" />;
                }
                
                return (
                  <li key={index} className="flex items-start space-x-3">
                    {icon}
                    <span className="text-arshield-gray text-sm">{goal}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimatedCard>
      ),
    };
  });

  return (
    <div className="w-full py-8">
      <Timeline data={timelineData} />
    </div>
  );
} 