export interface ModalProps {
  show: boolean;
  title: string;
  description: string;
  path: string;
  errors: boolean;
  closeEvent: () => void;
}