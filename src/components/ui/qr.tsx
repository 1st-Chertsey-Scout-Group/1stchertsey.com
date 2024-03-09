import * as React from "react";
import { QRCode } from "react-qrcode-logo";
import { cn } from "@/lib/utils";

export interface QrProps extends React.InputHTMLAttributes<HTMLDivElement> {
  url: string;
}

const Qr = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & QrProps
>(({ className, url, ...props }, ref) => {
  return (
    <div className={cn("", className)} ref={ref} {...props}>
      <QRCode value={url} qrStyle={"squares"} />
    </div>
  );
});
Qr.displayName = "Qr";

export { Qr };
