import { ReactNode, ComponentType } from 'react';

export type AppearanceTypes = 'error' | 'info' | 'success' | 'warning';

export type Placement = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';

export interface ToastProps {
    appearance: AppearanceTypes;
    autoDismiss: boolean | number; // inherited from ToastProvider
    autoDismissTimeout: number; // inherited from ToastProvider
    children: ReactNode;
    isRunning: boolean;
    onDismiss: (id?: string) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    placement: Placement;
    transitionDuration: number; // inherited from ToastProvider
    transitionState: TransitionState; // inherited from ToastProvider
}

export interface ToastConsumerContext {
    add: AddToast;
    remove: RemoveToast;
    toasts: Array<{
        content: ReactNode;
        id: string;
        appearance: AppearanceTypes;
    }>;
}

export interface ToastConsumerProps {
    children: (context: ToastConsumerContext) => ReactNode;
}

export interface ToastContainerProps {
    children: ReactNode;
    hasToasts: boolean;
    placement: Placement;
}

export interface ToastProviderProps {
    autoDismiss?: boolean | number;
    autoDismissTimeout?: number;
    children: ReactNode;
    components?: {
        ToastContainer?: ComponentType<ToastContainerProps>;
        Toast?: ComponentType<ToastProps>;
    };
    placement?: Placement;
    transitionDuration?: number;
}

export interface Options {
    appearance: AppearanceTypes;
    autoDismiss?: boolean;
    id?: string
    onDismiss?: (id: string) => void;
}

export type AddToast = (content: ReactNode, options?: Options, callback?: (id: string) => void) => void;

export type RemoveToast = (id: string, callback?: (id: string) => void) => void;

export const DefaultToastContainer: ComponentType<ToastContainerProps>;
export const DefaultToast: ComponentType<ToastProps>;
export const ToastConsumer: ComponentType<ToastConsumerProps>;
export const ToastProvider: ComponentType<ToastProviderProps>;
export function withToastManager(...args: any[]): any;
export function useToasts(): {
    addToast: AddToast;
    removeToast: RemoveToast;
    toastStack: Array<{
        content: ReactNode;
        id: string;
        appearance: AppearanceTypes;
    }>;
};
