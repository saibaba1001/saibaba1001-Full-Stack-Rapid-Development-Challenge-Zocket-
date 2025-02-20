import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

const socialLinks = [
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/sai-baba-ss/",
    label: "LinkedIn"
  },
  {
    icon: SiX,
    href: "https://x.com/SaiBabass1",
    label: "X (formerly Twitter)"
  },
  {
    icon: SiGithub,
    href: "https://github.com/saibaba1001",
    label: "GitHub"
  }
];

export function SocialLinks() {
  return (
    <div className="fixed bottom-8 right-8 flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-6 h-6 text-foreground" aria-label={label} />
        </motion.a>
      ))}
    </div>
  );
}