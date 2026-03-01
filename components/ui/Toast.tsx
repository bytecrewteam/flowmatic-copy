'use client';

// useEffect removed — toast auto-removal is handled by useToastStore
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useToastStore } from '@/lib/store/useToastStore';

function Toast() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-4 right-4 z-[400] flex flex-col gap-2 max-w-sm w-full md:w-auto">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onClose,
}: {
  toast: { id: string; type: 'success' | 'error' | 'warning' | 'info'; message: string };
  onClose: () => void;
}) {
  // FIX: Removed the redundant useEffect setTimeout here.
  // useToastStore already auto-removes toasts after their configured duration.
  // Having a second timer in ToastItem caused toasts to close at the wrong time
  // (always 4000ms regardless of the toast's actual duration setting).

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#00c48c]" />,
    error: <AlertCircle className="w-5 h-5 text-[#f04438]" />,
    warning: <AlertTriangle className="w-5 h-5 text-[#f5a623]" />,
    info: <Info className="w-5 h-5 text-[#0099ff]" />,
  };

  const backgrounds = {
    success: 'bg-[#00c48c]/10 border-[#00c48c]/20',
    error: 'bg-[#f04438]/10 border-[#f04438]/20',
    warning: 'bg-[#f5a623]/10 border-[#f5a623]/20',
    info: 'bg-[#0099ff]/10 border-[#0099ff]/20',
  };

  return (
    <div
      className={`
        flex items-start gap-3 p-4 rounded-lg border shadow-lg
        bg-[#0f0f1c] ${backgrounds[toast.type]}
        animate-in slide-in-from-right duration-200
      `}
      role="alert"
    >
      {icons[toast.type]}
      <p className="flex-1 text-sm text-[#e8e8f4]">{toast.message}</p>
      <button
        onClick={onClose}
        className="text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export { Toast };
