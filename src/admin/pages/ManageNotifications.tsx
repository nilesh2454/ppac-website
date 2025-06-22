import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { useNotifications, Notification } from '@/context/NotificationsContext';
import NotificationForm from '../components/NotificationForm';

const ManageNotifications = () => {
  const { notifications, addNotification, updateNotification, deleteNotification } = useNotifications();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNotification, setEditingNotification] = useState<Notification | undefined>(undefined);

  const handleAdd = () => {
    setEditingNotification(undefined);
    setIsFormOpen(true);
  };

  const handleEdit = (notification: Notification) => {
    setEditingNotification(notification);
    setIsFormOpen(true);
  };

  const handleSubmit = (data: Omit<Notification, 'id'>) => {
    if (editingNotification) {
      updateNotification({ ...editingNotification, ...data });
    } else {
      addNotification(data);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manage Notifications</CardTitle>
        <Button onClick={handleAdd}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Notification
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map(notification => (
              <TableRow key={notification.id}>
                <TableCell>{notification.title}</TableCell>
                <TableCell>{notification.date}</TableCell>
                <TableCell>
                  {notification.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(notification)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteNotification(notification.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <NotificationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        defaultValues={editingNotification}
      />
    </Card>
  );
};

export default ManageNotifications; 