export interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: {
    title: string;
    description: string;
    icon: React.ReactNode;
    btnText: string;
    btnSubmit: () => void;
    btnCancel: () => void;
    children: React.ReactNode;
  };
}
