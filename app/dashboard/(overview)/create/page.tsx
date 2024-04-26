import { Breadcrumbs } from "@/lib/components/products/breadcrumbs";
import { InvoiceAddForm } from "@/lib/components/products/create-form";
import { fetchCustomers } from "@/lib/utils/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product",
};

const InvoiceCreatePage = async () => {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Products", href: "/dashboard" },
          {
            label: "Create Product",
            href: "/dashboard/create",
            active: true,
          },
        ]}
      />
      <InvoiceAddForm customers={customers} />
    </main>
  );
};
export default InvoiceCreatePage;
