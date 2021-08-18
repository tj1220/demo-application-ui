import { gender, departments } from './../../../shared/enums';
export const gridColumns: any[] = [
  {
    field: `employeeId`,
    title: `Employee ID`,
    filter: {
        type: `text`
    }
  },
  {
    field: `employeeName`,
    title: `Employee Name`,
    filter: {
        type: `text`
    },
    classObject: {
      'grid-main-column': true
    },
    isMaster: true
  },
  {
    field: `doj`,
    title: `Joining Date`,
    filter: {
      type: `date`
    },
    format: {
      type: 'Date',
      syntax: '{0: MM-dd-yyyy}'
    }
  },
  {
      field: `age`,
      title: `Age`,
      filter: {
          type: `numeric`
      },
      classObject: {
        'text-center': true
      },
      headerClassObject: {
        'text-center': true
      }
  },
  {
    field: `gender`,
    title: `Gender`,
    filter: {
        type: `dropdown`,
        dropdownData: Object.values(gender),
        dropdownDefaultText: 'Both'
    }
  },
  {
    field: `department`,
    title: `Department`,
    filter: {
        type: `dropdown`,
        dropdownData: Object.values(departments),
        dropdownDefaultText: 'All'
    }
  }
];
