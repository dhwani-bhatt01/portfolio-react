import { ReactComponent as ContentIcon } from "./../../../../assets/content-service.svg";
import { ReactComponent as DevelopmentIcon } from "./../../../../assets/code-service.svg";
import { ReactComponent as DesignIcon } from "./../../../../assets/design-service.svg";

export const CardData = [
  {
    CardIcon: <ContentIcon />,
    CardHeading: "Content Curation",
    CardContent:
      "Being a scribbler I provide SEO-friendly quality content, tensile with every domain. My blogs, vary from technical to life hacks.",
  },
  {
    CardIcon: <DevelopmentIcon />,
    CardHeading: "Web Development",
    CardContent:
      "Developing web applications using React. I enjoy building everything from simple UI to rich interactive web apps.",
  },
  {
    CardIcon: <DesignIcon />,
    CardHeading: "UI/UX Design",
    CardContent:
      "My UI design is a complete package of interactive prototyping, wireframing, high idelity visual design, and user personas.",
  },
];
