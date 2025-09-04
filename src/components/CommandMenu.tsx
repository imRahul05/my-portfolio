import React, { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';
import { Home, User, Code, Award, Briefcase, GraduationCap, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

interface CommandMenuProps {
  sections: { id: string; label: string }[];
  scrollTo: (id: string) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export function CommandMenu({ sections, scrollTo, isOpen, setIsOpen }: CommandMenuProps) {
  // Internal state for standalone use if external state is not provided
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use either the external or internal state
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = setIsOpen || setInternalOpen;

  // Toggle the menu when the user presses Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  // Get section icon based on id
  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'home':
        return <Home className="mr-2 h-4 w-4" />;
      case 'about':
        return <User className="mr-2 h-4 w-4" />;
      case 'skills':
        return <Code className="mr-2 h-4 w-4" />;
      case 'experience':
        return <Award className="mr-2 h-4 w-4" />;
      case 'projects':
        return <Briefcase className="mr-2 h-4 w-4" />;
      case 'education':
        return <GraduationCap className="mr-2 h-4 w-4" />;
      case 'contact':
        return <Mail className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            {sections.map((section) => (
              <CommandItem
                key={section.id}
                onSelect={() => {
                  scrollTo(section.id);
                  setOpen(false);
                }}
              >
                {getSectionIcon(section.id)}
                {section.label}
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() => {
                window.open("https://github.com/imRahul05", "_blank");
                setOpen(false);
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.open("https://linkedin.com/in/imrahul05", "_blank");
                setOpen(false);
              }}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.open("https://twitter.com/imrahul165", "_blank");
                setOpen(false);
              }}
            >
              <FaXTwitter className="mr-2 h-4 w-4" />
              Twitter
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Resume">
            <CommandItem
              onSelect={() => {
                window.open("/Rahul_Kumar_Resume.pdf", "_blank");
                setOpen(false);
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default CommandMenu;
