import React, { forwardRef, type FC } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'


type ListBoxProps = {
    children: React.ReactNode
    onSelect: (value: string) => void
}

export const ListBox: FC<ListBoxProps> = ({childredn, onSelect}) => {
    return (
        <ToggleGroup.Root type='single' loop={false} onValueChange={onSelect}>
            {children}
            </ToggleGroup.Root>
    )
}

