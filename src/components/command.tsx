import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useRef } from "react";

interface CommandProps {
  openCommand: boolean;
  closeCommand: () => void;
}

export function CommandDemo({ openCommand, closeCommand }: CommandProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (openCommand && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openCommand]);

  return (
    <section
      onClick={() => {
        closeCommand();
      }}
      className={`bg-zinc-900/90 ${
        !openCommand && "hidden"
      }  backdrop-blur-md w-screen h-screen z-30 fixed overflow-hidden`}
    >
      <Command
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg dark bg-zinc-900/90 backdrop-blur-sm shadow-gray-500/20 shadow-2xl container h-auto absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-zinc-400`}
      >
        <CommandInput
          ref={inputRef}
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </section>
  );
}
