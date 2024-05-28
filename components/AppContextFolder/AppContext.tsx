"use client";
import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  RefObject,
  useContext,
} from "react";

// Define types for the context state
interface NavBarState {
  IntervalEvent: any;
  scrolling: any;
  scrollSizeY: any;
}

interface ScrollingState {
  IntervalEvent: any;
}

interface PortfolioState {
  NavBar: NavBarState;
  Scrolling: ScrollingState;
}

interface UserdataState {
  timerCookieRef: RefObject<any>;
  windowSizeTracker: RefObject<any>;
  mousePositionTracker: RefObject<any>;
}

interface TypingState {
  keyboardEvent: any;
  eventInputLostFocus: any;
}

interface SharedState {
  portfolio: PortfolioState;
  userdata: UserdataState;
  typing: TypingState;
  finishedLoading: boolean;
}

interface AppContextProps {
  sharedState: SharedState;
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>;
}

// Create the context with an initial value of null
const AppContext = createContext<AppContextProps | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

// Define the context provider component
const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const timerCookieRef = useRef<any>(null);
  const windowSizeTrackerRef = useRef<any>(null);
  const mousePositionRef = useRef<any>(null);

  const [sharedState, setSharedState] = useState<SharedState>({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookieRef,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};

export { AppContext, AppContextProvider, useAppContext };
