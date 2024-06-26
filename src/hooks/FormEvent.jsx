import { useEffect, useMemo, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'animate.css';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { differenceInSeconds } from 'date-fns/differenceInSeconds';
import { addHours } from 'date-fns';
import { Save } from 'lucide-react';
import { Button, Input, Label, Separator } from '../components/ui';
import { Textarea } from '../components/ui/textarea';
import { useStoreCalendar } from './useStoreCalendar';
import { useUiStore } from './useUiStore';

export const FormEvent = () => {
  const { isActive, startSavingEvent } = useStoreCalendar();
  const { onCloseModal } = useUiStore();

  const [formSubmited, setFormSubmited] = useState(false);

  const [formValues, setFormValues] = useState({
    start: new Date(),
    end: addHours(new Date(), 2),
    title: '',
    note: '',
  });

  const isValidTitle = useMemo(() => {
    if (!formSubmited) return '';

    return formValues.title.length > 0 ? '' : 'invalid:border border-red-500';
  }, [formValues.title, formSubmited]);

  useEffect(() => {
    if (isActive !== null) setFormValues({ ...isActive });
  }, [isActive]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormSubmited(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire({
        title: 'Error dates',
        icon: 'error',
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__fast
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__fast
    `,
        },
      });
      return;
    }

    if (formValues.title.length <= 0) return;

    console.log(formValues);

    await startSavingEvent(formValues);
    onCloseModal();
    setFormSubmited(false);
  };
  return (
    <>
      <div className="w-[300px] sm:w-[400px]">
        <div>
          <h1 className="text-xl font-semibold my-1">New Event</h1>
          <span>Add or update a note.</span>
        </div>
        <Separator className="bg-primary my-2" />
        <form onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1">
              <Label>Start date</Label>
              <DatePicker
                dateFormat="dd/MM/yyyy h:mm aa"
                minDate={formValues.start}
                isClearable
                showTimeSelect
                selected={formValues.start}
                onChange={(event) => onDateChange(event, 'start')}
                className="w-full h-9 rounded-sm"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>End date</Label>
              <DatePicker
                dateFormat="dd/MM/yyyy h:mm aa"
                minDate={formValues.end}
                isClearable
                showTimeSelect
                selected={formValues.end}
                onChange={(event) => onDateChange(event, 'end')}
                className="w-full h-9 rounded-sm"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Title</Label>
              <Input
                name="title"
                value={formValues.title}
                onChange={onInputChange}
                placeholder="Insert a title"
                className={`${isValidTitle}`}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>Note</Label>
              <Textarea
                className="resize-y"
                name="note"
                value={formValues.note}
                onChange={onInputChange}
                placeholder="Add a description"
              />
            </div>
            <div className="grid grid-cols-1">
              <Button className="flex">
                <Save className="mr-2" /> Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
