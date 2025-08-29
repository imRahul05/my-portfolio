import React, { useEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ 
  isOpen, 
  onClose, 
  children,
  className = '' 
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Create a portal to render the modal at the root level
  return createPortal(
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-[9999] ${className}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
