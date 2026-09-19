import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: () => <Outlet />,
});
