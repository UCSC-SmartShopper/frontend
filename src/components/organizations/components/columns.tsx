import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'

import { statuses } from '../data/data'
import { Task } from '../data/schema'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Order' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('id')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'date_time',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Date / Time' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('date_time')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      )

      if (!status) {
        return null
      }
      return (
        <div className='flex w-[100px] items-center'>
          {status.icon && (
            <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'delivery_person',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Delivery Person' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('delivery_person')}</div>,

    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'collector',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Collector' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('collector')}</div>,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'total_cost',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Total Cost' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('total_cost')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
]
