import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import { Layout } from "../ui/layout";

export default function Tasks() {
  return (
    <Layout>
      <Layout.Body>
        <>
          <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
            <DataTable data={tasks} columns={columns} />
          </div>
        </>
      </Layout.Body>
    </Layout>
  );
}
