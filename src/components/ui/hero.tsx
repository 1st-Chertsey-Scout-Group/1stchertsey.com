import * as React from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

const Hero = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <div className="bg-red-600" ref={ref} aria-label="hero" {...props} />
));
Hero.displayName = "Hero";

const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("m-0 text-4xl font-bold text-white", className)}
    {...props}
  />
));
HeroTitle.displayName = "HeroTitle";

const HeroDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("m-0 text-lg leading-6 text-white", className)}
    {...props}
  />
));
HeroDescription.displayName = "HeroDescription";

export interface HeroMeetingProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  day: string;
  start: string;
  end: string;
}

const HeroMeeting = React.forwardRef<HTMLDivElement, HeroMeetingProps>(
  ({ className, day, start, end, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-row justify-center gap-4 text-base text-white",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex gap-2">
          <Calendar /> <span> {day}</span>
        </div>
        <div className="flex gap-2">
          <Clock /> {start} til {end}.
        </div>
      </div>
    );
  },
);
HeroMeeting.displayName = "HeroMeeting";

export { Hero, HeroTitle, HeroDescription, HeroMeeting };
