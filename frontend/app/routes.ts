import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/index.tsx"),
  route("vendors", "routes/vendor.tsx"),
  route("customers", "routes/customer.tsx")
] satisfies RouteConfig;
