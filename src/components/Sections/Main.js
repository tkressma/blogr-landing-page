import React from "react";
import DesignSection from "./Section";
import Divider from "./Divider";
import editor__desktop from "../../assets/illustration-editor-desktop.svg";
import editor__mobile from "../../assets/illustration-editor-mobile.svg";
import laptop__desktop from "../../assets/illustration-laptop-desktop.svg";
import laptop__mobile from "../../assets/illustration-laptop-mobile.svg";

const Main = () => {
  const firstSectionContent = [
    {
      title: "Introducing an extensible editor",
      info: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      title: "Robust content management",
      info: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
    },
  ];

  const lastSectionContent = [
    {
      title: "Free, Open, Simple",
      info: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      title: "Powerful Tooling",
      info: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];

  return (
    <main>
      <DesignSection
        sectionContent={firstSectionContent}
        desktopImg={editor__desktop}
        mobileImg={editor__mobile}
        lastSection={false}
      />
      <Divider />
      <DesignSection
        sectionContent={lastSectionContent}
        desktopImg={laptop__desktop}
        mobileImg={laptop__mobile}
        lastSection={true}
      />
    </main>
  );
};

export default Main;
