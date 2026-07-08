import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    category: string;
    title: string;
    details: {
      overview: string;
      capabilities: { title: string; description: string }[];
      portfolio: { title: string; description: string }[];
    };
  } | null;
}

export const ServiceDetailsModal = ({ isOpen, onClose, service }: ServiceDetailsModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <Badge variant="outline" className="mb-2 w-fit">
            {service.category}
          </Badge>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {service.title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-6 max-h-[70vh] overflow-y-auto pr-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Service Overview</h3>
            <DialogDescription className="text-muted-foreground">
              {service.details.overview}
            </DialogDescription>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Core Technical Capabilities</h3>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              {service.details.capabilities.map((cap, index) => (
                <li key={index}>
                  <span className="font-semibold text-foreground/90">{cap.title}:</span> {cap.description}
                </li>
              ))}
            </ul>
          </div>
          {service.details.portfolio.map((item, index) => (
            <div key={index} className="space-y-2 p-4 rounded-lg border bg-secondary/10">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
