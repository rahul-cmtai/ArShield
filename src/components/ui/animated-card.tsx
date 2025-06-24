import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar, Users, BarChart3, Target, Award, ChartPie } from "lucide-react";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title: string;
  status?: "active" | "planned";
  children?: React.ReactNode;
  icon?: "calendar" | "users" | "chart" | "target" | "award" | "pie";
  className?: string;
}

export const AnimatedCard = ({
  title,
  status = "planned",
  children,
  icon = "calendar",
  className,
  ...props
}: AnimatedCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-5 w-5 text-arshield-orange" />;
      case "users":
        return <Users className="h-5 w-5 text-arshield-orange" />;
      case "chart":
        return <BarChart3 className="h-5 w-5 text-arshield-orange" />;
      case "target":
        return <Target className="h-5 w-5 text-arshield-orange" />;
      case "award":
        return <Award className="h-5 w-5 text-arshield-orange" />;
      case "pie":
        return <ChartPie className="h-5 w-5 text-arshield-orange" />;
      default:
        return <Calendar className="h-5 w-5 text-arshield-orange" />;
    }
  };

  return (
    <motion.div
      className={cn(
        "bg-white rounded-lg p-6 shadow-md border border-gray-100",
        status === "active" && "border-l-4 border-l-arshield-orange",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      {...props}
    >
      {status === "active" && (
        <div className="mb-4">
          <span className="bg-arshield-orange text-white text-sm font-semibold px-4 py-1 rounded-full">
            Active
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-arshield-charcoal mb-4">{title}</h3>
      
      <div className="text-arshield-gray">
        {children}
      </div>
      
      {status === "active" && (
        <motion.div 
          className="mt-4 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Award className="h-5 w-5 text-arshield-orange mr-2" />
          <span className="text-arshield-orange font-medium text-sm">Current Focus Area</span>
        </motion.div>
      )}
    </motion.div>
  );
}; 