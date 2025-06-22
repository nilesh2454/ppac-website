import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Notification } from "@/context/NotificationsContext";
import { useForm, Controller } from "react-hook-form";

interface NotificationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Notification, 'id'>) => void;
  defaultValues?: Notification;
}

const NotificationForm = ({ isOpen, onClose, onSubmit, defaultValues }: NotificationFormProps) => {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<Notification>({ defaultValues });

  const handleFormSubmit = (data: Notification) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{defaultValues ? 'Edit' : 'Add'} Notification</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title", { required: "Title is required" })} />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" {...register("date", { required: "Date is required" })} />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register("description")} />
          </div>
          <div className="flex items-center space-x-2">
            <Controller
              name="isUrgent"
              control={control}
              render={({ field }) => (
                <Checkbox id="isUrgent" checked={field.value} onCheckedChange={field.onChange} />
              )}
            />
            <Label htmlFor="isUrgent">Mark as Urgent</Label>
          </div>
          <div>
            <Label htmlFor="file">Attachment (PDF/DOC)</Label>
            <Input id="file" type="file" accept=".pdf,.doc,.docx" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationForm; 