import {
  DeleteInvoice,
  UpdateInvoice,
} from "@/lib/components/products/buttons";
import { fetchFilteredInvoices } from "@/lib/utils/data";

export const InvoicesTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices.map((invoice) => (
              <div
                className="mb-2 w-full rounded-md bg-white p-4"
                key={invoice.id}
              >
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{invoice.merek}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th className="px-4 py-5 font-medium sm:pl-6" scope="col">
                  ID
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Merek
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Jenis
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Jumlah Stok
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Harga
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Keterangan
                </th>
                <th className="relative py-3 pl-6 pr-3" scope="col">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices.map((invoice) => (
                <tr
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  key={invoice.id}
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{invoice.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.merek}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.jenis}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.jumlah_stok}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.harga}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.keterangan}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
