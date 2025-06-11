import { DataTable } from "@/components/data-table";
import { forklifts } from "./forklifts-data";

export default function Page() {
  return <DataTable data={forklifts} />;
}
