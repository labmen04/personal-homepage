type ContactLink = {
  label: string;
  href: string;
};

export const profile: {
  displayName: { zh: string; en: string };
  role: { zh: string; en: string };
  intro: { zh: string; en: string };
  currently: { zh: string; en: string };
  focus: { zh: string; en: string };
  email: string;
  links: ContactLink[];
} = {
  displayName: {
    zh: "\u5b9e\u9a8c\u5ba4\u4eba\u545804",
    en: "Labmem04",
  },
  role: {
    zh: "\u5b9e\u9a8c\u5ba4\u4eba\u545804\uff0cCodex\u6d4b\u8bd5\u4e2d",
    en: "Lab member 04 exploring Codex.",
  },
  intro: {
    zh: "\u6211\u6b63\u5728\u7528\u8fd9\u4e2a\u4eba\u4e3b\u9875\u6d4b\u8bd5 Codex \u7684\u8bbe\u8ba1\u3001\u5f00\u53d1\u4e0e\u90e8\u7f72\u80fd\u529b\u3002\u8fd9\u91cc\u4f1a\u9010\u6b65\u8bb0\u5f55\u4e2a\u4eba\u54c1\u724c\u3001AI \u4ea7\u54c1\u548c\u521b\u610f\u9879\u76ee\u76f8\u5173\u7684\u63a2\u7d22\u3002",
    en: "I am using this personal homepage to test Codex across design, development, and deployment. This space will gradually collect explorations around personal branding, AI products, and creative projects.",
  },
  currently: {
    zh: "\u76ee\u524d\u4e13\u6ce8\u4e8e\u4e2a\u4eba\u54c1\u724c\u3001AI \u4ea7\u54c1\u548c\u521b\u610f\u9879\u76ee\u3002",
    en: "Currently focused on personal branding, AI products, and creative projects.",
  },
  focus: {
    zh: "\u6e05\u6670\u8868\u8fbe\u3001\u5ba1\u7f8e\u7cfb\u7edf\u3001\u957f\u671f\u4e3b\u4e49\u548c\u6709\u6e29\u5ea6\u7684\u6280\u672f\u3002",
    en: "Clarity, visual systems, long-term thinking, and humane technology.",
  },
  email: "labmen04@gmail.com",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
  ],
};
