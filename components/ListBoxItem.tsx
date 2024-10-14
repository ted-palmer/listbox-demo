import React, { type FC } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import classNames from "classnames";

type ListBoxItemProps = React.ComponentProps<typeof ToggleGroup.Item> & {
  className?: string;
};

export const ListBoxItem: FC<ListBoxItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ToggleGroup.Item
      {...props}
      className={classNames(
        "relative flex h-[25px] p-2 select-none items-center rounded-[3px] text-[14px] leading-none text-violet11",
        "data-[disabled]:pointer-events-none data-[disabled]:text-mauve8",
        "data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
        "focus:shadow-[0_0_0_2px] focus:shadow-violet11 focus:outline-none",
        "data-[state=on]:bg-violet11 data-[state=on]:text-white",
        "data-[state=on]:focus:outline-white data-[state=on]:focus:outline-offset-[-2px]",
        "w-full",
        className
      )}
    >
      {children}
    </ToggleGroup.Item>
  );
};
