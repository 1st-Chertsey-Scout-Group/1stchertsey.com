import * as React from "react";
import { cn } from "@/lib/utils";

const LinkList = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <div
    className="flex flex-col gap-4"
    ref={ref}
    aria-label="links"
    {...props}
  />
));
LinkList.displayName = "LinkList";

const LinkListHeader = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <div className="pt-4 text-2xl font-bold" ref={ref} {...props} />
));
LinkListHeader.displayName = "LinkListHeader";

const LinkListFooter = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <div className="" ref={ref} {...props} />
));
LinkListFooter.displayName = "LinkListFooter";

export interface LinkItemProps
  extends React.InputHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
}

const LinkItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & LinkItemProps
>(({ className, title, description, ...props }, ref) => {
  return (
    <a
      className={cn(
        "flex flex-col bg-zinc-100 p-4 hover:bg-zinc-200",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="pb-2">
        <p className="text-lg font-bold leading-5">{title}</p>
      </div>
      <span>
        <p>{description}</p>
      </span>
    </a>
  );
});
LinkItem.displayName = "LinkItem";

export { LinkList, LinkListHeader, LinkListFooter, LinkItem };
