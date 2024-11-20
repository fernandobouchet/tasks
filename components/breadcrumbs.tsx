"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment, ReactElement } from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter((item) => item !== "dashboard" && item !== "");

  const breadcrumbItems: ReactElement[] = [];
  let breadcrumbPage: ReactElement = <></>;

  for (let i = 0; i < segments.length; i++) {
    const route = segments[i];

    const href = `/dashboard/${route}`;

    if (i === segments.length - 1) {
      breadcrumbPage = (
        <BreadcrumbItem>
          <BreadcrumbPage>{route}</BreadcrumbPage>
        </BreadcrumbItem>
      );
    } else {
      breadcrumbItems.push(
        <Fragment key={href}>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={href}>{route}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Fragment>
      );
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard">dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems}
        {segments.length >= 1 && <BreadcrumbSeparator />}
        {breadcrumbPage}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { Breadcrumbs };
