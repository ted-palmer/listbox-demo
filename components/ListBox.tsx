import React, { type FC } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import classNames from "classnames";

type ListBoxProps = React.ComponentProps<typeof ToggleGroup.Root> & {
  children: React.ReactNode;
  className?: string;
};

export const ListBox: FC<ListBoxProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ToggleGroup.Root
      {...props}
      className={classNames(
        "flex flex-col items-start p-2 rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] border border-gray-500 gap-1",
        className
      )}
    >
      {children}
    </ToggleGroup.Root>
  );
};
