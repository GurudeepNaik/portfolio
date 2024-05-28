import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = (props: any) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/hktitof", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/abdellatif-anaflous/",
    Icon: LinkedinIcon,
  },
  { href: "https://www.instagram.com/titof_abdo/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <></>
    // <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
    // </div>
  );
}
