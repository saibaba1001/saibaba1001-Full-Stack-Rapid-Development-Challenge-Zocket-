import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useState } from "react";
import { scale } from "@/lib/animations";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleComplete = async () => {
    await apiRequest("PATCH", `/api/tasks/${task.id}`, {
      completed: !task.completed
    });
    queryClient.invalidateQueries({ queryKey: ["/api/tasks"] });
  };

  const deleteTask = async () => {
    setIsDeleting(true);
    await apiRequest("DELETE", `/api/tasks/${task.id}`);
    queryClient.invalidateQueries({ queryKey: ["/api/tasks"] });
  };

  const priorityColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500"
  }[task.priority];

  return (
    <motion.div {...scale}>
      <Card className="p-4 backdrop-blur-lg bg-background/80 border shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <Checkbox
            checked={task.completed}
            onCheckedChange={toggleComplete}
            className="mt-1"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{task.title}</h3>
              <div
                className={`w-2 h-2 rounded-full ${priorityColor}`}
                title={`Priority: ${task.priority}`}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {task.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={deleteTask}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
