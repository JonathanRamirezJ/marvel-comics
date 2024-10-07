export interface ModalProps {
  show: boolean;
  title: string;
  description: string;
  path: string;
  closeEvent: () => void;
}