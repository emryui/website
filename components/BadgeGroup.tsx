import * as React from "react";
import { ArrowRight } from "react-feather";

export type BadgePosition = "leading" | "trailing";

export type BadgeSize = "md" | "lg";

export interface BadgeGroupProps {
  badgeText: string;
  message: string;
  showIcon?: boolean;
  size?: BadgeSize;
  onClick?: () => void;
}

export const BadgeGroup = (props: BadgeGroupProps) => {
  const { badgeText, message, showIcon = true, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="pr-2.5 flex cursor-pointer items-center gap-x-3 self-start rounded-2xl bg-primary-50 py-1 pl-1"
    >
      <div className="px-2.5 py-0.5 rounded-2xl bg-white text-sm font-medium text-primary-700 antialiased">
        {badgeText}
      </div>
      <div className="flex items-center gap-x-1 text-sm font-medium text-primary-700 antialiased">
        {message}{" "}
        {showIcon && <ArrowRight className="h-4 w-4 text-primary-500" />}
      </div>
    </div>
  );
};

BadgeGroup.displayName = "Badge Group";
