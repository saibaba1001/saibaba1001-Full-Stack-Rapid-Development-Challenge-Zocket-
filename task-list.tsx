import { useQuery } from "@tanstack/react-query";
import { Task } from "@shared/schema";
import { TaskCard } from "./task-card";
import { motion } from "framer-motion";

export function TaskList() {
  const { data: tasks, isLoading } = useQuery<Task[]>({
    queryKey: ["/api/tasks"]
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 rounded-lg animate-pulse bg-muted"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </motion.div>
  );
}
