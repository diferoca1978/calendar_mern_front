import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useForm } from 'react-hook-form';
import { Textarea } from '../../components/ui/textarea';
import { Modal } from './Modal';
import { Input, Label } from '../../components/ui';

const initialValues = {
  start: '',
  end: '',
  title: '',
  note: '',
};

export const CalendarModal = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('closed');
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <Card className="w-[350px] rounded-lg border-primary">
          <CardHeader className="border-b border-primary mb-4">
            <CardTitle>New Event</CardTitle>
            <CardDescription>Create a new event or update it!!</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1">
                  <Label>Start date</Label>
                  <Input placeholder="Start date" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label>End date</Label>
                  <Input placeholder="End date" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label>Title</Label>
                  <Input placeholder="Insert title" />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label>Note</Label>
                  <Textarea
                    placeholder="Type your note here"
                    className="resize-y"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4 border border-primary rounded-xl"
          >
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Start Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="End Date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Note"
                      className="resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form> */}
      </Modal>
    </>
  );
};
