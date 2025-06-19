import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover,
  children,
}: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      ref={marqueeRef}
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:2rem]",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
      }}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          isHovered ? "animate-pause" : reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: "var(--duration)",
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] py-4",
          isHovered ? "animate-pause" : reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{
          animationDuration: "var(--duration)",
        }}
      >
        {children}
      </div>
    </div>
  );
}; 