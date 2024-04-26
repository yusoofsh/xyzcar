import { Breadcrumbs } from "@/lib/components/products/breadcrumbs";
import { InvoiceEditForm } from "@/lib/components/products/edit-form";
import { fetchCustomers, fetchInvoiceById } from "@/lib/utils/data";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Products",
};

const InvoiceEditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Products", href: "/dashboard" },
          {
            label: "Edit Invoice",
            href: `/dashboard/${id}/edit`,
            active: true,
          },
        ]}
      />
      <InvoiceEditForm invoice={invoice} customers={customers} />
    </>
  );
};
export default InvoiceEditPage;
