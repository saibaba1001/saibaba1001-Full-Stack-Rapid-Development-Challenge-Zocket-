import { CreateTask } from "@/components/create-task";
import { TaskList } from "@/components/task-list";
import { SocialLinks } from "@/components/social-links";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { Brain, Sparkles, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto py-8 px-4">
        <motion.header 
          className="text-center mb-12"
          {...fadeIn}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Brain className="w-12 h-12 text-primary" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent pb-2">
              Saibaba AI Task Management
            </h1>
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Bot className="w-12 h-12 text-secondary" />
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-4 text-lg">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <p>Experience the future of task management with AI-powered insights</p>
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
          </div>
        </motion.header>

        <motion.div 
          className="max-w-2xl mx-auto space-y-8 relative"
          {...slideUp}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl -z-10" />
          <CreateTask />
          <TaskList />
        </motion.div>

        <SocialLinks />

        <motion.footer 
          className="text-center mt-12 text-sm text-muted-foreground"
          {...fadeIn}
        >
          <p>&copy; @SAIBABA COPYRIGHT 2025</p>
        </motion.footer>
      </div>
    </div>
  );
}