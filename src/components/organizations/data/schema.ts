import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  date_time: z.string(),
  status: z.string(),
  delivery_person: z.string(),
  collector: z.string(),
  total_cost: z.string(),
})

export type Task = z.infer<typeof taskSchema>
