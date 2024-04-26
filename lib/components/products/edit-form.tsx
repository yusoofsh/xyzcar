"use client";
import { updateInvoice } from "@/lib/actions";
import { Button } from "@/lib/components/button";
import Link from "next/link";
import { useFormState } from "react-dom";

export const InvoiceEditForm = async ({ invoice }: { invoice: any }) => {
  const initialState = { message: "", errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="amount">
            Merek
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.merek}
                id="merek"
                name="merek"
                placeholder="Masukkan merek"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="amount">
            Jenis
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.jenis}
                id="jenis"
                name="jenis"
                placeholder="Masukkan jenis"
                type="text"
              />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="amount">
            Jumlah Stok
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.jumlah_stok}
                id="jumlah_stok"
                name="jumlah_stok"
                placeholder="Masukkan jumlah stok"
                type="number"
              />
            </div>
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="amount">
            Harga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.harga}
                id="harga"
                name="harga"
                placeholder="Masukkan harga"
                type="number"
              />
            </div>
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="amount">
            Keterangan
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={invoice.keterangan}
                id="keterangan"
                name="keterangan"
                placeholder="Masukkan keterangan"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          href="/dashboard"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
};
