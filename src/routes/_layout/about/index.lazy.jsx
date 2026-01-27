import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../../../pages/about";

export const Route = createLazyFileRoute("/_layout/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
