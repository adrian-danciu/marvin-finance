export interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: {
    title: string;
    description: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    btnText: string;
    btnSubmit: (email?: string) => void;
    btnCancel: () => void;
    email?: string;
    setEmail?: (email: string) => void;
    onSubmit?: () => void;
  };
}
