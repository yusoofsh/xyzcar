"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  merek: z.string(),
  jenis: z.string(),
  jumlah_stok: z.string(),
  harga: z.string(),
  keterangan: z.string(),
});
const CreateInvoice = FormSchema.omit({ id: true });
const UpdateInvoice = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(_state: State, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = CreateInvoice.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create invoice.",
    };
  }

  const { merek, jenis, jumlah_stok, harga, keterangan } = validatedFields.data;

  try {
    await sql`
      INSERT INTO invoices (merek, jenis, jumlah_stok, harga, keterangan)
      VALUES (${merek}, ${jenis}, ${jumlah_stok}, ${harga}, ${keterangan})
    `;
  } catch (error) {
    return {
      message: "Database error: Failed to create invoice.",
    };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateInvoice(
  id: string,
  _state: State,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = UpdateInvoice.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to update invoice.",
    };
  }

  const { merek, jenis, jumlah_stok, harga, keterangan } = validatedFields.data;

  try {
    await sql`
    UPDATE invoices
    SET  merek = ${merek}, jenis = ${jenis}, jumlah_stok = ${jumlah_stok}, harga = ${harga}, keterangan = ${keterangan}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: "Database error: Failed to update invoice." };
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteInvoice(_id: string) {
  await sql`
  DELETE FROM invoices
  WHERE id = ${_id}`;
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
