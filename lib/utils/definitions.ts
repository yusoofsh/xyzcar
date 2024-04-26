// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
import { NextRequest, NextResponse } from "next/server";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

export interface Invoice {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
}

export interface Revenue {
  month: string;
  revenue: number;
}

export interface LatestInvoice {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
}

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export interface InvoicesTable {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
}

export interface CustomersTable {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
}

export interface FormattedCustomersTable {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
}

export interface CustomerField {
  id: string;
  name: string;
}

export interface InvoiceForm {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
}

export type Middleware = (
  request: NextRequest,
  response: NextResponse,
  next: () => Promise<void>
) => void;
