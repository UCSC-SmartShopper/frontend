import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const statuses = [
  {
    value: 'None',
    label: 'None',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: 'Active',
    label: 'Active',
    icon: CircleIcon,
  },
  {
    value: 'Completed',
    label: 'Completed',
    icon: CheckCircledIcon,
  },
  {
    value: 'Ready',
    label: 'Ready',
    icon: StopwatchIcon,
  },
  {
    value: 'Cancelled',
    label: 'Cancelled',
    icon: CrossCircledIcon,
  },
]

export const collectors = [
  {
    label: 'Customer',
    value: 'Customer',
  },
  {
    label: 'Delivery Person',
    value: 'Delivery Person',
  },
]
