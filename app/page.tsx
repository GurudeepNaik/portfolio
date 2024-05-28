"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header/Header";

import MyName from "../components/Home/MyName/MyName";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";

import Footer from "../components/Footer/Footer";

import { useAppContext } from "../components/AppContextFolder/AppContext";

import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";

export default function Home() {
  const context = useAppContext();

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    context.sharedState.finishedLoading = true;
    context.setSharedState(context.sharedState);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const isProd = process.env.NODE_ENV === "production";
  const githubUrl = "https://github.com/GurudeepNaik/portfolio";
  return (
    <>
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header />
        <MyName />
        <SocialMediaArround />
        <AboutMe  />
        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />
        <Footer githubUrl={githubUrl} hideSocialsInDesktop={true} />
        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}
