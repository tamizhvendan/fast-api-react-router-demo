import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("vendors", "routes/vendor.tsx"),
  route("customers", "routes/customer.tsx")
] satisfies RouteConfig;
