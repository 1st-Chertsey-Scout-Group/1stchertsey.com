import * as React from "react";
import { cn } from "@/lib/utils";

const LinkList = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => (
  <div
    className="flex flex-col gap-8 py-8"
    ref={ref}
    aria-label="links"
    {...props}
  />
));
LinkList.displayName = "LinkList";

export interface LinkGroupProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  name: string;
}

const LinkGroup = React.forwardRef<HTMLDivElement, LinkGroupProps>(
  ({ children, name, ...props }, ref) => (
    <div className="flex flex-col gap-4" ref={ref} {...props}>
      <div className="pb-2 text-2xl font-bold">{name}</div>
      {children}
    </div>
  ),
);
LinkGroup.displayName = "LinkGroup";

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
>(({ children, className, title, description, ...props }, ref) => {
  return (
    <a
      className={cn("flex flex-col bg-zinc-100 hover:bg-zinc-200", className)}
      ref={ref}
      {...props}
    >
      {children && <div>{children}</div>}
      <div className="flex flex-col p-4">
        <div className="pb-2">
          <p className="text-lg font-bold leading-5">{title}</p>
        </div>
        <span className="">
          <p>{description}</p>
        </span>
      </div>
    </a>
  );
});
LinkItem.displayName = "LinkItem";

export { LinkList, LinkGroup, LinkListFooter, LinkItem };
