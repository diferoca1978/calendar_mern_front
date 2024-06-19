import { X } from 'lucide-react';
import { Button, Separator } from '../../components/ui';

/* eslint-disable react/prop-types */
export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 flex justify-center items-center transition-colors ${
          isOpen ? 'visible bg-black/50' : 'invisible'
        }`}
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-primary-foreground rounded-xl p-6 shadow-lg transition-all ${
            isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
          }`}
        >
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 bg-transparent hover:bg-transparent"
          >
            <X />
          </Button>
          <Separator className="my-2" />
          {children}
        </div>
      </div>
    </>
  );
};
